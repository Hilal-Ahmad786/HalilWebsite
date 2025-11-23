'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<'phone' | 'whatsapp' | 'chat' | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = (location: string) => {
    trackPhoneClick(location);
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = (location: string, message?: string) => {
    trackWhatsAppClick(location);
    const text =
      message ?? 'Merhaba Premium Auto, aracım için teklif almak istiyorum.';
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
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
    handleWhatsAppClick('floating-chat-widget', message);
    setIsChatOpen(false);
  };

  return (
    <>
      {/* DESKTOP FLOATING STACK */}
      <div className="hidden md:block">
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
          <div
            className={`flex flex-col items-end gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {/* WHATSAPP BUTTON */}
            <div className="relative">
              <button
                onClick={() => handleWhatsAppClick('floating-button')}
                onMouseEnter={() => setShowTooltip('whatsapp')}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative w-16 h-16 bg-success-green text-white flex items-center justify-center text-3xl shadow-2xl border-4 border-white hover:scale-110 hover:rotate-6"
                aria-label="WhatsApp"
              >
                <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>

                {showTooltip === 'whatsapp' && (
                  <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-3 whitespace-nowrap font-bold tracking-wide fade-in">
                    <div className="text-sm mb-1">WHATSAPP</div>
                    <div className="text-xs text-success-green">Hemen Mesaj Gönder</div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-8 border-transparent border-l-gray-900" />
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* PHONE BUTTON */}
            <div className="relative">
              <button
                onClick={() => handlePhoneClick('floating-button')}
                onMouseEnter={() => setShowTooltip('phone')}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative w-16 h-16 bg-lime-400 text-gray-900 flex items-center justify-center text-3xl shadow-2xl border-4 border-white hover:scale-110 hover:rotate-6"
                style={{
                  animation: isVisible ? 'float-pulse 2s infinite' : 'none',
                }}
                aria-label="Hemen Ara"
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
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
                </svg>


                {showTooltip === 'phone' && (
                  <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-3 whitespace-nowrap font-bold tracking-wide fade-in">
                    <div className="text-sm mb-1">HEMEN ARA</div>
                    <div className="text-lime-400 text-base">{siteConfig.phoneDisplay}</div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-8 border-transparent border-l-gray-900" />
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* CHAT BUTTON + POPUP */}
            <div className="relative">
              {/* Chat popup – opens next to chat button */}
              {isChatOpen && (
                <div className="absolute right-full mr-3 bottom-0 w-64 bg-white shadow-2xl border border-gray-200 fade-in">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-3 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-white/20 flex items-center justify-center font-black text-xs">
                        PA
                      </div>
                      <div>
                        <div className="font-bold text-xs leading-tight">Premium Auto</div>
                        <div className="text-[10px] opacity-90">Müşteri Hizmetleri</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsChatOpen(false)}
                      className="text-white hover:text-gray-200 transition"
                      aria-label="Kapat"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="px-3 py-3 bg-gray-50">
                    <p className="text-xs text-gray-700 mb-2 font-medium">
                      Merhaba! 👋 Nasıl yardımcı olabiliriz?
                    </p>

                    <div className="space-y-2 max-h-52 overflow-y-auto">
                      {quickMessages.map((msg) => (
                        <button
                          key={msg.id}
                          onClick={() => handleQuickMessage(msg.message)}
                          className="w-full text-left px-3 py-2 bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-300 transition flex items-center gap-2 group text-xs"
                        >
                          <span className="text-lg">{msg.icon}</span>
                          <span className="font-semibold text-gray-800 group-hover:text-purple-600">
                            {msg.title}
                          </span>
                          <svg
                            className="w-3 h-3 ml-auto text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handleQuickMessage('Merhaba, sizinle görüşmek istiyorum.')}
                      className="w-full mt-2 bg-whatsapp text-white px-3 py-2 font-bold text-xs hover:bg-opacity-90 transition flex items-center justify-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp'tan Yaz
                    </button>
                  </div>

                  <div className="bg-gray-100 px-3 py-2 text-center">
                    <p className="text-[10px] text-gray-600">
                      Genellikle <span className="font-bold text-purple-600">5 dakika</span> içinde yanıt
                      veriyoruz
                    </p>
                  </div>
                </div>
              )}

              {/* Chat button */}
              <button
                onClick={() => setIsChatOpen((prev) => !prev)}
                onMouseEnter={() => setShowTooltip('chat')}
                onMouseLeave={() => setShowTooltip(null)}
                className={`relative w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 hover:rotate-6 ${isChatOpen ? '' : 'animate-pulse'
                  }`}
                aria-label="Chat"
              >
                {isChatOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                )}

                {/* little notification badge when closed */}
                {!isChatOpen && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-lime-400 text-gray-900 text-xs font-black flex items-center justify-center rounded-full">
                    !
                  </span>
                )}

                {/* Chat tooltip (like others) */}
                {!isChatOpen && showTooltip === 'chat' && (
                  <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-3 whitespace-nowrap font-bold tracking-wide fade-in">
                    <div className="text-sm mb-1">HIZLI MESAJ</div>
                    <div className="text-xs text-lime-400">Hazır WhatsApp mesajları</div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-8 border-transparent border-l-gray-900" />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM BAR (same as before) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-4 border-lime-400 shadow-2xl">
        <div className="flex items-stretch">
          {/* WhatsApp - Left Half */}
          <button
            onClick={() => handleWhatsAppClick('floating-button-mobile')}
            className="flex-1 flex flex-col items-center justify-center py-4 px-4 bg-success-green text-white hover:bg-success-green-dark transition active:scale-95"
          >
            <svg className="w-8 h-8 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="text-sm font-black tracking-wider">WHATSAPP</span>
          </button>

          {/* Phone - Right Half */}
          <button
            onClick={() => handlePhoneClick('floating-button-mobile')}
            className="flex-1 flex flex-col items-center justify-center py-4 px-4 bg-lime-400 text-gray-900 hover:bg-lime-300 transition active:scale-95 relative overflow-hidden"
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

            <span className="text-sm font-black tracking-wider">HEMEN ARA</span>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shine" />
          </button>
        </div>
      </div>

      {/* Extra mobile padding so bar doesn't cover content */}

    </>
  );
}
