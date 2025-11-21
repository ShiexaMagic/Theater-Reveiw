import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: 'გთხოვთ გაიაროთ ავტორიზაცია' },
        { status: 401 }
      );
    }

    // Demo user data for Jeff Temo (works without MongoDB)
    if (session.user.email === 'jeff@demo.com') {
      return NextResponse.json({
        reviewCount: 3,
        promoCodes: [
          {
            _id: 'demo-promo-1',
            code: 'THEATER2024DEMO',
            discount: 10,
            isUsed: false,
            expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
            createdAt: new Date(),
          },
        ],
      });
    }

    await dbConnect();

    const user = await User.findOne({ email: session.user.email })
      .populate('promoCodes');

    if (!user) {
      return NextResponse.json(
        { error: 'მომხმარებელი არ მოიძებნა' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      reviewCount: user.reviewCount,
      promoCodes: user.promoCodes,
    });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json(
      { error: 'პროფილის ჩატვირთვის შეცდომა' },
      { status: 500 }
    );
  }
}
