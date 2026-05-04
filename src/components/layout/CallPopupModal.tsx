'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { ModernIcon, ShieldCheckIcon } from '@/components/ui/Icons';

export default function CallPopupModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const modalShown = sessionStorage.getItem('callPopupShown');
    if (modalShown || hasShown) return;

    const showModal = () => {
      setIsVisible(true);
      setHasShown(true);
      sessionStorage.setItem('callPopupShown', 'true');
    };

    // Delay trigger — 15 seconds
    const timer = setTimeout(showModal, 15000);

    // Exit intent — mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !sessionStorage.getItem('callPopupShown')) {
        clearTimeout(timer);
        showModal();
      }
    };

    // 50% scroll trigger
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled >= 0.5 && !sessionStorage.getItem('callPopupShown')) {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
        showModal();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
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
        'Merhaba Hasar Park, aracım için teklif almak istiyorum.'
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

      {/* Modal wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 pointer-events-none">
        {/* Card */}
        <div
          className="bg-white w-full max-w-lg rounded-2xl shadow-2xl pointer-events-auto animate-slideUp max-h-[90vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Slim gradient header */}
          <div className="relative text-white px-5 py-3" style={{ background: 'linear-gradient(135deg, #1A1F3A 0%, #252B4A 100%)' }}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                ÜCRETSİZ EKSPERTİZ • ANINDA TEKLİF
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="text-white/80 hover:text-white transition"
                aria-label="Kapat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="p-5 space-y-4 flex-1 overflow-y-auto">
            {/* Avatar + welcome */}
            <div className="flex items-center gap-4">

              <div>
                <h2 className="text-lg md:text-xl font-black text-gray-900 mb-1">
                  Hoş geldiniz!
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">
                  Müşteri temsilcimiz, aracınız için <b>en yüksek fiyatı</b> sunmaya hazır.
                </p>
              </div>
            </div>

            {/* Kısa mesaj bloğu */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 rounded-xl">
              <p className="text-gray-800 font-semibold text-sm mb-1">
                Şu an arayanlar için özel öncelik!
              </p>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                Hemen arayın,{' '}
                <span className="font-bold text-emerald-600">
                  30 dakika içinde net ve yüksek teklif
                </span>{' '}
                alın. Ücretsiz çekici ve tüm evraklar bizden.
              </p>
            </div>

            {/* CTA BLOĞU – EN ÖNEMLİ KISIM */}
            <div className="space-y-3">
              {/* Telefon CTA */}
              <button
                onClick={handlePhoneClick}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3.5 rounded-xl font-black text-lg hover:from-orange-600 hover:to-amber-600 transition flex items-center justify-center gap-3 shadow-xl transform hover:scale-[1.02]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
                </svg>
                <div className="text-left">
                  <div className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
                    {siteConfig.phoneDisplay} Hemen Ara
                  </div>
                </div>
              </button>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-[#20bd5a] transition flex items-center justify-center gap-3 shadow-md"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp ile Teklif Al
              </button>
            </div>

            {/* Benefits – daha küçük ve aşağıda */}
            <div className="space-y-1.5 text-xs text-gray-700 mt-2">
              {[
                { icon: 'anında teklif', text: '30 dakika içinde net fiyat teklifi' },
                { icon: 'fiyat', text: 'Piyasanın üzerinde alım fırsatı' },
                { icon: 'çekici teslim', text: 'Ücretsiz çekici, yerinizden teslim' },
                { icon: 'noter belge', text: 'Noter ve tescil işlemleri tamamen bizden' },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                    <ModernIcon name={benefit.icon} label={benefit.text} className="h-6 w-6" />
                  </span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Close link */}
            <button
              onClick={handleClose}
              className="w-full text-center text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition pt-1"
            >
              Şimdi değil, daha sonra ararım
            </button>
          </div>

          {/* Trust footer */}
          <div className="bg-gray-50 px-5 py-3 text-center border-t border-gray-200">
            <p className="inline-flex items-center justify-center gap-2 text-[11px] sm:text-xs text-gray-600">
              <ShieldCheckIcon className="h-4 w-4 text-emerald-600" />
              <span>Güvenli ve Gizli • <span className="font-bold">20+ Yıl Tecrübe</span> • 100K+ Mutlu Müşteri</span>
            </p>
          </div>
        </div>
      </div>


    </>
  );
}
