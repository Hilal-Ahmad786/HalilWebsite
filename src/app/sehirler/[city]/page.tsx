import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCityBySlug, getCitySlugs } from '@/data/cities';
import { siteConfig } from '@/config/site';
import ProcessSteps from '@/components/sections/ProcessSteps';
import CTASection from '@/components/sections/CTASection';

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getCitySlugs();
  return slugs.map((slug) => ({
    city: slug,
  }));
}

// Generate metadata for each city - FIXED: await params
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Şehir Bulunamadı | Premium Auto',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

// FIXED: await params
export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const availableServices = Object.entries(city.services)
    .filter(([_, available]) => available)
    .map(([service, _]) => service);

  const serviceInfo = {
    kazali: { title: 'Kazalı Araç Alımı', icon: '🚗', color: 'lime' },
    hasarli: { title: 'Hasarlı Araç Alımı', icon: '🔧', color: 'purple' },
    pert: { title: 'Pert Araç Alımı', icon: '⚠️', color: 'fuchsia' },
    hurda: { title: 'Hurda Araç Alımı', icon: '♻️', color: 'lime' },
  };

  return (
    <div className={`city-page city-${city.id}`}>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          {/* Badge */}
          <div className="inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 border-lime-400">
            <span className="font-black text-sm tracking-widest">{city.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            {city.hero.title}
            <span className="block text-lime-400">{city.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            {city.hero.subtitle}
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
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${city.name}'da araç alımı için bilgi almak istiyorum.`)}`}
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

      {/* City Info Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2 text-lime-400">{city.cityInfo.population}</div>
              <div className="text-sm font-bold uppercase">Nüfus</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 text-lime-400">{city.cityInfo.coverage.length}+</div>
              <div className="text-sm font-bold uppercase">İlçe Hizmeti</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 text-lime-400">{city.cityInfo.responseTime}</div>
              <div className="text-sm font-bold uppercase">Yanıt Süresi</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 text-lime-400">7/24</div>
              <div className="text-sm font-bold uppercase">Destek</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available in City */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            {city.name.toUpperCase()}'DA{' '}
            <span className="text-purple-600">HİZMETLERİMİZ</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableServices.map((serviceKey) => {
              const service = serviceInfo[serviceKey as keyof typeof serviceInfo];
              const colorClass = service.color === 'lime' ? 'border-lime-400' : service.color === 'purple' ? 'border-purple-600' : 'border-fuchsia-600';
              
              return (
                <Link
                  key={serviceKey}
                  href={`/${serviceKey}-arac-alim`}
                  className={`group bg-white p-8 border-l-4 ${colorClass} shadow-md hover:shadow-2xl transition-all hover:-translate-y-2`}
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {city.name}'da en yüksek fiyat
                  </p>
                  <div className="flex items-center gap-2 text-sm font-black text-gray-700 group-hover:text-purple-600">
                    <span>DETAY</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* City Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            {city.name.toUpperCase()}'DA <span className="text-purple-600">NEDEN BİZ?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 border-l-4 border-lime-400 shadow-lg hover:shadow-2xl transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`${city.name.toUpperCase()}'DA HEMEN SATIN`}
        subtitle="Aynı gün değerlendirme ve ödeme garantisi"
        variant="urgent"
      />

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            HİZMET VERDİĞİMİZ <span className="text-purple-600">İLÇELER</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 border-l-4 border-purple-600">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {city.cityInfo.coverage.map((district, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-lime-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-bold text-gray-700">{district}</span>
                  </div>
                ))}
              </div>
            </div>

            {city.cityInfo.localOffice && (
              <div className="mt-8 text-center">
                <p className="text-xl text-gray-700 font-bold">
                  🏢 {city.cityInfo.localOffice}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            {city.name.toUpperCase()}'DAN <span className="text-lime-600">YORUMLAR</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {city.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 border-l-4 border-purple-600 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-6xl text-gray-200 font-black">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-black text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.district}, {city.name} • {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            {city.name.toUpperCase()} İÇİN <span className="text-purple-600">SSS</span>
          </h2>

          <div className="space-y-4">
            {city.faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white border-l-4 border-purple-600 shadow-md overflow-hidden group"
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
        title={`${city.name.toUpperCase()}'DA BUGÜN ARAYIN`}
        subtitle="Yarın paranız hesabınızda"
        variant="lime"
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `Premium Auto ${city.name}`,
            description: city.metaDescription,
            telephone: siteConfig.phone,
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
            openingHours: 'Mo-Su 00:00-23:59',
          }),
        }}
      />
    </div>
  );
}