import { Metadata } from 'next';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import { ModernIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: { absolute: "Hakkımızda | Türkiye'nin Güvenilir Araç Alım Merkezi" },
  description:
    "5+ yıl tecrübe, 10.000+ mutlu müşteri. Hasar Park olarak kazalı, hasarlı, pert ve hurda araç alımında Türkiye genelinde güvenilir hizmet sunuyoruz.",
  alternates: { canonical: 'https://www.hasarpark.com/hakkimizda' },
  openGraph: {
    title: "Hakkımızda | Türkiye'nin Güvenilir Araç Alım Merkezi",
    description:
      "5+ yıl tecrübe, 10.000+ mutlu müşteri. Hasar Park olarak kazalı, hasarlı, pert ve hurda araç alımında Türkiye genelinde güvenilir hizmet sunuyoruz.",
    url: 'https://www.hasarpark.com/hakkimizda',
    type: 'website',
    images: ['/images/kazali-arac.png'],
  },
};

const values = [
  { icon: 'garanti', title: 'Güven', text: 'Şeffaf ve dürüst fiyatlandırma ile müşterilerimizin güvenini kazanıyoruz.' },
  { icon: 'anında', title: 'Hız', text: '30 dakikada değerlendirme, aynı gün ödeme ile zamandan tasarruf sağlıyoruz.' },
  { icon: 'tecrübe', title: 'Profesyonellik', text: '5+ yıllık tecrübe ve uzman kadromuzla profesyonel hizmet sunuyoruz.' },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımızda' }]}
        eyebrow="Hakkımızda"
        title="Güvenilir"
        highlight="Araç Alım Merkezi"
        subtitle="5+ yıldır kazalı, hasarlı, pert ve hurda araç alımında hizmet veriyoruz. Binlerce mutlu müşterimizle Türkiye genelinde güvenilir çözüm ortağınızız."
        showStats
      />

      {/* Story */}
      <section className="section bg-surface">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Hikayemiz" title="Bizim" highlight="Hikayemiz" />
          <div className="space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>
              <strong className="text-ink">Hasar Park</strong>, 2021 yılından bu yana Türkiye'nin dört bir yanında
              kazalı, hasarlı, pert ve hurda araç alım-satım hizmeti vermektedir. 5 yılı aşkın tecrübemiz ve
              10.000'den fazla mutlu müşterimizle sektörün öncü firmalarından biriyiz.
            </p>
            <p>
              Müşteri memnuniyetini her şeyin üstünde tutan yaklaşımımız, şeffaf fiyatlandırma politikamız ve
              profesyonel ekibimizle <strong className="text-ink">Türkiye genelinde güvenilir bir araç alım merkezi</strong>{' '}
              olmayı başardık.
            </p>
            <p>
              İstanbul, Ankara, İzmir başta olmak üzere Türkiye genelinde hizmet vermekteyiz. Uzman ekibimiz,
              7/24 müşteri hizmetleri, ücretsiz çekici hizmetimiz ve aynı gün ödeme garantimizle yanınızdayız.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeader eyebrow="Değerlerimiz" title="Temel" highlight="Değerlerimiz" />
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                  <ModernIcon name={v.icon} label={v.title} className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUsSection />

      <CTABanner
        title="Bizimle Çalışın,"
        highlight="En Yüksek Fiyatı Alın"
        subtitle="5+ yıllık tecrübemizden faydalanın."
        source="hakkimizda-cta"
      />
    </div>
  );
}
