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



// ===== PHONE TRACKING - PRIMARY CONVERSION =====

export const trackPhoneClick = (location: string = 'unknown') => {
  console.log('📞 Phone click tracked:', location);

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
  console.log('💬 WhatsApp click tracked:', location);

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
  console.log('📝 Form submit tracked:', formName);

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
  console.log('👁️ Service view tracked:', serviceName);

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
  console.log('🚀 Analytics initialized');

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