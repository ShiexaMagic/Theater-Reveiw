'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Demo login function
  const handleDemoLogin = () => {
    setEmail('jeff@demo.com');
    setPassword('demo123');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      setError('შესვლის შეცდომა');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">შესვლა</h1>
        
        {/* Demo Login Banner */}
        <div className="bg-gradient-to-r from-[#2d96c1] to-[#43c3f9] text-white rounded-lg p-4 mb-6">
          <p className="font-semibold mb-2">🎭 დემო რეჟიმი</p>
          <p className="text-sm mb-3">სწრაფი შესვლისთვის დააჭირეთ ქვემოთ:</p>
          <button
            onClick={handleDemoLogin}
            className="w-full bg-white text-[#2d96c1] hover:bg-gray-100 px-4 py-2 rounded font-semibold transition"
          >
            შედით როგორც Jeff Temo
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              ელ.ფოსტა
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              პაროლი
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2d96c1] hover:bg-[#237a9e] text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? 'იტვირთება...' : 'შესვლა'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          არ გაქვთ ანგარიში?{' '}
          <Link href="/auth/signup" className="text-[#2d96c1] hover:underline font-medium">
            დარეგისტრირდით
          </Link>
        </p>
      </div>
    </div>
  );
}
