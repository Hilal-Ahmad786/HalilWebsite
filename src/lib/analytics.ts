// src/lib/analytics.ts
import { analyticsConfig } from '@/config/analytics';

// Type declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}



// ===== GOOGLE ADS CONVERSION HELPER =====
// Fires a gtag conversion straight to Google Ads when an AW- conversion ID and
// the matching label are configured. No-ops cleanly when GTM owns conversions
// (empty env) so nothing ever double-counts.

type AdsConversionType = 'phone' | 'whatsapp' | 'form';

const fireAdsConversion = (type: AdsConversionType, value: number) => {
  const { conversionId, conversionLabels } = analyticsConfig.googleAds;
  const label = conversionLabels[type];

  if (
    !conversionId ||
    !label ||
    typeof window === 'undefined' ||
    typeof window.gtag !== 'function'
  ) {
    return;
  }

  window.gtag('event', 'conversion', {
    send_to: `${conversionId}/${label}`,
    value,
    currency: 'TRY',
  });
};

// ===== FIRST-PARTY CLICK BEACON =====
// Records the click in our own Postgres (via /api/track/click) in addition to
// GTM/Ads/Pixel. Never blocks or throws — no-ops cleanly on the server.

function clickSid(): string | undefined {
  try {
    const k = 'cp_sid';
    let v = localStorage.getItem(k);
    if (!v) {
      v =
        typeof crypto !== 'undefined' && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2);
      localStorage.setItem(k, v);
    }
    return v;
  } catch {
    return undefined;
  }
}

// ===== AD ATTRIBUTION CAPTURE =====
// Persists gclid/utm params from the landing URL so every later conversion
// (phone/WhatsApp/form click) can be tied back to the campaign that brought
// the visitor — enables campaign-level lead reporting and future offline
// conversion imports into Google Ads.

interface Attribution {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

const ATTR_KEY = 'cp_attr';

export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid') || params.get('gbraid') || params.get('wbraid');
    const utm_source = params.get('utm_source');
    // Only overwrite stored attribution when a NEW campaign click lands
    // (last-click attribution); plain direct visits keep the original source.
    if (gclid || utm_source) {
      const attr: Attribution = {
        gclid: gclid ?? undefined,
        utm_source: utm_source ?? undefined,
        utm_medium: params.get('utm_medium') ?? undefined,
        utm_campaign: params.get('utm_campaign') ?? undefined,
        referrer: document.referrer || undefined,
      };
      localStorage.setItem(ATTR_KEY, JSON.stringify(attr));
    } else if (!localStorage.getItem(ATTR_KEY) && document.referrer) {
      localStorage.setItem(ATTR_KEY, JSON.stringify({ referrer: document.referrer }));
    }
  } catch {
    /* never block */
  }
}

function storedAttribution(): Attribution {
  try {
    const raw = localStorage.getItem(ATTR_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

export function beaconClick(event: string, location?: string): void {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
  try {
    const attr = storedAttribution();
    const payload = JSON.stringify({
      event,
      location: location ?? null,
      path: window.location.pathname,
      sessionId: clickSid(),
      gclid: attr.gclid ?? null,
      utmSource: attr.utm_source ?? null,
      utmMedium: attr.utm_medium ?? null,
      utmCampaign: attr.utm_campaign ?? null,
      referrer: attr.referrer ?? null,
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        '/api/track/click',
        new Blob([payload], { type: 'application/json' })
      );
    } else {
      void fetch('/api/track/click', {
        method: 'POST',
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    /* never block the click */
  }
}

// ===== PHONE TRACKING - PRIMARY CONVERSION =====

export const trackPhoneClick = (location: string = 'unknown') => {
  if (process.env.NODE_ENV === 'development') console.log('📞 Phone click tracked:', location);

  // First-party click record
  beaconClick('phone_click', location);

  // Google Tag Manager (GTM handles GA4 & Ads tags)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      event_category: 'conversion',
      event_label: location,
      conversion_type: 'phone',
      value: 150, // Lead value
    });
  }

  // Google Ads (only when AW- ID + label configured)
  fireAdsConversion('phone', 150);

  // Facebook Pixel (Kept separate)
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Click',
      content_category: location,
      value: 150,
      currency: 'TRY',
    });
  }
};

