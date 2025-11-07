'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<'phone' | 'whatsapp' | null>(null);

  useEffect(() => {
    // Show floating buttons after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick('floating-button');
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('floating-button');
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        'Merhaba Premium Auto, aracım için teklif almak istiyorum.'
      )}`,
      '_blank'
    );
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:block">
        {/* Phone Button - Main CTA */}
        <button
          onClick={handlePhoneClick}
          onMouseEnter={() => setShowTooltip('phone')}
          onMouseLeave={() => setShowTooltip(null)}
          className={`fixed bottom-8 right-8 w-20 h-20 bg-lime-400 text-gray-900 flex items-center justify-center text-3xl z-50 transition-all duration-500 shadow-2xl border-4 border-white hover:scale-110 hover:rotate-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            animation: isVisible ? 'float-pulse 2s infinite' : 'none',
          }}
          aria-label="Hemen Ara"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          
          {/* Tooltip */}
          {showTooltip === 'phone' && (
            <div className="absolute right-full mr-4 bg-gray-900 text-white px-6 py-4 whitespace-nowrap font-bold tracking-wide animate-fade-in">
              <div className="text-xl mb-1">HEMEN ARA</div>
              <div className="text-lime-400 text-2xl">{siteConfig.phoneDisplay}</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          )}
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip('whatsapp')}
          onMouseLeave={() => setShowTooltip(null)}
          className={`fixed bottom-36 right-8 w-20 h-20 bg-success-green text-white flex items-center justify-center text-3xl z-50 transition-all duration-500 shadow-2xl border-4 border-white hover:scale-110 hover:rotate-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            animationDelay: '0.2s',
          }}
          aria-label="WhatsApp"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          
          {/* Tooltip */}
          {showTooltip === 'whatsapp' && (
            <div className="absolute right-full mr-4 bg-gray-900 text-white px-6 py-4 whitespace-nowrap font-bold tracking-wide animate-fade-in">
              <div className="text-xl mb-1">WHATSAPP</div>
              <div className="text-success-green text-lg">Hemen Mesaj Gönder</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          )}
        </button>

        {/* Pulse Ring Animation */}
        <div className="fixed bottom-8 right-8 w-20 h-20 pointer-events-none z-40">
          <div className="absolute inset-0 bg-lime-400 animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Mobile Bottom Bar - Always Visible */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-4 border-lime-400 shadow-2xl">
        <div className="flex items-stretch">
          {/* WhatsApp - Left Half */}
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex flex-col items-center justify-center py-4 px-4 bg-success-green text-white hover:bg-success-green-dark transition active:scale-95"
          >
            <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-sm font-black tracking-wider">WHATSAPP</span>
          </button>

          {/* Phone - Right Half */}
          <button
            onClick={handlePhoneClick}
            className="flex-1 flex flex-col items-center justify-center py-4 px-4 bg-lime-400 text-gray-900 hover:bg-lime-300 transition active:scale-95 relative overflow-hidden"
          >
            <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className="text-sm font-black tracking-wider">HEMEN ARA</span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shine"></div>
          </button>
        </div>
      </div>

      {/* Add padding to body for mobile bar */}
      <style jsx global>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 80px;
          }
        }
        
        @keyframes float-pulse {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </>
  );
}