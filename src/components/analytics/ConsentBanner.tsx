'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'hp_consent';

// Google Consent Mode v2 expects gtag-style "arguments" objects on the dataLayer,
// not plain object pushes — hence the function(){} + arguments pattern.
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function applyConsent(granted: boolean) {
  gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  });
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'granted') {
      // Defaults are "denied" on every page load — re-apply the stored choice
      applyConsent(true);
    } else if (stored !== 'denied') {
      setVisible(true);
    }
  }, []);

  const decide = (granted: boolean) => {
    localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied');
    applyConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-line bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:inset-x-auto md:bottom-4 md:left-4 md:max-w-md md:rounded-2xl md:border"
    >
      <p className="text-[13.5px] leading-relaxed text-ink-soft">
        Sitemizde deneyiminizi iyileştirmek, trafiği analiz etmek ve reklam ölçümü için çerezler
        kullanıyoruz. Detaylar için{' '}
        <Link href="/cerez-politikasi" className="font-semibold text-brand-green-dark underline">
          Çerez Politikamızı
        </Link>{' '}
        inceleyebilirsiniz.
      </p>
      <div className="mt-3 flex gap-2.5">
        <button
          type="button"
          onClick={() => decide(true)}
          className="flex-1 rounded-xl bg-brand-green px-4 py-2.5 text-[14px] font-bold text-ink transition-colors hover:bg-brand-green-dark hover:text-white"
        >
          Kabul Et
        </button>
        <button
          type="button"
          onClick={() => decide(false)}
          className="flex-1 rounded-xl border border-line bg-surface-alt px-4 py-2.5 text-[14px] font-semibold text-ink-soft transition-colors hover:bg-surface"
        >
          Reddet
        </button>
      </div>
    </div>
  );
}
