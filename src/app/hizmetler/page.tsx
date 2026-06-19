import { Metadata } from 'next';
import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import VehicleServicesSection from '@/components/home/VehicleServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ProcessSection from '@/components/home/ProcessSection';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Kazalı, Hasarlı, Pert, Hurda Araç Alımı',
  description:
    'Hasar Park olarak kazalı araç alımı, hasarlı araç alımı, pert araç alımı ve hurda araç alımı hizmetleri sunuyoruz. En yüksek fiyat garantisi.',
  keywords: ['araç alım hizmetleri', 'kazalı araç', 'hasarlı araç', 'pert araç', 'hurda araç', 'araç satış'],
  alternates: { canonical: '/hizmetler' },
};

const vehicleTypes = [
  'Otomobiller', 'SUV / Jeep', 'Ticari Araçlar', 'Minibüsler',
  'Kamyonetler', 'Motorsikletler', 'Lüks Araçlar', 'Klasik Araçlar',
  'Elektrikli Araçlar', 'Hibrit Araçlar', 'Hasarlı Araçlar', 'Pert Araçlar',
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmetler' }]}
        eyebrow="Hizmetlerimiz"
        title="Araç Alım"
        highlight="Hizmetlerimiz"
        subtitle="Kazalı, hasarlı, pert ve hurda her türlü aracınızı en yüksek fiyatla alıyoruz. Ücretsiz ekspertiz, anında ödeme."
        showStats
      />

      <VehicleServicesSection />

      <CTABanner
        title="Hangi Hizmeti Seçeceğinizden"
        highlight="Emin Değil misiniz?"
        subtitle="Bizi arayın, uzman ekibimiz size yardımcı olsun."
        source="hizmetler-cta1"
      />

      <WhyChooseUsSection />
      <ProcessSection />

      {/* Vehicle types */}
      <section className="section bg-surface">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Araç Türleri" title="Hangi Araçları" highlight="Alıyoruz?" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {vehicleTypes.map((t) => (
              <div key={t} className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-3.5 shadow-soft">
                <Check className="h-4.5 w-4.5 flex-shrink-0 text-brand-green-dark" aria-hidden="true" />
                <span className="text-[13.5px] font-semibold text-ink">{t}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner title="Aracınızı Bugün" highlight="Satın" subtitle="En yüksek fiyat garantisi ile hemen teklif alın." source="hizmetler-cta2" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ItemList', name: 'Hasar Park Hizmetleri',
        description: 'Kazalı, hasarlı, pert ve hurda araç alım hizmetleri',
        itemListElement: siteConfig.services.map((service, index) => ({
          '@type': 'ListItem', position: index + 1,
          item: { '@type': 'Service', name: service.title, description: service.shortDesc, url: `${siteConfig.url}/${service.slug}` },
        })),
      }) }} />
    </div>
  );
}
