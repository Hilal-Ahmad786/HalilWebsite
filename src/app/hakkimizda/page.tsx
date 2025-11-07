// ===== FILE: src/app/hakkimizda/page.tsx =====

import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Hakkımızda - Premium Auto | Türkiye\'nin En Güvenilir Araç Alım Merkezi',
  description: '20+ yıl tecrübe, 100.000+ mutlu müşteri. Premium Auto olarak kazalı, hasarlı, pert ve hurda araç alımında Türkiye\'nin lider firmasıyız.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <div className="inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 border-lime-400">
            <span className="font-black text-sm tracking-widest">HAKKIMIZDA</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            TÜRKİYE'NİN
            <span className="block text-lime-400">EN GÜVENİLİR FİRMASI</span>
          </h1>
          
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            20+ yıldır kazalı, hasarlı, pert ve hurda araç alımında öncü firma
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat, index) => (
              <div key={index}>
                <div className="text-6xl font-black mb-2 text-lime-400">{stat.value}</div>
                <div className="text-sm font-bold uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            BİZİM <span className="text-purple-600">HİKAYEMİZ</span>
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              <strong className="text-gray-900">Premium Auto</strong>, 2000 yılından bu yana Türkiye'nin dört bir yanında kazalı, hasarlı, pert ve hurda araç alım-satım hizmeti vermektedir. 20 yılı aşkın tecrübemiz ve 100.000'den fazla mutlu müşterimizle sektörün öncü firmalarından biriyiz.
            </p>

            <p>
              Müşteri memnuniyetini her şeyin üstünde tutan yaklaşımımız, şeffaf fiyatlandırma politikamız ve profesyonel ekibimizle <strong className="text-gray-900">Türkiye'nin en güvenilir araç alım merkezi</strong> olmayı başardık.
            </p>

            <p>
              İstanbul, Ankara, İzmir başta olmak üzere Türkiye'nin 81 ilinde hizmet vermekteyiz. Uzman ekibimiz, 7/24 müşteri hizmetleri, ücretsiz çekici hizmetimiz ve aynı gün ödeme garantimizle yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            DEĞERLERİMİZ
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 border-l-4 border-lime-400 shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">Güven</h3>
              <p className="text-gray-600">
                Şeffaf ve dürüst fiyatlandırma ile müşterilerimizin güvenini kazanıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-purple-600 shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">Hız</h3>
              <p className="text-gray-600">
                30 dakikada değerlendirme, aynı gün ödeme ile zamandan tasarruf sağlıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-fuchsia-600 shadow-lg">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-black mb-3 text-gray-900">Profesyonellik</h3>
              <p className="text-gray-600">
                20+ yıllık tecrübe ve uzman kadromuzla profesyonel hizmet sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-5xl font-black text-center mb-12 text-gray-900">
            NEDEN <span className="text-purple-600">PREMIUM AUTO?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 border-l-4 border-lime-400">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="BİZİMLE ÇALIŞIN"
        subtitle="20 yıllık tecrübemizden faydalanın, en yüksek fiyatı alın"
        variant="lime"
      />
    </div>
  );
}