'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ReviewForm from '@/components/ReviewForm';

const plays = {
  '1': {
    title: 'ჰამლეტი',
    theater: 'თეატრი ատონელი',
    director: 'გიორგი ქევანიშვილი',
    cast: ['ნიკოლოზ რამაშვილი', 'თამარ ბუხნიკაშვილი', 'გიორგი მეგრელიშვილი'],
    description: 'შექსპირის კლასიკის თანამედროვე ინტერპრეტაცია. სპექტაკლი განიხილავს ძალაუფლების, შურისძიებისა და სიგიჟის თემებს თანამედროვე კონტექსტში.',
    duration: 180,
    genre: ['დრამა', 'კლასიკა'],
  },
  '2': {
    title: 'ლოდინის სცენები',
    theater: 'თეატრი ხარაკი',
    director: 'ნინო ჩიქოვანი',
    cast: ['ანა ჯაფარიძე', 'დავით დათეშიძე'],
    description: 'ავანგარდული პერფორმანსი თანამედროვე საზოგადოებაზე, რომელიც განიხილავს მარტოობის და კომუნიკაციის თემებს.',
    duration: 90,
    genre: ['ავანგარდი', 'პერფორმანსი'],
  },
  '3': {
    title: 'ქალაქის ბიჭები',
    theater: 'ქარხანა 42',
    director: 'ლევან ცუცქირიძე',
    cast: ['გიორგი ქავთარაძე', 'ლუკა ხუციშვილი', 'ნიკა ელიზბარაშვილი'],
    description: 'ურბანული დრამა თბილისზე, რომელიც მოგვითხრობს ახალგაზრდების ცხოვრებაზე თანამედროვე ქართულ დედაქალაქში.',
    duration: 120,
    genre: ['დრამა', 'თანამედროვე'],
  },
};

export default function PlayPage({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playId, setPlayId] = useState<string>('');

  useEffect(() => {
    // Unwrap params if it's a Promise (Next.js 15+)
    const getParams = async () => {
      const resolvedParams = await Promise.resolve(params);
      setPlayId(resolvedParams.id);
    };
    getParams();
  }, [params]);

  const play = plays[playId as keyof typeof plays];

  useEffect(() => {
    if (playId) {
      fetchReviews();
    }
  }, [playId]);

  const fetchReviews = async () => {
    if (!playId) return;
    try {
      const res = await fetch(`/api/reviews?playId=${playId}`);
      const data = await res.json();
      setReviews(data.reviews || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!play) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">სპექტაკლი არ მოიძებნა</h1>
      </div>
    );
  }

  const averageRating = reviews.length > 0
    ? reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / reviews.length
    : 0;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Play Header with Dramatic Background */}
      <div className="relative rounded-2xl shadow-2xl overflow-hidden mb-8">
        <div className="md:flex">
          {/* Dramatic Image Side */}
          <div className="relative md:w-1/3 h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70 z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/theater/${playId === '1' ? 'solo-performance' : playId === '2' ? 'actress-portrait' : 'ensemble-scene'}.jpg')`,
                backgroundColor: '#1a1a1a'
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-9xl drop-shadow-2xl">🎬</span>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="md:w-2/3 p-8 bg-white">
            <h1 className="text-4xl font-bold mb-4 text-[#0d3f53]">{play.title}</h1>
            <div className="space-y-3 text-gray-700 mb-6">
              <p className="text-xl">🎭 {play.theater}</p>
              <p>🎬 რეჟისორი: {play.director}</p>
              <p>⏱️ ხანგრძლივობა: {play.duration} წუთი</p>
              <p>
                🎭 მსახიობები: {play.cast.join(', ')}
              </p>
              <p>
                🏷️ ჟანრი: {play.genre.map((g, i) => (
                  <span key={i} className="inline-block bg-[#c6e6fd] text-[#185c78] px-2 py-1 rounded mr-2 text-sm">
                    {g}
                  </span>
                ))}
              </p>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">{play.description}</p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < Math.floor(averageRating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
                <span className="text-gray-500">({reviews.length} რეცენზია)</span>
              </div>
            </div>

            {session ? (
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="bg-[#2d96c1] hover:bg-[#237a9e] text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                {showReviewForm ? 'დახურვა' : '✍️ დაწერე რეცენზია'}
              </button>
            ) : (
              <Link
                href="/auth/signin"
                className="inline-block bg-[#2d96c1] hover:bg-[#237a9e] text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                შედით რეცენზიის დასაწერად
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Review Form */}
      {showReviewForm && playId && (
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">დაწერე რეცენზია</h2>
          <ReviewForm 
            playId={playId} 
            onSuccess={() => {
              setShowReviewForm(false);
              fetchReviews();
            }} 
          />
        </div>
      )}

      {/* Reviews */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6">რეცენზიები</h2>
        
        {loading ? (
          <p className="text-center text-gray-500">იტვირთება...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-gray-500">ჯერ არ არის რეცენზიები. იყავი პირველი!</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review: any) => (
              <div key={review._id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg">{review.title}</h3>
                    <p className="text-gray-600">{review.user?.name || 'ანონიმი'}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.content}</p>
                <p className="text-sm text-gray-500 mt-3">
                  {new Date(review.createdAt).toLocaleDateString('ka-GE')}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
