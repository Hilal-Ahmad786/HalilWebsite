import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyUs from '@/components/sections/WhyUs';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Hasar Park - Kazalı, Hasarlı, Pert & Hurda Araç Alımı | En Yüksek Fiyat',
  description:
    'Türkiye\'nin en güvenilir araç alım merkezi. Kazalı, hasarlı, pert ve hurda araçlar için anında değerlendirme ve en yüksek fiyat garantisi. 20+ yıl tecrübe, 100.000+ mutlu müşteri.',
  keywords: [
    'kazalı araç alan',
    'hasarlı araç alan',
    'pert araç alan',
    'hurda araç alan',
    'araç alım',
    'en yüksek fiyat',
    'anında ödeme',
    'hasar park',
  ],
  openGraph: {
    title: 'Hasar Park - En Yüksek Fiyat Garantisi',
    description:
      'Kazalı, hasarlı, pert ve hurda araçlar için anında değerlendirme. 30 dakika içinde teklif alın!',
    url: 'https://www.hasarpark.com/',
    siteName: 'Hasar Park',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Hasar Park',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasar Park - Araç Alım Uzmanı',
    description: 'En yüksek fiyat garantisi ile araç alımı',
    images: ['/images/hero-bg.webp'],
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
};

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section - PRIMARY CONVERSION ZONE */}
      <HeroSection />

      {/* Stats Section - Build Trust */}
      <StatsSection />

      {/* Urgent CTA Banner - 1st Conversion Point */}
      <CTASection
        title="ANINDA TEKLİF ALIN"
        subtitle="30 dakika içinde en yüksek fiyat teklifini alın"
        variant="urgent"
      />

      {/* Services Grid - What We Buy */}
      <ServicesGrid />

      {/* Process Steps - How It Works */}
      <ProcessSteps />

      {/* Why Choose Us */}
      <WhyUs />

      {/* CTA Section - 2nd Conversion Point */}
      <CTASection
        title="HEMEN SATIN - ANINDA ÖDEME"
        subtitle="Aracınızı en iyi fiyata satmak için şimdi arayın"
        variant="dark"
      />

      {/* Testimonials - Social Proof */}
      <TestimonialsSection />

      {/* FAQ - Answer Objections */}
      <FAQSection />

      {/* Final CTA - 3rd Conversion Point */}
      <CTASection
        title="BUGÜN ARAYIN - YARIN ÖDEME ALIN"
        subtitle="100.000+ mutlu müşterimize katılın"
        variant="lime"
      />

      {/* Structured Data for SEO & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutomotiveBusiness',
            name: 'Hasar Park',
            description:
              'Kazalı, hasarlı, pert ve hurda araç alımında Türkiye\'nin en güvenilir merkezi',
            url: 'https://premiumauto.com.tr',
            telephone: '+905303444097',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'TR',
            },
            openingHours: 'Mo-Su 00:00-23:59',
            priceRange: '₺₺',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '1250',
            },
          }),
        }}
      />
    </div>
  );
}