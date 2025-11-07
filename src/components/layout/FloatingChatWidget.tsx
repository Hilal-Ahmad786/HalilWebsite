'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 hidden md:block">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white shadow-2xl border-2 border-gray-200 animate-fadeIn">
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
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
              aria-label="Kapat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-50">
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

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white flex items-center justify-center shadow-2xl hover:from-purple-700 hover:to-fuchsia-700 transition-all transform hover:scale-110 ${
          isOpen ? 'rotate-0' : 'animate-pulse'
        }`}
        aria-label="Chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-lime-400 text-gray-900 text-xs font-black flex items-center justify-center animate-bounce">
          !
        </div>
      )}
    </div>
  );
}