// ===== WHATSAPP TRACKING - PRIMARY CONVERSION =====

export const trackWhatsAppClick = (location: string = 'unknown') => {
  if (process.env.NODE_ENV === 'development') console.log('💬 WhatsApp click tracked:', location);

  // First-party click record
  beaconClick('whatsapp_click', location);

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      event_category: 'conversion',
      event_label: location,
      conversion_type: 'whatsapp',
      value: 120,
    });
  }

  // Google Ads (only when AW- ID + label configured)
  fireAdsConversion('whatsapp', 120);

  // Facebook Pixel
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp Click',
      content_category: location,
      value: 120,
      currency: 'TRY',
    });
  }
};

// ===== FORM SUBMISSION TRACKING =====

export const trackFormSubmit = (formName: string = 'contact_form') => {
  if (process.env.NODE_ENV === 'development') console.log('📝 Form submit tracked:', formName);

  // First-party click record (was missing — form leads were invisible in /admin/clicks)
  beaconClick('form_submit', formName);

  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submit',
      event_category: 'conversion',
      event_label: formName,
      conversion_type: 'form',
      value: 200,
    });
  }

  // Google Ads (only when AW- ID + label configured)
  fireAdsConversion('form', 200);

  // Facebook Pixel
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formName,
      value: 200,
      currency: 'TRY',
    });
  }
};

// ===== PAGE VIEW TRACKING =====

export const trackPageView = (url: string) => {
  // Google Tag Manager Pageview (Optional if using "All Pages" trigger in GTM)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
    });
  }

  // Facebook Pixel
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// ===== SERVICE PAGE VIEW =====

export const trackServiceView = (serviceName: string) => {
  if (process.env.NODE_ENV === 'development') console.log('👁️ Service view tracked:', serviceName);

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_view',
      event_category: 'engagement',
      service_name: serviceName,
    });
  }

  // Facebook Pixel
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: serviceName,
      content_category: 'Service',
    });
  }
};

// ===== CTA CLICK TRACKING =====

export const trackCTAClick = (ctaName: string, location: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_click',
      event_category: 'engagement',
      cta_name: ctaName,
      cta_location: location,
    });
  }
};

// ===== SCROLL DEPTH TRACKING =====

export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'scroll_depth',
      scroll_percentage: percentage,
    });
  }
};

// ===== TIME ON PAGE TRACKING =====

export const trackTimeOnPage = (seconds: number) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'time_on_page',
      seconds: seconds,
    });
  }
};

// ===== INITIALIZE ANALYTICS =====

export const initAnalytics = () => {
  if (process.env.NODE_ENV === 'development') console.log('🚀 Analytics initialized');

  if (typeof window !== 'undefined') {
    // Scroll Tracking
    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 90];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;

        scrollThresholds.forEach(threshold => {
          if (scrollPercentage >= threshold && !trackedDepths.has(threshold)) {
            trackedDepths.add(threshold);
            trackScrollDepth(threshold);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Time Tracking
    const intervals = [30, 60, 120, 300];
    const trackedIntervals = new Set<number>();
    let startTime = Date.now();

    const checkTimeOnPage = () => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

      intervals.forEach(interval => {
        if (elapsedSeconds >= interval && !trackedIntervals.has(interval)) {
          trackedIntervals.add(interval);
          trackTimeOnPage(interval);
        }
      });
    };

    setInterval(checkTimeOnPage, 10000);
  }
};

// ===== CONVERSION VALUE OPTIMIZATION =====

export const calculateLeadValue = (serviceType: string): number => {
  const values: Record<string, number> = {
    kazali: 150,
    hasarli: 140,
    pert: 160,
    hurda: 100,
    default: 130,
  };

  return values[serviceType] || values.default;
};

// ===== ERROR TRACKING =====

export const trackError = (errorMessage: string, errorLocation: string) => {
  console.error('❌ Error tracked:', errorMessage, errorLocation);

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'error',
      error_message: errorMessage,
      error_location: errorLocation,
    });
  }
};