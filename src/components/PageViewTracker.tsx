'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { beaconClick, captureAttribution } from '@/lib/analytics';

/**
 * Records a first-party page view (visit) on every page load and client-side
 * route change, so the admin report counts ALL visitors — not just the ones who
 * call or fill the form. Bots are filtered server-side.
 *
 * Also captures ad attribution (gclid/utm) from the landing URL and pushes
 * `page_view` into the GTM dataLayer on CLIENT-SIDE route changes. The first
 * page load is intentionally skipped there: GTM's own "Container Loaded"
 * (All Pages) trigger already covers it, and pushing both would double-count.
 * In GTM, fire the GA4 config/page_view on: Container Loaded + this custom
 * `page_view` event (do NOT also add a History Change trigger).
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    beaconClick('page_view');

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      // Persist gclid/utm from the landing URL for later conversion attribution
      captureAttribution();
      return;
    }

    // SPA navigation — GTM never sees these without a manual push
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
