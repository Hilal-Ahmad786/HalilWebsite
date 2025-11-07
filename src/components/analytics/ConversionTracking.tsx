'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { initAnalytics } from '@/lib/analytics';

export default function ConversionTracking() {
  const ADS_ID = process.env.NEXT_PUBLIC_ADS_CONVERSION_ID;
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  useEffect(() => {
    // Initialize analytics tracking (scroll depth, time on page, etc.)
    initAnalytics();

    if (ADS_ID) {
      console.log('✅ Google Ads Conversion Tracking Initialized:', ADS_ID);
    }

    if (FB_PIXEL_ID) {
      console.log('✅ Facebook Pixel Initialized:', FB_PIXEL_ID);
    }
  }, [ADS_ID, FB_PIXEL_ID]);

  return (
    <>
      {/* Google Ads Conversion Tracking */}
      {ADS_ID && (
        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', '${ADS_ID}');
            `,
          }}
        />
      )}

      {/* Facebook Pixel */}
      {FB_PIXEL_ID && (
        <>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FB_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}