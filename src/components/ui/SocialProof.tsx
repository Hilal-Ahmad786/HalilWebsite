'use client';

import { useEffect, useState } from 'react';

interface SocialProofProps {
  variant?: 'light' | 'dark';
  showRecent?: boolean;
}

export default function SocialProof({ variant = 'light', showRecent = true }: SocialProofProps) {
  const [recentCount, setRecentCount] = useState(0);

  useEffect(() => {
    // Simulate recent activity counter
    const random = Math.floor(Math.random() * 5) + 12;
    setRecentCount(random);
  }, []);

  const isDark = variant === 'dark';

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 ${isDark ? 'text-white' : 'text-gray-600'}`}>
      {/* Customer Count */}
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full border-2 ${isDark ? 'border-gray-800 bg-gray-700' : 'border-white bg-gray-200'} flex items-center justify-center text-xs font-medium`}
            >
              <svg className="w-4 h-4 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>
        <span className="text-sm">
          <span className="font-bold text-emerald-500">100.000+</span> mutlu müşteri
        </span>
      </div>

      {/* Divider */}
      <div className={`hidden sm:block w-px h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm">
          <span className="font-bold">4.9</span>/5 puan
        </span>
      </div>

      {/* Recent Activity */}
      {showRecent && (
        <>
          <div className={`hidden sm:block w-px h-6 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`} />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm">
              Son 24 saatte <span className="font-bold text-emerald-500">{recentCount}</span> araç alındı
            </span>
          </div>
        </>
      )}
    </div>
  );
}
