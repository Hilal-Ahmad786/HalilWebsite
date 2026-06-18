'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackWhatsAppClick } from '@/lib/analytics';
import { ArrowRightIcon, BotIcon, ModernIcon, WhatsAppIcon, XMarkIcon } from '@/components/ui/Icons';

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      id: 1,
      icon: 'kazalı araç',
      title: 'Kazalı Araç',
      message: 'Merhaba, kazalı aracım için teklif almak istiyorum.',
    },
    {
      id: 2,
      icon: 'hasarlı araç',
      title: 'Hasarlı Araç',
      message: 'Merhaba, hasarlı aracım için teklif almak istiyorum.',
    },
    {
      id: 3,
      icon: 'pert araç',
      title: 'Pert Araç',
      message: 'Merhaba, pert raporlu aracım için teklif almak istiyorum.',
    },
    {
      id: 4,
      icon: 'hurda araç',
      title: 'Hurda Araç',
      message: 'Merhaba, hurda aracım için teklif almak istiyorum.',
    },
    {
      id: 5,
      icon: 'bilgi',
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
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-fadeIn overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1A1F3A] to-[#252B4A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-black text-lg">
                HP
              </div>
              <div>
                <div className="font-bold text-sm">Hasar Park</div>
                <div className="text-xs opacity-90">Müşteri Hizmetleri</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
              aria-label="Kapat"
            >
              <XMarkIcon className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 bg-gray-50">
            <p className="text-sm text-gray-700 mb-3 font-medium">
              Merhaba! Nasıl yardımcı olabiliriz?
            </p>

            {/* Quick Messages */}
            <div className="space-y-2">
              {quickMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleQuickMessage(msg.message)}
                  className="w-full text-left p-3 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-xl transition flex items-center gap-3 group"
                >
                  <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <ModernIcon name={msg.icon} label={msg.title} className="w-7 h-7" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-gray-800 group-hover:text-emerald-600">
                    {msg.title}
                  </span>
                  <ArrowRightIcon className="w-4 h-4 ml-auto text-gray-400 group-hover:text-emerald-600 transform group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </button>
              ))}
            </div>

            {/* Direct WhatsApp Button */}
            <button
              onClick={() => handleQuickMessage('Merhaba, sizinle görüşmek istiyorum.')}
              className="w-full mt-3 bg-[#25D366] text-white p-3 rounded-xl font-bold text-sm hover:bg-[#20bd5a] transition flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp'tan Yaz
            </button>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 px-4 py-3 text-center">
            <p className="text-xs text-gray-600">
              Genellikle <span className="font-bold text-emerald-600">5 dakika</span> içinde yanıt veriyoruz
            </p>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A1F3A] to-[#252B4A] text-white flex items-center justify-center shadow-2xl hover:from-[#252B4A] hover:to-[#1A1F3A] transition-all transform hover:scale-110 ${
          isOpen ? 'rotate-0' : 'animate-pulse'
        }`}
        aria-label="Chat"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" strokeWidth={2} />
        ) : (
          <BotIcon className="w-7 h-7" strokeWidth={2} />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 text-white text-xs font-black rounded-full flex items-center justify-center animate-bounce">
          !
        </div>
      )}
    </div>
  );
}
