'use client';

import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';

export default function CallPopupModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('callPopupShown') || hasShown) return;

    const showModal = () => {
      setIsVisible(true);
      setHasShown(true);
      sessionStorage.setItem('callPopupShown', 'true');
    };

    const timer = setTimeout(showModal, 15000);
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !sessionStorage.getItem('callPopupShown')) {
        clearTimeout(timer);
        showModal();
      }
    };
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
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba Hasar Park, aracım için teklif almak istiyorum.')}`,
      '_blank'
    );
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[80] bg-navy-950/60 backdrop-blur-sm animate-fadeIn" onClick={() => setIsVisible(false)} />

      <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 pointer-events-none">
        <div
          className="pointer-events-auto relative w-full max-w-sm rounded-2xl border border-line bg-white p-6 text-center shadow-2xl animate-slideUp"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Kapat"
            className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-muted hover:bg-surface-alt"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-[20px] font-extrabold text-ink">Aracınız için hemen teklif alın</h2>
          <p className="mt-2 text-[14px] text-ink-soft">
            30 dakika içinde net fiyat. Ücretsiz çekici, anında ödeme.
          </p>

          <div className="mt-5 space-y-2.5">
            <button
              onClick={handlePhoneClick}
              className="flex w-full items-center justify-center gap-2 rounded-[11px] bg-gradient-to-br from-brand-green to-brand-green-dark px-5 py-3 text-[16px] font-bold text-white shadow-soft transition hover:brightness-[1.05]"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="flex w-full items-center justify-center gap-2 rounded-[11px] bg-[#25D366] px-5 py-3 text-[16px] font-bold text-white shadow-soft transition hover:bg-[#20BA5A]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </button>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="mt-4 text-[13px] text-ink-muted hover:text-ink transition-colors"
          >
            Şimdi değil
          </button>
        </div>
      </div>
    </>
  );
}
