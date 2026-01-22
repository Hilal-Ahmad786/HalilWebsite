'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { PhoneIcon, WhatsAppIcon, XMarkIcon, ArrowRightIcon } from '@/components/ui/Icons';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState<'phone' | 'whatsapp' | 'chat' | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handlePhoneClick = (location: string) => {
    trackPhoneClick(location);
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = (location: string, message?: string) => {
    trackWhatsAppClick(location);
    const text = message ?? 'Merhaba Hasar Park, aracım için teklif almak istiyorum.';
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const quickMessages = [
    { id: 1, icon: '🚗', title: 'Kazalı Araç', message: 'Merhaba, kazalı aracım için teklif almak istiyorum.' },
    { id: 2, icon: '🔧', title: 'Hasarlı Araç', message: 'Merhaba, hasarlı aracım için teklif almak istiyorum.' },
    { id: 3, icon: '⚠️', title: 'Pert Araç', message: 'Merhaba, pert raporlu aracım için teklif almak istiyorum.' },
    { id: 4, icon: '♻️', title: 'Hurda Araç', message: 'Merhaba, hurda aracım için teklif almak istiyorum.' },
    { id: 5, icon: '💬', title: 'Genel Bilgi', message: 'Merhaba, araç alım hizmetiniz hakkında bilgi almak istiyorum.' },
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
            className={`flex flex-col items-end gap-3 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* WHATSAPP BUTTON */}
            <div className="relative">
              <button
                onClick={() => handleWhatsAppClick('floating-button')}
                onMouseEnter={() => setShowTooltip('whatsapp')}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-7 h-7" />

                {showTooltip === 'whatsapp' && (
                  <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-3 rounded-xl whitespace-nowrap animate-fadeIn">
                    <div className="text-sm font-medium mb-1">WhatsApp</div>
                    <div className="text-xs text-emerald-400">Hemen mesaj gönderin</div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-8 border-transparent border-l-gray-900" />
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* PHONE BUTTON - Orange gradient */}
            <div className="relative">
              <button
                onClick={() => handlePhoneClick('floating-button')}
                onMouseEnter={() => setShowTooltip('phone')}
                onMouseLeave={() => setShowTooltip(null)}
                className="relative w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                style={{ animation: isVisible ? 'float-pulse 3s ease-in-out infinite' : 'none' }}
                aria-label="Hemen Ara"
              >
                <PhoneIcon className="w-6 h-6" strokeWidth={2} />

                {showTooltip === 'phone' && (
                  <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-3 rounded-xl whitespace-nowrap animate-fadeIn">
                    <div className="text-sm font-medium mb-1">Hemen Ara</div>
                    <div className="text-orange-400 text-sm font-semibold">{siteConfig.phoneDisplay}</div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                      <div className="border-8 border-transparent border-l-gray-900" />
                    </div>
                  </div>
                )}
              </button>
            </div>

            {/* CHAT BUTTON + POPUP */}
            <div className="relative">
              {isChatOpen && (
                <div className="absolute right-full mr-3 bottom-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-fadeIn overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">
                        HP
                      </div>
                      <div>
                        <div className="font-semibold text-sm">Hasar Park</div>
                        <div className="text-xs opacity-90">Müşteri Hizmetleri</div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsChatOpen(false)}
                      className="text-white/80 hover:text-white transition p-1"
                      aria-label="Kapat"
                    >
                      <XMarkIcon className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-gray-50">
                    <p className="text-sm text-gray-600 mb-3">
                      Merhaba! Nasıl yardımcı olabiliriz?
                    </p>

                    <div className="space-y-2 max-h-56 overflow-y-auto">
                      {quickMessages.map((msg) => (
                        <button
                          key={msg.id}
                          onClick={() => handleQuickMessage(msg.message)}
                          className="w-full text-left px-4 py-3 bg-white hover:bg-indigo-50 rounded-xl border border-gray-100 hover:border-indigo-200 transition flex items-center gap-3 group"
                        >
                          <span className="text-xl">{msg.icon}</span>
                          <span className="font-medium text-gray-700 group-hover:text-indigo-600 text-sm">
                            {msg.title}
                          </span>
                          <ArrowRightIcon className="w-4 h-4 ml-auto text-gray-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handleQuickMessage('Merhaba, sizinle görüşmek istiyorum.')}
                      className="w-full mt-3 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium text-sm hover:bg-[#20bd5a] transition flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      WhatsApp'tan Yaz
                    </button>
                  </div>

                  <div className="bg-white px-4 py-3 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500">
                      Genellikle <span className="font-semibold text-indigo-600">5 dakika</span> içinde yanıt veriyoruz
                    </p>
                  </div>
                </div>
              )}

              {/* Chat button */}
              <button
                onClick={() => setIsChatOpen((prev) => !prev)}
                onMouseEnter={() => setShowTooltip('chat')}
                onMouseLeave={() => setShowTooltip(null)}
                className={`relative w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}
                aria-label="Chat"
              >
                {isChatOpen ? (
                  <XMarkIcon className="w-6 h-6" strokeWidth={2} />
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}

                {!isChatOpen && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white text-xs font-bold flex items-center justify-center rounded-full">
                    !
                  </span>
                )}

                {!isChatOpen && showTooltip === 'chat' && (
                  <div className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-3 rounded-xl whitespace-nowrap animate-fadeIn">
                    <div className="text-sm font-medium mb-1">Hızlı Mesaj</div>
                    <div className="text-xs text-emerald-400">Hazır WhatsApp mesajları</div>
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

      {/* MOBILE BOTTOM BAR - Thumb-friendly design */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
        <div className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
          <div className="flex items-stretch">
            {/* WhatsApp - Left Half */}
            <button
              onClick={() => handleWhatsAppClick('floating-button-mobile')}
              className="flex-1 flex flex-col items-center justify-center py-4 px-4 bg-[#25D366] text-white active:bg-[#20bd5a] transition-colors"
            >
              <WhatsAppIcon className="w-7 h-7 mb-1" />
              <span className="text-xs font-semibold">WhatsApp</span>
            </button>

            {/* Phone - Right Half - Orange gradient */}
            <button
              onClick={() => handlePhoneClick('floating-button-mobile')}
              className="flex-1 flex flex-col items-center justify-center py-4 px-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white active:from-orange-600 active:to-amber-600 transition-colors"
            >
              <PhoneIcon className="w-6 h-6 mb-1" strokeWidth={2} />
              <span className="text-xs font-semibold">Hemen Ara</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile bottom padding spacer */}
      <div className="md:hidden h-[72px]" />
    </>
  );
}
