import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import StatsStrip from '@/components/home/StatsStrip';
import TrustBenefitsSection from '@/components/home/TrustBenefitsSection';
import VehicleServicesSection from '@/components/home/VehicleServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import QuoteFormSection from '@/components/home/QuoteFormSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import FinalCTASection from '@/components/home/FinalCTASection';

export const metadata: Metadata = {
  title: 'Hasarlı, Kazalı, Pert ve Hurda Araç Alımı',
  description:
    'Hasar Park ile kazalı, hasarlı, pert ve hurda aracınız için hızlı teklif alın. Ücretsiz çekici, noterde güvenli devir ve anında ödeme avantajlarından yararlanın.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hasarlı, Kazalı, Pert ve Hurda Araç Alımı | Hasar Park',
    description:
      'Kazalı, hasarlı, pert ve hurda araçlar için 30 dakikada teklif. Ücretsiz çekici, noterde güvenli devir, anında ödeme.',
    url: '/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <TrustBenefitsSection />
      <VehicleServicesSection />
      <ProcessSection />
      <QuoteFormSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
