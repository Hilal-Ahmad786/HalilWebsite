'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
const FloatingButtonsSpacing = {
  // Desktop buttons
  phoneButton: "fixed bottom-6 right-6 w-16 h-16 bg-lime-400 text-gray-900 flex items-center justify-center z-50 shadow-2xl border-4 border-white hover:scale-110",
  whatsappButton: "fixed bottom-[100px] right-6 w-16 h-16 bg-whatsapp text-white flex items-center justify-center z-50 shadow-2xl border-4 border-white hover:scale-110",
  chatButton: "fixed bottom-[180px] right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex items-center justify-center z-50 shadow-2xl border-4 border-white hover:scale-110",
  
  // Mobile bottom bar
  mobileBar: "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-4 border-lime-400 shadow-2xl",
  mobileBarContent: "flex items-stretch h-20",
  mobileButton: "flex-1 flex flex-col items-center justify-center py-sm px-sm",
};
export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<'phone' | 'whatsapp' | 'chat' | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
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

  const quickMessages = [
    {
      id: 1,
      icon: '🚗',
      title: 'Kazalı Araç',
      message: 'Merhaba, kazalı aracım için teklif almak istiyorum.',
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Hasarlı Araç',
      message: 'Merhaba, hasarlı aracım için teklif almak istiyorum.',
    },
    {
      id: 3,
      icon: '⚠️',
      title: 'Pert Araç',
      message: 'Merhaba, pert raporlu aracım için teklif almak istiyorum.',
    },
    {
      id: 4,
      icon: '♻️',
      title: 'Hurda Araç',
      message: 'Merhaba, hurda aracım için teklif almak istiyorum.',
    },
    {
      id: 5,
      icon: '💬',
      title: 'Genel Bilgi',
      message: 'Merhaba, araç alım hizmetiniz hakkında bilgi almak istiyorum.',
    },
  ];

  const handleQuickMessage = (message: string) => {
    trackWhatsAppClick('floating-chat-widget');
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:block">
        {/* Chat Widget Popup */}
        {isChatOpen && (
          <div className="fixed bottom-[180px] right-6 w-80 bg-white shadow-2xl border-2 border-gray-200 z-50 animate-fadeIn">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 flex items-center justify-center font-black text-lg">
                  PA
                </div>
                <div>
                  <div className="font-bold text-sm">Premium Auto</div>
                  <div className="text-xs opacity-90">Müşteri Hizmetleri</div>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:text-gray-200 transition"
                aria-label="Kapat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4 bg-gray-50 max-h-96 overflow-y-auto">
              <p className="text-sm text-gray-700 mb-3 font-medium">
                Merhaba! 👋 Nasıl yardımcı olabiliriz?
              </p>

              {/* Quick Messages */}
              <div className="space-y-2">
                {quickMessages.map((msg) => (
                  <button
                    key={msg.id}
                    onClick={() => handleQuickMessage(msg.message)}
                    className="w-full text-left p-3 bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-300 transition flex items-center gap-3 group"
                  >
                    <span className="text-2xl">{msg.icon}</span>
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-purple-600">
                      {msg.title}
                    </span>
                    <svg className="w-4 h-4 ml-auto text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                ))}
              </div>

              {/* Direct WhatsApp Button */}
              <button
                onClick={() => handleQuickMessage('Merhaba, sizinle görüşmek istiyorum.')}
                className="w-full mt-3 bg-whatsapp text-white p-3 font-bold text-sm hover:bg-opacity-90 transition flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp'tan Yaz
              </button>
            </div>

            {/* Footer */}
            <div className="bg-gray-100 px-4 py-2 text-center">
              <p className="text-xs text-gray-600">
                Genellikle <span className="font-bold text-purple-600">5 dakika</span> içinde yanıt veriyoruz
              </p>
            </div>
          </div>
        )}

        {/* Phone Button - Bottom (FIRST - Main CTA) */}
        <button
          onClick={handlePhoneClick}
          onMouseEnter={() => setShowTooltip('phone')}
          onMouseLeave={() => setShowTooltip(null)}
          className={`fixed bottom-6 right-6 w-16 h-16 bg-lime-400 text-gray-900 flex items-center justify-center z-50 transition-all duration-500 shadow-2xl border-4 border-white hover:scale-110 hover:rotate-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            animation: isVisible ? 'float-pulse 2s infinite' : 'none',
          }}
          aria-label="Hemen Ara"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          
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

        {/* WhatsApp Button - Middle (SECOND) */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip('whatsapp')}
          onMouseLeave={() => setShowTooltip(null)}
          className={`fixed bottom-[100px] right-6 w-16 h-16 bg-whatsapp text-white flex items-center justify-center z-50 transition-all duration-500 shadow-2xl border-4 border-white hover:scale-110 hover:rotate-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            animation: isVisible ? 'float-pulse 2s infinite' : 'none',
            animationDelay: '0.3s',
          }}
          aria-label="WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          
          {showTooltip === 'whatsapp' && (
            <div className="absolute right-full mr-4 bg-gray-900 text-white px-6 py-4 whitespace-nowrap font-bold tracking-wide animate-fade-in">
              <div className="text-xl mb-1">WHATSAPP</div>
              <div className="text-whatsapp text-lg">Hemen Mesaj Gönder</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          )}
        </button>

        {/* Chat Widget Button - Top (THIRD) */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          onMouseEnter={() => setShowTooltip('chat')}
          onMouseLeave={() => setShowTooltip(null)}
          className={`fixed bottom-[180px] right-6 w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex items-center justify-center z-50 transition-all duration-500 shadow-2xl border-4 border-white hover:scale-110 hover:rotate-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          } ${isChatOpen ? 'rotate-0' : ''}`}
          aria-label="Sohbet"
        >
          {isChatOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-lime-400 text-gray-900 text-xs font-black flex items-center justify-center animate-bounce">
                !
              </div>
            </>
          )}
          
          {showTooltip === 'chat' && !isChatOpen && (
            <div className="absolute right-full mr-4 bg-gray-900 text-white px-6 py-4 whitespace-nowrap font-bold tracking-wide animate-fade-in">
              <div className="text-xl mb-1">SOHBET</div>
              <div className="text-purple-400 text-lg">Hızlı Mesaj</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                <div className="border-8 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          )}
        </button>

        {/* Pulse Ring Animation - Phone & WhatsApp */}
        <div className="fixed bottom-6 right-6 w-16 h-16 pointer-events-none z-40">
          <div className="absolute inset-0 bg-lime-400 animate-ping opacity-20"></div>
        </div>
        <div className="fixed bottom-[100px] right-6 w-16 h-16 pointer-events-none z-40">
          <div className="absolute inset-0 bg-whatsapp animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-4 border-lime-400 shadow-2xl">
        <div className="flex items-stretch h-20">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex flex-col items-center justify-center py-3 px-4 bg-whatsapp text-white hover:bg-opacity-90 transition active:scale-95"
          >
            <svg className="w-7 h-7 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-xs font-black tracking-wider">WHATSAPP</span>
          </button>

          <button
            onClick={handlePhoneClick}
            className="flex-1 flex flex-col items-center justify-center py-3 px-4 bg-lime-400 text-gray-900 hover:bg-lime-300 transition active:scale-95 relative overflow-hidden"
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

            <span className="text-xs font-black tracking-wider">HEMEN ARA</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shine"></div>
          </button>
        </div>
      </div>

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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </>
  );
}