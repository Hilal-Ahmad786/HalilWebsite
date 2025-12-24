import { Metadata } from 'next';
import Link from 'next/link';
import { getAllCities, getCitiesByRegion } from '@/data/cities';
import CTASection from '@/components/sections/CTASection';

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

  return (
    <div className="cities-index-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <div className="inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 border-lime-400">
            <span className="font-black text-sm tracking-widest">HİZMET VERDİĞİMİZ ŞEHİRLER</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            TÜRKİYE GENELİ
            <span className="block text-lime-400">ARAÇ ALIM HİZMETİ</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            81 İlde kazalı, hasarlı, pert ve hurda araç alımı. Size en yakın şehri seçin, anında teklif alın.
          </p>

          <div className="flex items-center justify-center gap-4 text-lg">
            <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Ücretsiz Çekici</span>
            <span className="text-lime-400">•</span>
            <span>Anında Değerlendirme</span>
            <span className="text-lime-400">•</span>
            <span>En Yüksek Fiyat</span>
          </div>
        </div>
      </section>

      {/* Main Cities - Featured */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            BAŞLICA <span className="text-purple-600">ŞEHİRLER</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {allCities.map((city) => (
              <Link
                key={city.id}
                href={`/sehirler/${city.slug}`}
                className="group bg-gradient-to-br from-purple-600 to-fuchsia-600 p-8 text-white hover:from-purple-700 hover:to-fuchsia-700 transition-all transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{city.name === 'İstanbul' ? '🏙️' : city.name === 'Ankara' ? '🏛️' : '🌊'}</div>
                  <h3 className="text-3xl font-black mb-2">{city.name}</h3>
                  <div className="text-lime-400 text-sm font-bold mb-4">
                    {city.cityInfo.coverage.length}+ İlçe Hizmeti
                  </div>
                  <div className="border-t border-white/20 pt-4 mt-4">
                    <div className="text-sm mb-2">Nüfus: {city.cityInfo.population}</div>
                    <div className="text-sm">Yanıt Süresi: {city.cityInfo.responseTime}</div>
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-2 text-lime-400 font-bold group-hover:gap-4 transition-all">
                    <span>DETAYLI BİLGİ</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-4">
              🚀 Yakında daha fazla şehir eklenecek!
            </p>
            <p className="text-gray-600">
              Şu anda İstanbul, Ankara ve İzmir'de hizmet veriyoruz. Diğer şehirler için:
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Cities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            YAKINDA HİZMETE AÇILACAK ŞEHİRLER
          </h2>

          <div className="bg-white p-8 border-l-4 border-purple-600 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                  className="flex items-center gap-2 p-3 bg-gray-50 border-l-2 border-lime-400"
                >
                  <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-bold text-gray-700">{city}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p className="font-bold">
                Bu şehirlerden hizmet almak ister misiniz?
              </p>
              <p className="mt-2">
                Hemen arayın, en kısa sürede hizmete açalım! 📞
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
          <h2 className="text-4xl font-black text-center mb-12 text-gray-900">
            TÜRKİYE GENELİ <span className="text-purple-600">HİZMET KAPSAMI</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border-l-4 border-lime-400">
              <h3 className="text-2xl font-black mb-4 text-gray-900">7 Bölge</h3>
              <ul className="space-y-2">
                {regions.map((region, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-bold text-gray-700">{region.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-black mb-4 text-gray-900">81 İl</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🚚</span>
                  <span>Her ile ücretsiz çekici</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>24 saat içinde ekspertiz</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <span>En yüksek fiyat garantisi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">📄</span>
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