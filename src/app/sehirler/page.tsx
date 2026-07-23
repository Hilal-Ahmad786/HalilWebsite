import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Truck, Zap, Wallet, FileText, Check } from 'lucide-react';
import { getAllCities } from '@/data/cities';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

export const metadata: Metadata = {
  title: { absolute: 'Hizmet Verdiğimiz Şehirler | Türkiye Geneli Araç Alımı' },
  description:
    'Hasar Park Türkiye genelinde kazalı, hasarlı, pert ve hurda araç alımı yapıyor. Size en yakın şehri seçin, 30 dakikada teklif alın.',
  keywords: ['türkiye araç alım', 'şehirler', 'il il araç alım', 'türkiye geneli hizmet'],
  alternates: { canonical: 'https://www.hasarpark.com/sehirler' },
  openGraph: {
    title: 'Hizmet Verdiğimiz Şehirler | Türkiye Geneli Araç Alımı',
    description:
      'Hasar Park Türkiye genelinde kazalı, hasarlı, pert ve hurda araç alımı yapıyor. Size en yakın şehri seçin, 30 dakikada teklif alın.',
    url: 'https://www.hasarpark.com/sehirler',
    type: 'website',
    images: ['/images/kazali-arac.png'],
  },
};

const regions = ['Marmara', 'Ege', 'Akdeniz', 'İç Anadolu', 'Karadeniz', 'Doğu Anadolu', 'Güneydoğu Anadolu'];
// Only cities WITHOUT a live /sehirler/[city] page — never list an active city here
const comingSoon = [
  'Trabzon', 'Kocaeli', 'Balıkesir', 'Manisa', 'Aydın', 'Tekirdağ', 'Sivas', 'Ordu', 'Isparta',
];
const coverage = [
  { icon: Truck, text: 'Her ile ücretsiz çekici' },
  { icon: Zap, text: '30 dakika içinde ekspertiz' },
  { icon: Wallet, text: 'En yüksek fiyat garantisi' },
  { icon: FileText, text: 'Tüm evrak işlemleri' },
];

export default function CitiesIndexPage() {
  const allCities = getAllCities();

  return (
    <div className="cities-index-page">
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Şehirler' }]}
        eyebrow="Hizmet Bölgeleri"
        title="Türkiye Geneli"
        highlight="Araç Alım Hizmeti"
        subtitle="Türkiye genelinde kazalı, hasarlı, pert ve hurda araç alımı. Size en yakın şehri seçin, anında teklif alın."
        showStats
      />

      {/* Featured cities */}
      <section className="section bg-surface">
        <Container>
          <SectionHeader eyebrow="Aktif Şehirler" title="Başlıca" highlight="Şehirler" />
          <div className="grid gap-5 md:grid-cols-3">
            {allCities.map((city) => (
              <Link
                key={city.id}
                href={`/sehirler/${city.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 text-center shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-green/40"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-soft text-brand-green-dark">
                  <MapPin className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[20px] font-bold text-ink group-hover:text-brand-green-dark">{city.name}</h3>
                <div className="text-[13px] font-semibold text-brand-green-dark">{city.cityInfo.coverage.length}+ İlçe Hizmeti</div>
                <div className="mt-4 border-t border-line pt-4 text-[13px] text-ink-soft">
                  <div>Nüfus: {city.cityInfo.population}</div>
                  <div className="mt-1">Yanıt Süresi: {city.cityInfo.responseTime}</div>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-green-dark">
                  Detaylı Bilgi <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-brand-green-pale p-6 text-center">
            <p className="text-[16px] font-semibold text-ink">Yakında daha fazla şehir eklenecek!</p>
            <p className="mt-1 text-[14px] text-ink-soft">Türkiye genelinde {allCities.length} şehirde aktif olarak hizmet veriyoruz.</p>
          </div>
        </Container>
      </section>

      {/* Coming soon */}
      <section className="section bg-surface-alt">
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="Yakında" title="Hizmete Açılacak" highlight="Şehirler" />
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
              {comingSoon.map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-lg border border-line bg-surface-alt px-3 py-2.5">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-brand-purple" aria-hidden="true" />
                  <span className="text-[13px] font-medium text-ink">{c}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-[14px] text-ink-soft">
              Bu şehirlerden hizmet almak ister misiniz? <span className="font-semibold text-ink">Hemen arayın</span>, en kısa sürede hizmete açalım!
            </p>
          </div>
        </Container>
      </section>

      <CTABanner title="Şehriniz Listede" highlight="Yok mu?" subtitle="Bizi arayın, Türkiye'nin her yerine gidiyoruz!" source="sehirler-cta1" />

      {/* Coverage */}
      <section className="section bg-surface">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Hizmet Kapsamı" title="Türkiye Geneli" highlight="Kapsam" />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-7 shadow-soft">
              <h3 className="text-[20px] font-bold text-ink">7 Bölge</h3>
              <ul className="mt-5 space-y-3">
                {regions.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-[14.5px] text-ink-soft">
                    <Check className="h-5 w-5 text-brand-green-dark" aria-hidden="true" /> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-7 shadow-soft">
              <h3 className="text-[20px] font-bold text-ink">81 İl</h3>
              <ul className="mt-5 space-y-3">
                {coverage.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-[14.5px] text-ink-soft">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green-soft text-brand-green-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner title="Bugün Arayın," highlight="Yanınızdayız!" subtitle="Hangi şehirde olursanız olun, size geliyoruz." source="sehirler-cta2" />
    </div>
  );
}
