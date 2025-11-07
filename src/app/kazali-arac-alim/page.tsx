import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyUs from '@/components/sections/WhyUs';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/FAQSection';

export const metadata: Metadata = {
  title: 'Kazalı Araç Alımı | Anında Değerlendirme & En Yüksek Fiyat - Premium Auto',
  description:
    'Kazalı araç mı satmak istiyorsunuz? Premium Auto ile 30 dakikada teklif alın, en yüksek fiyat garantisi. Ücretsiz çekici, anında ödeme. 0 (555) 123 45 67',
  keywords: [
    'kazalı araç alan',
    'kazalı araç satmak',
    'kazalı araç alım',
    'kazalı oto alan',
    'kaza geçirmiş araç',
    'premium auto',
  ],
  openGraph: {
    title: 'Kazalı Araç Alımı - En Yüksek Fiyat Garantisi',
    description: 'Kazalı aracınız için 30 dakikada teklif alın. Ücretsiz çekici ve anında ödeme.',
    images: ['/images/kazali-arac.webp'],
  },
};

export default function KazaliAracPage() {
  return (
    <div className="kazali-arac-page">
      {/* Hero Section with Custom Content */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <div className="inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 border-lime-400">
            <span className="font-black text-sm tracking-widest">🚗 KAZALI ARAÇ ALIMI</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
            KAZALI ARACINIZ
            <span className="block text-lime-400">EN YÜKSEK FİYATA</span>
          </h1>

          <p className="text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Kaza geçirmiş her türlü araç için anında değerlendirme. 30 dakikada teklif, ücretsiz çekici, anında ödeme.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="tel:+905551234567"
              className="bg-lime-400 text-gray-900 px-12 py-6 font-black text-2xl hover:bg-lime-300 transition flex items-center justify-center gap-4"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              HEMEN ARA
            </a>
            <a
              href="https://wa.me/905551234567"
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

          <div className="text-lime-400 text-3xl font-black">
            📞 0 (555) 123 45 67
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            KAZALI ARAÇ ALIMINDA <span className="text-purple-600">NEDEN BİZ?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-lime-400 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-black mb-3">30 Dakikada Teklif</h3>
              <p className="text-gray-600">Aracınızın fotoğraflarını gönderin, 30 dakika içinde en yüksek teklifi alın.</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-purple-600 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-black mb-3">En Yüksek Fiyat</h3>
              <p className="text-gray-600">Piyasa araştırması ile kazalı aracınız için en iyi fiyatı garantiliyoruz.</p>
            </div>

            <div className="bg-white p-8 border-l-4 border-fuchsia-600 shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-black mb-3">Ücretsiz Çekici</h3>
              <p className="text-gray-600">Kazalı aracınızı bulunduğu yerden ücretsiz olarak alırız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="KAZALI ARACINIZI HEMEN SATIN"
        subtitle="Tek bir telefonla başlayın, 24 saat içinde paranızı alın"
        variant="urgent"
      />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Final CTA */}
      <CTASection
        title="HEMEN ARAYIN - ANINDA TEKLİF"
        subtitle="Kazalı aracınız için Türkiye'nin en yüksek fiyatını alın"
        variant="lime"
      />

      {/* FAQ */}
      <FAQSection />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Kazalı Araç Alımı',
            provider: {
              '@type': 'AutomotiveBusiness',
              name: 'Premium Auto',
              telephone: '+905551234567',
            },
            areaServed: 'TR',
            description:
              'Kazalı araç alımı hizmeti. 30 dakikada teklif, en yüksek fiyat garantisi, ücretsiz çekici.',
          }),
        }}
      />
    </div>
  );
}