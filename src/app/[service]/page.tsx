import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight, AlertTriangle, Star, BadgeCheck } from 'lucide-react';
import { getServiceBySlug, getServiceSlugs } from '@/data/services';
import { getAllCities } from '@/data/cities';
import { locative } from '@/lib/turkish';
import { siteConfig } from '@/config/site';
import { serviceImages } from '@/data/homeContent';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Accordion from '@/components/shared/Accordion';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';
import { ModernIcon } from '@/components/ui/Icons';
import ProcessSection from '@/components/home/ProcessSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import QuoteFormSection from '@/components/home/QuoteFormSection';

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ service: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return { title: 'Sayfa Bulunamadı' };
  return {
    // absolute: metaTitle already contains the brand; the root template would duplicate it
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: service.canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: service.ogUrl,
      type: 'website',
      siteName: siteConfig.name,
      locale: 'tr_TR',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${service.title} - Hasar Park` }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const image = serviceImages[service.id] ?? serviceImages.kazali;

  return (
    <div className={`service-page service-${service.id}`}>
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmetler', href: '/hizmetler' }, { label: service.shortTitle }]}
        eyebrow={service.hero.badge.replace(/^[^\wığüşöçİĞÜŞÖÇ]+/, '').trim()}
        title={service.hero.title}
        highlight={service.hero.titleHighlight}
        subtitle={service.hero.subtitle}
        image={{ src: image, alt: `${service.title} - Hasar Park` }}
        whatsappMessage={`Merhaba, ${service.title} için teklif almak istiyorum.`}
      />

      {/* Features */}
      <section className="section bg-surface">
        <Container>
          <SectionHeader eyebrow="Avantajlarımız" title={`${service.shortTitle} Alımında`} highlight="Neden Biz?" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
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

      {/* What we accept */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeader eyebrow="Araç Türleri" title="Hangi Araçları" highlight="Alıyoruz?" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.content.whatWeAccept.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                <Check className="h-5 w-5 flex-shrink-0 text-brand-green-dark" aria-hidden="true" />
                <span className="text-[14.5px] font-semibold text-ink">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title={`${service.shortTitle.replace(/ Araç$/, '')} Aracınızı`}
        highlight="Hemen Satın"
        subtitle="Tek bir telefonla başlayın, aynı gün ödemenizi alın."
        source={`service-${service.id}-cta1`}
        whatsappMessage={`Merhaba, ${service.title} için teklif almak istiyorum.`}
      />

      {/* Lead form */}
      <QuoteFormSection />

      {/* Process */}
      <ProcessSection />

      {/* Pricing */}
      <section className="section bg-surface">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Fiyatlandırma" title={service.content.pricing.title} />
          <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
            <p className="text-[15px] leading-relaxed text-ink-soft">{service.content.pricing.description}</p>
            <ul className="mt-5 space-y-3">
              {service.content.pricing.factors.map((factor, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-line bg-surface-alt p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green-dark" aria-hidden="true" />
                  <span className="text-[14.5px] text-ink-soft">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 space-y-2.5">
            {service.content.pricing.byVehicleType.map((row, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-line bg-white p-4 shadow-soft">
                <span className="text-[14.5px] font-semibold text-ink">{row.type}</span>
                <span className="rounded-lg bg-brand-green-soft px-3 py-1 text-[13px] font-bold text-brand-green-dark">{row.priceRange}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[12.5px] text-ink-muted">
            * Fiyatlar günlük piyasa koşullarına göre değişebilir. Kesin fiyat için bizi arayın.
          </p>
        </Container>
      </section>

      {/* Common mistakes */}
      <section className="section bg-surface-alt">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Dikkat" title="Bunları" highlight="Yapmayın" />
          <div className="space-y-3">
            {service.commonMistakes.map((m, i) => (
              <div key={i} className="rounded-2xl border border-line bg-white p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-danger">
                    <AlertTriangle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-ink">Hata: {m.mistake}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">Çözüm: {m.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer stories */}
      <section className="section bg-surface">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Müşteri Hikayeleri" title="Gerçek" highlight="Deneyimler" />
          <div className="grid gap-5 md:grid-cols-2">
            {service.customerStories.map((story, i) => (
              <figure key={i} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-soft text-[15px] font-bold text-brand-green-dark">
                    {story.name[0]}
                  </span>
                  <div>
                    <div className="text-[14px] font-bold text-ink">{story.name}</div>
                    <div className="text-[12px] text-ink-muted">{story.city} • {story.vehicleType}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5" aria-hidden="true">
                  {[...Array(5)].map((_, s) => <Star key={s} className="h-4 w-4 fill-warning text-warning" />)}
                </div>
                <blockquote className="mt-2 text-[14.5px] italic leading-relaxed text-ink-soft">“{story.story}”</blockquote>
                <figcaption className="mt-4 rounded-lg border-l-4 border-brand-green bg-brand-green-pale p-3 text-[13.5px] font-semibold text-brand-green-dark">
                  Sonuç: {story.result}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUsSection />

      {/* FAQ */}
      <section className="section bg-surface-alt">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="SSS" title="Merak" highlight="Edilenler" />
          <Accordion items={service.faqs} />
        </Container>
      </section>

      {/* Related services */}
      <section className="section bg-surface">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Diğer Hizmetler" title="Diğer" highlight="Hizmetlerimiz" subtitle="Aracınızın durumuna göre size en uygun hizmeti seçin" />
          <div className="grid gap-4 md:grid-cols-3">
            {service.content.relatedServices.map((r, i) => (
              <Link key={i} href={`/${r.slug}`} className="group rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40">
                <h3 className="text-[16px] font-bold text-ink group-hover:text-brand-green-dark">{r.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-ink-soft">{r.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[13.5px] font-semibold text-brand-green-dark">
                  Detay <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Cities we serve — service→city internal links with keyword anchors */}
      <section className="section bg-surface-alt">
        <Container className="max-w-5xl">
          <SectionHeader eyebrow="Hizmet Bölgeleri" title="Şehrinizde" highlight={service.shortTitle} subtitle={`${service.title} hizmetimiz Türkiye genelinde — şehrinizi seçin.`} />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {getAllCities()
              .filter((c) => c.features.length > 0 || c.faqs.length > 0)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/sehirler/${c.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-[13.5px] font-semibold text-ink transition hover:border-brand-green hover:text-brand-green-dark"
                >
                  {locative(c.name)} {service.shortTitle} Alımı
                  <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Bugün Arayın,"
        highlight="Yarın Ödeme Alın!"
        subtitle={`${service.shortTitle} satışında güvenilir partneriniz.`}
        source={`service-${service.id}-cta2`}
        whatsappMessage={`Merhaba, ${service.title} için teklif almak istiyorum.`}
      />

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.metaDescription,
        provider: { '@type': 'AutomotiveBusiness', name: 'Hasar Park', telephone: siteConfig.phone },
        areaServed: 'TR', availableChannel: { '@type': 'ServiceChannel', serviceUrl: `${siteConfig.url}/${service.slug}` },
        offers: { '@type': 'Offer', priceCurrency: 'TRY', availability: 'https://schema.org/InStock' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
      }) }} />
    </div>
  );
}
