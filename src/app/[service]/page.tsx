import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '@/data/services';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyUs from '@/components/sections/WhyUs';
import CTASection from '@/components/sections/CTASection';
import HeroCTAButtons from '@/components/ui/HeroCTAButtons';
import SocialProof from '@/components/ui/SocialProof';
import TrustBadges from '@/components/ui/TrustBadges';
import { siteConfig } from '@/config/site';

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({
    service: slug,
  }));
}

// Generate metadata for each service - FIXED: await params
export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: 'Sayfa Bulunamadı | Hasar Park',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.hero.image],
    },
  };
}

// FIXED: await params
export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  // Determine accent color class based on service color
  const colorClasses = {
    lime: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
    purple: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' },
    fuchsia: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' },
  };

  const colors = colorClasses[service.color];

  return (
    <div className={`service-page service-${service.id}`}>
      {/* Hero Section - Matching Homepage Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-indigo-900/80 to-gray-800 pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {service.hero.image ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${service.hero.image}')` }}
              />
              <div className="absolute inset-0 bg-gray-900/90" />
            </>
          ) : (
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>
          )}
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-indigo-500/15 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-8 rounded-full">
                <span className="font-semibold text-sm tracking-wide">{service.hero.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {service.hero.title}
                <span className="block text-emerald-400">{service.hero.titleHighlight}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-xl">
                {service.hero.subtitle}
              </p>

              {/* CTA Buttons - Client Component */}
              <HeroCTAButtons
                trackingSource="service-hero"
                whatsappMessage={`Merhaba, ${service.title} için teklif almak istiyorum.`}
                align="left"
              />

              {/* Phone Display */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 inline-flex items-center gap-4 mt-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">7/24 Çağrı Merkezi</div>
                  <div className="text-orange-400 text-2xl font-bold">{siteConfig.phoneDisplay}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {siteConfig.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/8 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-2 border border-white/10"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-3 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16">
            <SocialProof variant="dark" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-emerald-400/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <TrustBadges variant="light" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className={`inline-block ${colors.bg} ${colors.text} px-6 py-3 mb-6 rounded-full`}>
              <span className="font-bold text-sm tracking-wide">AVANTAJLARIMIZ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {service.shortTitle} Alımında{' '}
              <span className="text-indigo-600">Neden Biz?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section #1 */}
      <CTASection
        title={`${service.shortTitle.toUpperCase()} ARACINIZI HEMEN SATIN`}
        subtitle="Tek bir telefonla başlayın, 24 saat içinde paranızı alın"
        variant="urgent"
      />

      {/* What We Accept */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">ARAÇ TÜRLERİ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hangi Araçları <span className="text-indigo-600">Alıyoruz?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {service.content.whatWeAccept.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className={`inline-block ${colors.bg} ${colors.text} px-6 py-3 mb-6 rounded-full`}>
              <span className="font-bold text-sm tracking-wide">FİYATLANDIRMA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {service.content.pricing.title}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              {service.content.pricing.description}
            </p>

            <ul className="space-y-4">
              {service.content.pricing.factors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 pt-1">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs />

      {/* CTA Section #2 */}
      <CTASection
        title="HEMEN ARAYIN - ANINDA TEKLİF"
        subtitle={`${service.shortTitle} için Türkiye'nin en yüksek fiyatını alın`}
        variant="lime"
      />

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-violet-100 text-violet-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">SIK SORULAN SORULAR</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Merak Edilenler
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
              >
                <summary className="p-6 font-semibold text-gray-900 text-lg cursor-pointer hover:bg-gray-50 transition flex items-center justify-between">
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-open:bg-indigo-100 transition-colors">
                    <svg className="w-5 h-5 text-gray-500 group-open:text-indigo-600 transform group-open:rotate-180 transition-all" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </summary>

                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="BUGÜN ARAYIN - YARIN ÖDEME ALIN"
        subtitle={`${service.shortTitle} satışında güvenilir partner`}
        variant="dark"
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.title,
            provider: {
              '@type': 'AutomotiveBusiness',
              name: 'Hasar Park',
              telephone: siteConfig.phone,
            },
            areaServed: 'TR',
            description: service.metaDescription,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'TRY',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </div>
  );
}