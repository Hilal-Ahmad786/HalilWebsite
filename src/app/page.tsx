import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyUs from '@/components/sections/WhyUs';
import CTASection from '@/components/sections/CTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import QuickContactForm from '@/components/ui/QuickContactForm';
import TrustProofSection from '@/components/sections/TrustProofSection';

export const metadata: Metadata = {
  title: 'Kazalı & Hasarlı Araç Alımı | En Yüksek Fiyat - Hasar Park',
  description:
    'Türkiye\'nin 1 numaralı hasarlı araç alım merkezi. Kazalı, pert ve hurda araçlarınız için 30 dakikada nakit ödeme ve ücretsiz çekici hizmetiyle en iyi fiyatı alın.',
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
    url: 'https://hasarpark.com/',
    siteName: 'Hasar Park',
    images: [
      {
        url: '/images/kazali-arac.png',
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
};

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section - PRIMARY CONVERSION ZONE */}
      <HeroSection />

      {/* Stats Section - Build Trust */}
      <div id="anasayfa-icerigi" className="scroll-mt-24">
        <StatsSection />
      </div>

      <TrustProofSection />

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

      {/* Lead Capture Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <QuickContactForm title="Aracınız İçin Hızlı Teklif Alın" />
        </div>
      </section>

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
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Kazalı araç alımında nasıl bir süreç işliyor?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Önce bizi arayarak aracınız hakkında bilgi veriyorsunuz. Sonra fotoğrafları WhatsApp üzerinden gönderiyorsunuz. 30 dakika içinde size en yüksek fiyat teklifini sunuyoruz. Teklifi kabul ederseniz, ücretsiz çekici ile aracınızı alıyor ve noter işlemlerini tamamladıktan sonra anında ödeme yapıyoruz.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ücretsiz çekici hizmeti hangi illeri kapsıyor?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Türkiye\'nin tüm illerine ücretsiz çekici hizmeti veriyoruz. İstanbul, Ankara, İzmir başta olmak üzere her şehirden araçları alabiliyoruz.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ödeme nasıl yapılıyor?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Noter işlemleri tamamlandıktan sonra anında nakit veya EFT ile ödeme yapıyoruz. Ödeme için hiçbir ek masraf veya gecikme yoktur.',
                },
              },
              {
                '@type': 'Question',
                name: 'Hangi tür araçları alıyorsunuz?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Kazalı, hasarlı, pert ve hurda olmak üzere tüm araç türlerini alıyoruz. Marka, model ve yıl fark etmeksizin değerlendirme yapıyoruz.',
                },
              },
              {
                '@type': 'Question',
                name: 'Ekspertiz ücreti var mı?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Hayır, ekspertiz hizmetimiz tamamen ücretsizdir. Aracınızı yerinde değerlendirip size en iyi teklifi sunuyoruz.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
