import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCities, getCitiesByRegion } from '@/data/cities';
import CTASection from '@/components/sections/CTASection';
import SocialProof from '@/components/ui/SocialProof';
import TrustBadges from '@/components/ui/TrustBadges';

export const metadata: Metadata = {
  title: 'Hizmet Verdiğimiz Şehirler | Hasar Park - Türkiye Geneli Araç Alımı',
  description: 'Hasar Park olarak Türkiye\'nin 81 ilinde kazalı, hasarlı, pert ve hurda araç alımı hizmeti veriyoruz. Size en yakın şehri seçin.',
  keywords: ['türkiye araç alım', 'şehirler', 'il il araç alım', 'türkiye geneli hizmet'],
};

export default function CitiesIndexPage() {
  const allCities = getAllCities();

  // Group cities by region
  const regions = [
    { name: 'Marmara', slug: 'marmara' },
    { name: 'Ege', slug: 'ege' },
    { name: 'Akdeniz', slug: 'akdeniz' },
    { name: 'İç Anadolu', slug: 'ic-anadolu' },
    { name: 'Karadeniz', slug: 'karadeniz' },
    { name: 'Doğu Anadolu', slug: 'dogu-anadolu' },
    { name: 'Güneydoğu Anadolu', slug: 'guneydogu-anadolu' },
  ];

  const cityStats = [
    { value: '81 İl', label: 'Hizmet Bölgesi' },
    { value: '7/24', label: 'Kesintisiz Destek' },
    { value: '30dk', label: 'Yanıt Süresi' },
    { value: '%100', label: 'Memnuniyet' },
  ];

  return (
    <div className="cities-index-page">
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
                <span className="font-semibold text-sm tracking-wide">HİZMET VERDİĞİMİZ ŞEHİRLER</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Türkiye Geneli
                <span className="block text-emerald-400">Araç Alım Hizmeti</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-xl">
                81 İlde kazalı, hasarlı, pert ve hurda araç alımı.
                Size en yakın şehri seçin, anında teklif alın.
              </p>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-4 text-gray-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Ücretsiz Çekici
                </span>
                <span className="text-emerald-400">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Anında Değerlendirme
                </span>
                <span className="text-emerald-400">•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  En Yüksek Fiyat
                </span>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {cityStats.map((stat, index) => (
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

      {/* Main Cities - Featured */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">AKTİF ŞEHİRLER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Başlıca <span className="text-indigo-600">Şehirler</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {allCities.map((city) => (
              <Link
                key={city.id}
                href={`/sehirler/${city.slug}`}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-2xl flex items-center justify-center text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {city.name === 'İstanbul' ? '🏙️' : city.name === 'Ankara' ? '🏛️' : '🌊'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">{city.name}</h3>
                  <div className="text-emerald-600 text-sm font-semibold mb-4">
                    {city.cityInfo.coverage.length}+ İlçe Hizmeti
                  </div>
                  <div className="border-t border-gray-100 pt-4 mt-4 text-gray-600">
                    <div className="text-sm mb-2">Nüfus: {city.cityInfo.population}</div>
                    <div className="text-sm">Yanıt Süresi: {city.cityInfo.responseTime}</div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                    <span>Detaylı Bilgi</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center bg-emerald-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 font-semibold mb-2">
              Yakında daha fazla şehir eklenecek!
            </p>
            <p className="text-gray-600">
              Şu anda İstanbul, Ankara ve İzmir'de hizmet veriyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Cities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-violet-100 text-violet-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">YAKINDA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hizmete Açılacak <span className="text-violet-600">Şehirler</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[
                'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep',
                'Şanlıurfa', 'Mersin', 'Kayseri', 'Eskişehir', 'Diyarbakır',
                'Samsun', 'Denizli', 'Adapazarı', 'Malatya', 'Kahramanmaraş',
                'Erzurum', 'Van', 'Batman', 'Elazığ', 'Erzincan',
                'Trabzon', 'Kocaeli', 'Balıkesir', 'Manisa', 'Aydın',
                'Tekirdağ', 'Çorum', 'Tokat', 'Afyon', 'Sivas',
                'Ordu', 'Kütahya', 'Isparta', 'Uşak', 'Edirne',
              ].map((city, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="w-6 h-6 bg-emerald-100 rounded-md flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="font-semibold text-gray-700">
                Bu şehirlerden hizmet almak ister misiniz?
              </p>
              <p className="mt-2 text-gray-600">
                Hemen arayın, en kısa sürede hizmete açalım!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ŞEHRİNİZ LİSTEDE YOK MU?"
        subtitle="Bizi arayın, Türkiye'nin her yerine gidiyoruz!"
        variant="lime"
      />

      {/* Turkey Coverage Map Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
              <span className="font-bold text-sm tracking-wide">HİZMET KAPSAMI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Türkiye Geneli <span className="text-indigo-600">Kapsam</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">7 Bölge</h3>
              <ul className="space-y-3">
                {regions.map((region, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700">{region.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">81 İl</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">🚚</div>
                  <span>Her ile ücretsiz çekici</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">⚡</div>
                  <span>24 saat içinde ekspertiz</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">💰</div>
                  <span>En yüksek fiyat garantisi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">📄</div>
                  <span>Tüm evrak işlemleri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="BUGÜN ARAYIN"
        subtitle="Hangi şehirde olursanız olun, yanınızdayız!"
        variant="urgent"
      />
    </div>
  );
}