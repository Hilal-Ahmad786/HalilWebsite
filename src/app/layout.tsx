import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import ConversionTracking from '@/components/analytics/ConversionTracking';
import JsonLd from '@/components/analytics/JsonLd';
import { siteConfig } from '@/config/site';
import CallPopupModal from '@/components/layout/CallPopupModal';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});
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
      <body className={inter.className}>
        {/* Analytics & SEO */}
        <JsonLd />
        <GoogleTagManager />
        <GoogleAnalytics />
        <ConversionTracking />

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