'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ReviewFormProps {
  playId: string;
  onSuccess: () => void;
}

export default function ReviewForm({ playId, onSuccess }: ReviewFormProps) {
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playId,
          rating,
          title,
          content,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'რეცენზიის დამატების შეცდომა');
        setLoading(false);
        return;
      }

      // Check if user got promo code
      if (data.promoCode) {
        setPromoCode(data.promoCode);
      }

      // Reset form
      setRating(5);
      setTitle('');
      setContent('');
      
      onSuccess();
    } catch (error) {
      setError('რეცენზიის დამატების შეცდომა');
    } finally {
      setLoading(false);
    }
  };

  if (promoCode) {
    return (
      <div className="bg-gradient-to-r from-[#2d96c1] to-[#43c3f9] rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 გილოცავთ!</h2>
        <p className="text-xl mb-6">
          თქვენ მიიღეთ {promoCode.discount}% ფასდაკლების პრომო კოდი!
        </p>
        <div className="bg-white text-gray-900 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-600 mb-2">თქვენი პრომო კოდი:</p>
          <p className="text-3xl font-bold tracking-wider">{promoCode.code}</p>
          <p className="text-sm text-gray-600 mt-2">
            ვარგისიანობა: {new Date(promoCode.expiresAt).toLocaleDateString('ka-GE')}
          </p>
        </div>
        <button
          onClick={() => router.push('/profile')}
          className="bg-white text-[#2d96c1] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition"
        >
          იხილეთ ყველა პრომო კოდი
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">შეფასება</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className={`text-4xl transition ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              } hover:scale-110`}
            >
              ★
            </button>
          ))}
          <span className="ml-2 text-lg font-semibold">{rating}/5</span>
        </div>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          სათაური
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="რეცენზიის სათაური"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium mb-2">
          რეცენზია
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="დაწერეთ თქვენი აზრი სპექტაკლის შესახებ..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#2d96c1] hover:bg-[#237a9e] text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
      >
        {loading ? 'იგზავნება...' : 'გამოქვეყნება'}
      </button>
    </form>
  );
}
