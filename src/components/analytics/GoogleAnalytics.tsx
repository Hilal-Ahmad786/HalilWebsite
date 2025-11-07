'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { trackPageView } from '@/lib/analytics';

// Separate component for tracking that uses useSearchParams
function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (GA_ID && typeof window !== 'undefined') {
      console.log('✅ GA4 Initialized:', GA_ID);
    }
  }, [GA_ID]);

  if (!GA_ID) {
    console.warn('⚠️ GA_ID not configured');
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />

      {/* Wrap tracker in Suspense */}
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}