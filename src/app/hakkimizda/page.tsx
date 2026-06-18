import SectionLabel from "@/components/ui/SectionLabel";
// ===== FILE: src/app/hakkimizda/page.tsx =====

import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/ui/TrustBadges';
import SocialProof from '@/components/ui/SocialProof';
import { ModernIcon } from '@/components/ui/Icons';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export const metadata: Metadata = {
  title: 'Hakkımızda - Hasar Park | Türkiye\'nin En Güvenilir Araç Alım Merkezi',
  description: '7+ yıl tecrübe, 100.000+ mutlu müşteri. Hasar Park olarak kazalı, hasarlı, pert ve hurda araç alımında Türkiye\'nin lider firmasıyız.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero - Matching Homepage Style */}
      <section className="relative min-h-[86svh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1F3A] via-[#252B4A] to-[#1A1F3A] pt-40 md:pt-44 pb-16">
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
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-emerald-500/15 to-transparent transform skew-x-12"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-8 rounded-full">
                <span className="font-semibold text-sm tracking-wide">HAKKIMIZDA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Türkiye'nin
                <span className="block text-lime-400">En Güvenilir Firması</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-xl">
                7+ yıldır kazalı, hasarlı, pert ve hurda araç alımında öncü firma.
                100.000+ mutlu müşteri ile Türkiye'nin lideriyiz.
              </p>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {siteConfig.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/8 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-1 border border-white/10"
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

        <ScrollIndicator />
      </section>

      {/* Trust Badges */}
      <section id="sayfa-icerigi" className="py-10 bg-gray-50 border-b border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-6">
          <TrustBadges variant="light" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <SectionLabel>HİKAYEMİZ</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Bizim <span className="text-emerald-600">Hikayemiz</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              <strong className="text-gray-900">Hasar Park</strong>, 2018 yılından bu yana Türkiye'nin dört bir yanında kazalı, hasarlı, pert ve hurda araç alım-satım hizmeti vermektedir. 7 yılı aşkın tecrübemiz ve 100.000'den fazla mutlu müşterimizle sektörün öncü firmalarından biriyiz.
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
          <div className="text-center mb-12">
            <SectionLabel>DEĞERLERİMİZ</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Temel Değerlerimiz
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 overflow-visible">
                <ModernIcon name="garanti" className="w-12 h-12 scale-125" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Güven</h3>
              <p className="text-gray-600">
                Şeffaf ve dürüst fiyatlandırma ile müşterilerimizin güvenini kazanıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 overflow-visible">
                <ModernIcon name="anında" className="w-12 h-12 scale-125" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hız</h3>
              <p className="text-gray-600">
                30 dakikada değerlendirme, aynı gün ödeme ile zamandan tasarruf sağlıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 overflow-visible">
                <ModernIcon name="tecrübe" className="w-12 h-12 scale-125" strokeWidth={2.25} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Profesyonellik</h3>
              <p className="text-gray-600">
                7+ yıllık tecrübe ve uzman kadromuzla profesyonel hizmet sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <SectionLabel>AVANTAJLARIMIZ</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Neden <span className="text-emerald-600">Hasar Park?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 overflow-visible">
                  <ModernIcon name={feature.icon} label={feature.title} className="w-11 h-11 scale-125" strokeWidth={2.25} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
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
        subtitle="7 yıllık tecrübemizden faydalanın, en yüksek fiyatı alın"
        variant="lime"
      />
    </div>
  );
}
