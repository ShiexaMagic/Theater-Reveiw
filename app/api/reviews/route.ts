import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import Review from '@/models/Review';
import User from '@/models/User';
import Play from '@/models/Play';
import PromoCode from '@/models/PromoCode';

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'გთხოვთ გაიაროთ ავტორიზაცია' },
        { status: 401 }
      );
    }

    const { playId, rating, title, content } = await req.json();

    if (!playId || !rating || !title || !content) {
      return NextResponse.json(
        { error: 'გთხოვთ შეავსოთ ყველა ველი' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'შეფასება უნდა იყოს 1-დან 5-მდე' },
        { status: 400 }
      );
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: 'მომხმარებელი არ მოიძებნა' },
        { status: 404 }
      );
    }

    const play = await Play.findById(playId);
    if (!play) {
      return NextResponse.json(
        { error: 'სპექტაკლი არ მოიძებნა' },
        { status: 404 }
      );
    }

    // Check if user already reviewed this play
    const existingReview = await Review.findOne({ user: user._id, play: playId });
    if (existingReview) {
      return NextResponse.json(
        { error: 'თქვენ უკვე დაწერეთ რეცენზია ამ სპექტაკლზე' },
        { status: 400 }
      );
    }

    // Create review
    const review = await Review.create({
      user: user._id,
      play: playId,
      rating,
      title,
      content,
    });

    // Update user review count
    user.reviewCount += 1;
    await user.save();

    // Update play average rating
    const reviews = await Review.find({ play: playId });
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    play.averageRating = avgRating;
    play.reviewCount = reviews.length;
    await play.save();

    // Check if user should get promo code (every 5 reviews)
    let promoCode = null;
    if (user.reviewCount % 5 === 0) {
      const code = `THEATER${user.reviewCount}${Date.now().toString(36).toUpperCase()}`;
      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + 3); // 3 months expiry

      promoCode = await PromoCode.create({
        code,
        user: user._id,
        discount: 10,
        expiresAt,
      });

      user.promoCodes.push(promoCode._id);
      await user.save();
    }

    return NextResponse.json(
      {
        message: 'რეცენზია წარმატებით დაემატა',
        review,
        promoCode: promoCode ? {
          code: promoCode.code,
          discount: promoCode.discount,
          expiresAt: promoCode.expiresAt,
        } : null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Review creation error:', error);
    return NextResponse.json(
      { error: 'რეცენზიის დამატების შეცდომა' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const playId = searchParams.get('playId');

    if (!playId) {
      return NextResponse.json(
        { error: 'სპექტაკლის ID არ არის მითითებული' },
        { status: 400 }
      );
    }

    await dbConnect();

    const reviews = await Review.find({ play: playId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error('Reviews fetch error:', error);
    return NextResponse.json(
      { error: 'რეცენზიების ჩატვირთვის შეცდომა' },
      { status: 500 }
    );
  }
}
