// ===== FILE: src/components/ui/CallButton.tsx =====

'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';

interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'mega';
  location?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CallButton({ 
  variant = 'primary', 
  location = 'unknown',
  className = '',
  children 
}: CallButtonProps) {
  const handleClick = () => {
    trackPhoneClick(location);
    trackCTAClick('Call Button', location);
  };

  const baseClasses = 'font-black tracking-wider transition-all flex items-center justify-center gap-3';
  
  const variants = {
    primary: 'bg-lime-400 text-gray-900 px-8 py-4 text-lg hover:bg-lime-300 shadow-lg',
    secondary: 'border-4 border-lime-400 text-lime-400 px-8 py-4 text-lg hover:bg-lime-400 hover:text-gray-900',
    mega: 'bg-lime-400 text-gray-900 px-12 py-6 text-2xl hover:bg-lime-300 shadow-2xl transform hover:scale-105',
  };

  return (
    <a
      href={`tel:${siteConfig.phone}`}
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <svg className={variant === 'mega' ? 'w-8 h-8' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
      {children || (variant === 'mega' ? 'HEMEN ARA' : 'ARA')}
    </a>
  );
}