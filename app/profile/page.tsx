'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchUserData();
    }
  }, [session]);

  const fetchUserData = async () => {
    try {
      const res = await fetch('/api/user/profile');
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-xl">იტვირთება...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">ჩემი პროფილი</h1>

      {/* User Info */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#43c3f9] to-[#2d96c1] rounded-full flex items-center justify-center text-white text-4xl font-bold">
            {session.user.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{session.user.name}</h2>
            <p className="text-gray-600">{session.user.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#e4f3fe] rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-[#237a9e]">
              {userData?.reviewCount || 0}
            </p>
            <p className="text-gray-600">რეცენზია</p>
          </div>
          <div className="bg-[#c6e6fd] rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-[#185c78]">
              {userData?.promoCodes?.length || 0}
            </p>
            <p className="text-gray-600">პრომო კოდი</p>
          </div>
          <div className="bg-[#8fd3fb] rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-[#0d3f53]">
              {5 - (userData?.reviewCount || 0) % 5}
            </p>
            <p className="text-gray-600">რეცენზია შემდეგ კოდამდე</p>
          </div>
        </div>
      </div>

      {/* Promo Codes */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">ჩემი პრომო კოდები</h2>
        
        {userData?.promoCodes && userData.promoCodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userData.promoCodes.map((promo: any) => (
              <div
                key={promo._id}
                className={`border-2 rounded-lg p-6 ${
                  promo.isUsed
                    ? 'border-gray-300 bg-gray-50'
                    : 'border-[#2d96c1] bg-gradient-to-br from-[#e4f3fe] to-[#c6e6fd]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    promo.isUsed
                      ? 'bg-gray-200 text-gray-600'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {promo.isUsed ? 'გამოყენებული' : 'აქტიური'}
                  </span>
                  <span className="text-2xl font-bold text-[#2d96c1]">
                    {promo.discount}%
                  </span>
                </div>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="text-xs text-gray-600 mb-1">პრომო კოდი:</p>
                  <p className="text-2xl font-bold tracking-wider text-center">
                    {promo.code}
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  ვარგისიანობა: {new Date(promo.expiresAt).toLocaleDateString('ka-GE')}
                </p>
                {new Date(promo.expiresAt) < new Date() && !promo.isUsed && (
                  <p className="text-sm text-red-600 mt-2">ვადაგასული</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">
              თქვენ ჯერ არ გაქვთ პრომო კოდები
            </p>
            <p className="text-gray-500">
              დაწერეთ 5 რეცენზია და მიიღეთ თქვენი პირველი 10% ფასდაკლების კოდი!
            </p>
          </div>
        )}
      </div>

      {/* Progress */}
      {userData?.reviewCount && userData.reviewCount % 5 !== 0 && (
        <div className="bg-gradient-to-r from-[#2d96c1] to-[#43c3f9] rounded-lg p-8 mt-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            კიდევ {5 - (userData.reviewCount % 5)} რეცენზია ახალ პრომო კოდამდე! 🎯
          </h3>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-4 mb-4">
            <div
              className="bg-white h-4 rounded-full transition-all duration-500"
              style={{ width: `${((userData.reviewCount % 5) / 5) * 100}%` }}
            />
          </div>
          <p className="text-lg">
            {userData.reviewCount % 5} / 5 რეცენზია
          </p>
        </div>
      )}
    </div>
  );
}
