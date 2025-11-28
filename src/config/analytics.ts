// src/config/analytics.ts
export const analyticsConfig = {
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5ZQBQTK7',
    enabled: true,
  },
  ga: {
    id: process.env.NEXT_PUBLIC_GA_ID || 'G-LMBNJ7LPV8',
    enabled: true,
  },
  googleAds: {
    conversionId: '',
    conversionLabels: {
      phone: '',
      whatsapp: '',
      form: '',
    },
    enabled: false,
  },
  facebook: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export type AnalyticsConfig = typeof analyticsConfig;