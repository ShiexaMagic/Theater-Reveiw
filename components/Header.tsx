'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-[#0d3f53] text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-[#8fd3fb] transition">
            🎭 თეატრის რეცენზიები
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/theaters" className="hover:text-[#8fd3fb] transition font-medium">
              თეატრები
            </Link>
            
            {session ? (
              <>
                <Link href="/profile" className="hover:text-[#8fd3fb] transition font-medium">
                  ჩემი პროფილი
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-medium transition"
                >
                  გასვლა
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="hover:text-[#8fd3fb] transition font-medium"
                >
                  შესვლა
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-[#2d96c1] hover:bg-[#237a9e] px-4 py-2 rounded-lg font-medium transition"
                >
                  რეგისტრაცია
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
