// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import GoogleAdsConversion from '@/components/analytics/GoogleAdsConversion';
import JsonLd from '@/components/analytics/JsonLd';
import { siteConfig } from '@/config/site';
import CallPopupModal from '@/components/layout/CallPopupModal';
import PageViewTracker from '@/components/PageViewTracker';
import ConsentBanner from '@/components/analytics/ConsentBanner';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1b31',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Kazalı, Hasarlı, Pert & Hurda Araç Alımı - En Yüksek Fiyat`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: 'Hasar Park' }],
  creator: 'Hasar Park',
  publisher: 'Hasar Park',
  category: 'Automotive',
  // Stops iOS Safari from auto-styling phone numbers and breaking the dark UI
  formatDetection: { telephone: true, email: true, address: false },
  alternates: {
    canonical: '/',
  },
  // Inherited by every page that doesn't set its own openGraph/twitter
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: siteConfig.name,
    url: siteConfig.url,
    title: `${siteConfig.name} - Kazalı, Hasarlı & Hurda Araç Alımı`,
    description: siteConfig.description,
    images: [{ url: '/images/kazali-arac.png', width: 1200, height: 630, alt: 'Hasar Park' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Araç Alım Uzmanı`,
    description: 'En yüksek fiyat garantisi ile kazalı, hasarlı, pert ve hurda araç alımı.',
    images: ['/images/kazali-arac.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Paste your Search Console code into NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to verify ownership
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Consent Mode v2 defaults — MUST run before the GTM snippet loads.
            Everything starts "denied"; ConsentBanner pushes an update on user choice. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted',
                wait_for_update: 500
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Analytics & SEO */}
        <JsonLd />
        <GoogleTagManager />
        {/* Loads gtag with your AW- ID only when NEXT_PUBLIC_ADS_CONVERSION_ID is set */}
        <GoogleAdsConversion />
        {/* GA4 is handled inside GTM */}
        {/* First-party page-view tracking (counts every visitor) */}
        <PageViewTracker />

        {/* Layout */}
        <TopBar />
        <Header />
        <main className="min-h-screen pb-20 md:pb-0">{children}</main>
        <Footer />
        <FloatingButtons />
        <CallPopupModal />
        <ConsentBanner />
      </body>
    </html>
  );
}
