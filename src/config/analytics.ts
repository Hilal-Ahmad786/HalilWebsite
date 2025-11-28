// src/config/analytics.ts
export const analyticsConfig = {
  gtm: {
    // Updated with your NEW Hasar Park GTM ID
    id: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5XKV2L3Z',
    enabled: true,
  },
  ga: {
    // Hasar Park GA4 ID
    id: process.env.NEXT_PUBLIC_GA_ID || 'G-LMBNJ7LPV8',
    enabled: true,
  },
  googleAds: {
    // Leave empty & disabled. We will configure IDs inside GTM tags.
    conversionId: '',
    conversionLabels: {
      phone: '',
      whatsapp: '',
      form: '',
    },
    enabled: false, // <--- CRITICAL: Keeps manual tracking OFF so GTM takes over.
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export type AnalyticsConfig = typeof analyticsConfig;