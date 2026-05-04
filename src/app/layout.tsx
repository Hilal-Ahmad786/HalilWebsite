// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import JsonLd from '@/components/analytics/JsonLd';
import { siteConfig } from '@/config/site';
import CallPopupModal from '@/components/layout/CallPopupModal';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'Hasar Park' }],
  creator: 'Hasar Park',
  publisher: 'Hasar Park',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Analytics & SEO */}
        <JsonLd />
        <GoogleTagManager />
        {/* REMOVED: GoogleAnalytics & ConversionTracking (GTM handles them now) */}

        {/* Layout */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
        <CallPopupModal />
      </body>
    </html>
  );
}
