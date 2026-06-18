'use client';

import Script from 'next/script';

/**
 * Google Ads global site tag (gtag.js).
 *
 * Loads ONLY when NEXT_PUBLIC_ADS_CONVERSION_ID (e.g. "AW-123456789") is set.
 * This is the belt-and-suspenders path alongside GTM: with the AW- ID present,
 * conversion events fired from src/lib/analytics.ts (phone / WhatsApp / form)
 * are sent straight to Google Ads via gtag('event','conversion', { send_to }).
 *
 * If you track conversions entirely inside GTM, simply leave the env var empty
 * and this component renders nothing.
 */
export default function GoogleAdsConversion() {
  const ADS_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;

  if (!ADS_ID) return null;

  return (
    <>
      <Script
        id="google-ads-gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
        `}
      </Script>
    </>
  );
}
