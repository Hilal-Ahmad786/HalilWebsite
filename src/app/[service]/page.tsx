import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getServiceSlugs } from '@/data/services';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyUs from '@/components/sections/WhyUs';
import CTASection from '@/components/sections/CTASection';
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
      title: 'Sayfa Bulunamadı | Premium Auto',
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

  // Determine border color class based on service color
  const colorClasses = {
    lime: 'border-lime-400',
    purple: 'border-purple-600',
    fuchsia: 'border-fuchsia-600',
  };
  
  const borderColor = colorClasses[service.color];

  return (
    <div className={`service-page service-${service.id}`}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          {/* Badge */}
          <div className={`inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 ${borderColor}`}>
            <span className="font-black text-sm tracking-widest">{service.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            {service.hero.title}
            <span className="block text-lime-400">{service.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            {service.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-lime-400 text-gray-900 px-12 py-6 font-black text-2xl hover:bg-lime-300 transition flex items-center justify-center gap-4"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              HEMEN ARA
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${service.title} için teklif almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-lime-400 text-lime-400 px-12 py-6 font-black text-2xl hover:bg-lime-400 hover:text-gray-900 transition flex items-center justify-center gap-4"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WHATSAPP
            </a>
          </div>

          {/* Phone Display */}
          <div className="text-lime-400 text-3xl font-black">
            📞 {siteConfig.phoneDisplay}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            {service.shortTitle.toUpperCase()} ALIMINDA{' '}
            <span className="text-purple-600">NEDEN BİZ?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 border-l-4 ${borderColor} shadow-lg hover:shadow-2xl transition`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-3">{feature.title}</h3>
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
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            HANGİ ARAÇLARI <span className="text-purple-600">ALIYORUZ?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.content.whatWeAccept.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 border-l-4 border-lime-400 shadow-md flex items-center gap-3"
              >
                <svg className="w-6 h-6 text-lime-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-bold text-gray-900">{item}</span>
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
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            {service.content.pricing.title}
          </h2>

          <div className={`bg-gray-50 p-8 border-l-4 ${borderColor} mb-8`}>
            <p className="text-xl text-gray-700 mb-6 font-bold">
              {service.content.pricing.description}
            </p>

            <ul className="space-y-4">
              {service.content.pricing.factors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-medium">{factor}</span>
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
          <div className="text-center mb-16">
            <div className={`inline-block bg-fuchsia-600/20 text-fuchsia-600 px-6 py-3 mb-6 border-2 ${borderColor}`}>
              <span className="font-black text-sm tracking-widest">SIK SORULAN SORULAR</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              MERAK EDİLENLER
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <details
                key={index}
                className={`bg-white border-l-4 ${borderColor} shadow-md overflow-hidden group`}
              >
                <summary className="p-6 font-bold text-gray-900 text-lg cursor-pointer hover:bg-gray-50 transition flex items-center justify-between">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </summary>

                <div className="p-6 pt-0 text-gray-700 leading-relaxed">
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
              name: 'Premium Auto',
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