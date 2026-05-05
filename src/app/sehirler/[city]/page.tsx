import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCityBySlug, getCitySlugs } from '@/data/cities';
import { siteConfig } from '@/config/site';
import ProcessSteps from '@/components/sections/ProcessSteps';
import CTASection from '@/components/sections/CTASection';
import TrustProofSection from '@/components/sections/TrustProofSection';
import HeroCTAButtons from '@/components/ui/HeroCTAButtons';
import SocialProof from '@/components/ui/SocialProof';
import TrustBadges from '@/components/ui/TrustBadges';
import { ModernIcon } from '@/components/ui/Icons';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

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
      title: 'Şehir Bulunamadı | Hasar Park',
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
    kazali: { title: 'Kazalı Araç Alımı', icon: 'kazalı araç', color: 'emerald' },
    hasarli: { title: 'Hasarlı Araç Alımı', icon: 'hasarlı araç', color: 'indigo' },
    pert: { title: 'Pert Araç Alımı', icon: 'pert araç', color: 'violet' },
    hurda: { title: 'Hurda Araç Alımı', icon: 'hurda araç', color: 'emerald' },
  };

  return (
    <div className={`city-page city-${city.id}`}>
      {/* Hero Section */}
      <section className="relative min-h-[86svh] flex items-center justify-center overflow-hidden pt-40 md:pt-44 pb-16" style={{ background: 'linear-gradient(135deg, #1A1F3A 0%, #252B4A 50%, #1A1F3A 100%)' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {city.hero.image ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${city.hero.image}')` }}
              />
              <div className="absolute inset-0 bg-gray-900/90" />
            </>
          ) : (
            <div className="absolute inset-0 opacity-5">
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-emerald-500/10 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white text-left">
              {/* Badge */}
              <div className="inline-block bg-emerald-500/20 text-emerald-400 px-6 py-3 mb-8 rounded-full backdrop-blur-sm">
                <span className="font-bold text-sm tracking-wide">
                  {city.hero.badge.replace(/^[^\wığüşöçİĞÜŞÖÇ]+/, '').trim()}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {city.hero.title}
                <span className="block text-emerald-400">{city.hero.titleHighlight}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                {city.hero.subtitle}
              </p>

              {/* CTA Buttons - Client Component */}
              <HeroCTAButtons
                trackingSource="city-hero"
                whatsappMessage={`Merhaba, ${city.name}'da araç alımı için bilgi almak istiyorum.`}
                phoneText={city.hero.ctaPhoneText}
                whatsappText={city.hero.ctaWhatsappText}
                phoneNumber={city.hero.customPhone}
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
                  <div className="text-orange-400 text-2xl font-bold">
                    {city.hero.customPhone ?
                      `${city.hero.customPhone.substring(0, 4)} ${city.hero.customPhone.substring(4, 7)} ${city.hero.customPhone.substring(7, 9)} ${city.hero.customPhone.substring(9, 11)}`
                      : siteConfig.phoneDisplay}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - City Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Population Quote */}
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/15 transition-all transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2 leading-none">
                  {city.cityInfo.population}
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  Nüfus
                </div>
              </div>

              {/* Coverage */}
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/15 transition-all transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-400 mb-2 leading-none">
                  {city.cityInfo.coverage.length}+
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  İlçe Hizmeti
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/15 transition-all transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-2 leading-none">
                  {city.cityInfo.responseTime}
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  Yanıt Süresi
                </div>
              </div>

              {/* Support */}
              <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/15 transition-all transform hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-400 mb-2 leading-none">
                  7/24
                </div>
                <div className="text-sm text-gray-300 font-medium">
                  Kesintisiz Destek
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16">
            <SocialProof variant="dark" />
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Trust Badges */}
      <section id="sayfa-icerigi" className="py-10 bg-gray-50 border-b border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <TrustBadges variant="light" />
        </div>
      </section>

      <TrustProofSection />

      {/* Services Available in City */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">HİZMETLERİMİZ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {city.name}'da{' '}
              <span className="text-indigo-600">Hizmetlerimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {availableServices.map((serviceKey) => {
              const service = serviceInfo[serviceKey as keyof typeof serviceInfo];
              const detail = city.servicesDetail?.[serviceKey as keyof typeof city.servicesDetail];
              const colorClass = service.color === 'emerald' ? 'bg-emerald-100' : service.color === 'indigo' ? 'bg-indigo-100' : 'bg-violet-100';

              if (detail) {
                // If detailed content exists (for Ankara), render explicit H2 sections
                return (
                  <div
                    key={serviceKey}
                    id={serviceKey}
                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <div className={`w-16 h-16 ${colorClass} rounded-xl flex items-center justify-center flex-shrink-0 overflow-visible ${service.color === 'emerald' ? 'text-emerald-600' : service.color === 'indigo' ? 'text-indigo-600' : 'text-violet-600'}`}>
                        <ModernIcon name={service.icon} label={service.title} className="h-14 w-14 scale-125" strokeWidth={2.25} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">{detail.title}</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">{detail.description}</p>
                        <Link
                          href={`/${serviceKey}-arac-alim`}
                          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
                        >
                          Detaylı Bilgi
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              // Fallback for other cities
              return (
                <Link
                  key={serviceKey}
                  href={`/${serviceKey}-arac-alim`}
                  className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${colorClass} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform overflow-visible ${service.color === 'emerald' ? 'text-emerald-600' : service.color === 'indigo' ? 'text-indigo-600' : 'text-violet-600'}`}>
                    <ModernIcon name={service.icon} label={service.title} className="h-12 w-12 scale-125" strokeWidth={2.25} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {city.name}'da en yüksek fiyat
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-indigo-800">
                    <span>Detay</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* District Services (New Section for Ankara) */}
      {city.districtDetails && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-block bg-emerald-100 text-emerald-600 px-6 py-3 mb-6 rounded-full">
                <span className="font-bold text-sm tracking-wide">İLÇE HİZMETLERİ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                İlçeye Göre <span className="text-indigo-600">Hizmet</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {city.districtDetails.map((district, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{district.title}</h3>
                  <p className="text-gray-600">{district.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* City Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">AVANTAJLARIMIZ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {city.name}'da <span className="text-indigo-600">Neden Biz?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 overflow-visible">
                  <ModernIcon name={feature.icon} label={feature.title} className="h-12 w-12 scale-125" strokeWidth={2.25} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Moved Up) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">MÜŞTERİ YORUMLARI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {city.name}'dan <span className="text-emerald-600">Yorumlar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {city.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-5xl text-gray-100">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.district}, {city.name} • {testimonial.service}
                  </div>
                </div>
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
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">HİZMET BÖLGELERİ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hizmet Verdiğimiz <span className="text-indigo-600">İlçeler</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {city.cityInfo.coverage.map((district, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100">
                    <div className="w-6 h-6 bg-emerald-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 text-sm">{district}</span>
                  </div>
                ))}
              </div>
            </div>

            {city.cityInfo.localOffice && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-xl">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{city.cityInfo.localOffice}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />



      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-violet-100 text-violet-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">SIK SORULAN SORULAR</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {city.name} İçin <span className="text-indigo-600">SSS</span>
            </h2>
          </div>

          <div className="space-y-4">
            {city.faqs.map((faq, index) => (
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
        title={`${city.name.toUpperCase()}'DA BUGÜN ARAYIN`}
        subtitle="Yarın paranız hesabınızda"
        variant="lime"
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutomotiveBusiness',
            name: `Hasar Park ${city.name}`,
            description: city.metaDescription,
            telephone: siteConfig.phone,
            url: siteConfig.url,
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '100000',
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: city.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
