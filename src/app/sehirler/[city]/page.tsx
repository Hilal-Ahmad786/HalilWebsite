import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, ArrowRight, Star, Building2 } from 'lucide-react';
import { getCityBySlug, getCitySlugs } from '@/data/cities';
import { siteConfig } from '@/config/site';
import { heroImage } from '@/data/homeContent';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Accordion from '@/components/shared/Accordion';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import { ModernIcon } from '@/components/ui/Icons';
import ProcessSection from '@/components/home/ProcessSection';

export async function generateStaticParams() {
  return getCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return { title: 'Şehir Bulunamadı' };
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    alternates: { canonical: `/sehirler/${city.slug}` },
    openGraph: { title: city.metaTitle, description: city.metaDescription },
  };
}

const serviceInfo: Record<string, { title: string; icon: string }> = {
  kazali: { title: 'Kazalı Araç Alımı', icon: 'kazalı araç' },
  hasarli: { title: 'Hasarlı Araç Alımı', icon: 'hasarlı araç' },
  pert: { title: 'Pert Araç Alımı', icon: 'pert araç' },
  hurda: { title: 'Hurda Araç Alımı', icon: 'hurda araç' },
};

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const availableServices = Object.entries(city.services).filter(([, ok]) => ok).map(([k]) => k);
  const cityStats = [
    { value: city.cityInfo.population, label: 'Nüfus' },
    { value: `${city.cityInfo.coverage.length}+`, label: 'İlçe Hizmeti' },
    { value: city.cityInfo.responseTime, label: 'Yanıt Süresi' },
    { value: '7/24', label: 'Destek' },
  ];

  return (
    <div className={`city-page city-${city.id}`}>
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Şehirler', href: '/sehirler' }, { label: city.name }]}
        eyebrow={city.hero.badge.replace(/^[^\wığüşöçİĞÜŞÖÇ]+/, '').trim()}
        title={city.hero.title}
        highlight={city.hero.titleHighlight}
        subtitle={city.hero.subtitle}
        image={{ src: heroImage, alt: `${city.name} araç alımı - Hasar Park` }}
        whatsappMessage={`Merhaba, ${city.name}'da araç alımı için bilgi almak istiyorum.`}
      >
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {cityStats.map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-white px-3 py-3 text-center shadow-soft">
              <div className="text-[18px] font-extrabold text-ink">{s.value}</div>
              <div className="mt-0.5 text-[11px] text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Services available */}
      <section className="section bg-surface">
        <Container>
          <SectionHeader eyebrow="Hizmetlerimiz" title={`${city.name}'da`} highlight="Hizmetlerimiz" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {availableServices.map((key) => {
              const s = serviceInfo[key];
              if (!s) return null;
              const detail = city.servicesDetail?.[key as keyof typeof city.servicesDetail];
              return (
                <Link
                  key={key}
                  id={key}
                  href={`/${key}-arac-alim`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-green/40"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                    <ModernIcon name={s.icon} label={s.title} className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-[16px] font-bold text-ink group-hover:text-brand-green-dark">{detail?.title ?? s.title}</h3>
                  <p className="mt-1.5 flex-1 text-[13.5px] text-ink-soft">{detail?.description ?? `${city.name}'da en yüksek fiyat garantisi`}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-brand-green-dark">
                    Detay <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* District details */}
      {city.districtDetails && (
        <section className="section bg-surface-alt">
          <Container>
            <SectionHeader eyebrow="İlçe Hizmetleri" title="İlçeye Göre" highlight="Hizmet" />
            <div className="grid gap-4 md:grid-cols-3">
              {city.districtDetails.map((d, i) => (
                <div key={i} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple-soft text-brand-purple">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold text-ink">{d.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{d.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* City features */}
      <section className="section bg-surface">
        <Container>
          <SectionHeader eyebrow="Avantajlarımız" title={`${city.name}'da`} highlight="Neden Biz?" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                  <ModernIcon name={f.icon} label={f.title} className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-4 text-[17px] font-bold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{f.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeader eyebrow="Müşteri Yorumları" title={`${city.name}'dan`} highlight="Yorumlar" />
          <div className="grid gap-5 md:grid-cols-3">
            {city.testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <div className="flex gap-0.5" aria-hidden="true">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} className="h-4 w-4 fill-warning text-warning" />)}
                </div>
                <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">“{t.text}”</blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <div className="text-[14px] font-bold text-ink">{t.name}</div>
                  <div className="text-[12px] text-ink-muted">{t.district}, {city.name} • {t.service}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner title={`${city.name}'da`} highlight="Hemen Satın" subtitle="Aynı gün değerlendirme ve ödeme garantisi." source={`city-${city.id}-cta1`} whatsappMessage={`Merhaba, ${city.name}'da araç alımı için bilgi almak istiyorum.`} />

      {/* Coverage areas */}
      <section className="section bg-surface">
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="Hizmet Bölgeleri" title="Hizmet Verdiğimiz" highlight="İlçeler" />
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
              {city.cityInfo.coverage.map((d, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-line bg-surface-alt px-3 py-2.5">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-brand-green-dark" aria-hidden="true" />
                  <span className="text-[13px] font-medium text-ink">{d}</span>
                </div>
              ))}
            </div>
          </div>
          {city.cityInfo.localOffice && (
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface-alt px-5 py-3">
                <Building2 className="h-5 w-5 text-brand-green-dark" aria-hidden="true" />
                <span className="text-[14.5px] font-medium text-ink">{city.cityInfo.localOffice}</span>
              </div>
            </div>
          )}
        </Container>
      </section>

      <ProcessSection />

      {/* FAQ */}
      <section className="section bg-surface-alt">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="SSS" title={`${city.name} İçin`} highlight="Sık Sorulanlar" />
          <Accordion items={city.faqs} />
        </Container>
      </section>

      <CTABanner title={`${city.name}'da Bugün Arayın,`} highlight="Yarın Ödeme Alın!" subtitle="Paranız aynı gün hesabınızda." source={`city-${city.id}-cta2`} whatsappMessage={`Merhaba, ${city.name}'da araç alımı için bilgi almak istiyorum.`} />

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'AutomotiveBusiness', name: `Hasar Park ${city.name}`,
        description: city.metaDescription, telephone: siteConfig.phone, url: siteConfig.url,
        areaServed: { '@type': 'City', name: city.name },
        openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '100000' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: city.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      }) }} />
    </div>
  );
}
