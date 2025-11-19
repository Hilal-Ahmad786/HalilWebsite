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
<svg
  className="w-7 h-7"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2
           19.8 19.8 0 0 1-8.6-3.1
           19.5 19.5 0 0 1-6-6
           19.8 19.8 0 0 1-3.1-8.6
           A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7
           c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9
           a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4
           c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
</svg>

      {children || (variant === 'mega' ? 'HEMEN ARA' : 'ARA')}
    </a>
  );
}