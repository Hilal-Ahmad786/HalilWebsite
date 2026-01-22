import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import CTASection from '@/components/sections/CTASection';
import SocialProof from '@/components/ui/SocialProof';
import TrustBadges from '@/components/ui/TrustBadges';
import ProcessSteps from '@/components/sections/ProcessSteps';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Hasar Park - Kazalı, Hasarlı, Pert, Hurda Araç Alımı',
  description: 'Hasar Park olarak kazalı araç alımı, hasarlı araç alımı, pert araç alımı ve hurda araç alımı hizmetleri sunuyoruz. En yüksek fiyat garantisi.',
  keywords: ['araç alım hizmetleri', 'kazalı araç', 'hasarlı araç', 'pert araç', 'hurda araç', 'araç satış'],
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero - Matching Homepage Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-indigo-900/80 to-gray-800 pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-indigo-500/15 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-8 rounded-full">
                <span className="font-semibold text-sm tracking-wide">HİZMETLERİMİZ</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Araç Alım
                <span className="block text-emerald-400">Hizmetlerimiz</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-xl">
                Kazalı, hasarlı, pert ve hurda her türlü aracınızı en yüksek fiyatla alıyoruz.
                Ücretsiz ekspertiz, anında ödeme.
              </p>
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">ARAÇ ALIM HİZMETLERİ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tüm <span className="text-indigo-600">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Her türlü hasarlı aracınız için profesyonel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteConfig.services.map((service) => (
              <Link
                key={service.id}
                href={`/${service.slug}`}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                      <span>Detaylı Bilgi</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="HANGİ HİZMETİ SEÇECEĞİNİZDEN EMİN DEĞİL MİSİNİZ?"
        subtitle="Bizi arayın, uzman ekibimiz size yardımcı olsun"
        variant="urgent"
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">NEDEN BİZ?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hasar Park <span className="text-emerald-600">Avantajları</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {siteConfig.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* What We Accept */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-violet-100 text-violet-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">ARAÇ TÜRLERİ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hangi Araçları <span className="text-violet-600">Alıyoruz?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Otomobiller',
              'SUV / Jeep',
              'Ticari Araçlar',
              'Minibüsler',
              'Kamyonetler',
              'Motorsikletler',
              'Lüks Araçlar',
              'Klasik Araçlar',
              'Elektrikli Araçlar',
              'Hibrit Araçlar',
              'Hasarlı Araçlar',
              'Pert Araçlar',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100"
              >
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="ARACINIZI BUGÜN SATIN"
        subtitle="En yüksek fiyat garantisi ile hemen teklif alın"
        variant="lime"
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Hasar Park Hizmetleri',
            description: 'Kazalı, hasarlı, pert ve hurda araç alım hizmetleri',
            itemListElement: siteConfig.services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title,
                description: service.shortDesc,
                url: `https://hasarpark.com/${service.slug}`,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
