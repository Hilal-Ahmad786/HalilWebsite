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
  
  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      event_category: 'conversion',
      event_label: location,
      conversion_type: 'phone',
      value: 150, // Lead value
    });
  }
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'conversion',
      event_label: location,
      value: 150,
    });
  }
  
  // Google Ads Conversion
  if (analyticsConfig.googleAds.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${analyticsConfig.googleAds.conversionId}/${analyticsConfig.googleAds.conversionLabels.phone}`,
      value: 150,
      currency: 'TRY',
    });
  }
  
  // Facebook Pixel
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
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: location,
      value: 120,
    });
  }
  
  // Google Ads Conversion
  if (analyticsConfig.googleAds.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${analyticsConfig.googleAds.conversionId}/${analyticsConfig.googleAds.conversionLabels.whatsapp}`,
      value: 120,
      currency: 'TRY',
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
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      form_name: formName,
      value: 200,
    });
  }
  
  // Google Ads Conversion
  if (analyticsConfig.googleAds.enabled && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${analyticsConfig.googleAds.conversionId}/${analyticsConfig.googleAds.conversionLabels.form}`,
      value: 200,
      currency: 'TRY',
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
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', analyticsConfig.ga.id, {
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
  console.log('📄 Service view tracked:', serviceName);
  
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_view',
      event_category: 'engagement',
      service_name: serviceName,
    });
  }
  
  // Facebook Pixel - ViewContent
  if (analyticsConfig.facebook.enabled && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: serviceName,
      content_category: 'Service',
    });
  }
};

// ===== CTA CLICK TRACKING =====

export const trackCTAClick = (ctaName: string, location: string) => {
  console.log('🎯 CTA click tracked:', ctaName, location);
  
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
  
  // Set up scroll depth tracking
  if (typeof window !== 'undefined') {
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
  }
  
  // Set up time on page tracking
  if (typeof window !== 'undefined') {
    const intervals = [30, 60, 120, 300]; // 30s, 1m, 2m, 5m
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
    
    setInterval(checkTimeOnPage, 10000); // Check every 10 seconds
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