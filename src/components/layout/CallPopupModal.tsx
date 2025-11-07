'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function CallPopupModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal was already shown in this session
    const modalShown = sessionStorage.getItem('callPopupShown');
    
    if (!modalShown && !hasShown) {
      // Show modal after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('callPopupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  const handlePhoneClick = () => {
    trackPhoneClick('auto-popup-modal');
    setIsVisible(false);
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('auto-popup-modal');
    setIsVisible(false);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        'Merhaba Premium Auto, aracım için teklif almak istiyorum.'
      )}`,
      '_blank'
    );
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white max-w-md w-full shadow-2xl pointer-events-auto animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Customer Service Agent */}
          <div className="relative bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white p-6 text-center">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              aria-label="Kapat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Agent Avatar */}
            <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl border-4 border-white/40">
              👨‍💼
            </div>

            <h2 className="text-2xl font-black mb-2">
              HOŞGELDİNİZ!
            </h2>
            <p className="text-sm opacity-90">
              Müşteri Temsilcimiz Yanıtlamaya Hazır
            </p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Message */}
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
              <p className="text-gray-800 font-semibold mb-2">
                🎉 Özel Fırsat!
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Şimdi arayın, <span className="font-bold text-purple-600">30 dakika içinde</span> size özel en yüksek fiyat teklifini alın!
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              {[
                { icon: '⚡', text: 'Anında Değerlendirme' },
                { icon: '💰', text: 'En Yüksek Fiyat Garantisi' },
                { icon: '🚚', text: 'Ücretsiz Çekici Hizmeti' },
                { icon: '📄', text: 'Tüm Evrak İşlemleri Bizden' },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-xl">{benefit.icon}</span>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              {/* Phone Button - PRIMARY */}
              <button
                onClick={handlePhoneClick}
                className="w-full bg-lime-400 text-gray-900 px-6 py-4 font-black text-lg hover:bg-lime-300 transition flex items-center justify-center gap-3 shadow-lg transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Hemen Ara</div>
                  <div>{siteConfig.phoneDisplay}</div>
                </div>
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-whatsapp text-white px-6 py-4 font-bold text-lg hover:bg-opacity-90 transition flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp ile Mesaj Gönder
              </button>

              {/* Close Link */}
              <button
                onClick={handleClose}
                className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition py-2"
              >
                Şimdi değil, daha sonra ararım
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-3 text-center border-t border-gray-200">
            <p className="text-xs text-gray-600">
              🔒 Güvenli ve Gizli • <span className="font-bold">20+ Yıl Tecrübe</span> • 100K+ Mutlu Müşteri
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}