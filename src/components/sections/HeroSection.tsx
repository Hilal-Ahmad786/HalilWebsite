'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import SocialProof from '@/components/ui/SocialProof';
import { ModernIcon, PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';
import ScrollIndicator from '@/components/ui/ScrollIndicator';

export default function HeroSection() {
  const handlePhoneClick = () => {
    trackPhoneClick('hero-section');
    trackCTAClick('Hero Phone CTA', 'hero');
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero-section');
    trackCTAClick('Hero WhatsApp CTA', 'hero');
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        'Merhaba Hasar Park, aracım için teklif almak istiyorum.'
      )}`,
      '_blank'
    );
  };

  return (
    <section className="relative min-h-[86svh] flex items-center justify-center overflow-hidden pt-40 md:pt-44 pb-16" style={{ background: 'linear-gradient(135deg, #1A1F3A 0%, #252B4A 50%, #1A1F3A 100%)' }}>
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
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-emerald-500/10 to-transparent transform skew-x-12"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-block bg-emerald-500/15 text-emerald-400 px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 rounded-full">
              <span className="font-semibold text-xs sm:text-sm tracking-wide">
                TÜRKİYE'NİN ARAÇ ALIM MERKEZİ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Aracınız
              <span className="block text-lime-400">Nakde Dönsün</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-300 font-medium">
              Kazalı • Hasarlı • Pert • Hurda
            </p>

            <p className="text-sm sm:text-lg mb-8 sm:mb-12 text-gray-400 leading-relaxed max-w-xl">
              Anında değerlendirme, en yüksek fiyat garantisi ve 30 dakika içinde teklif.
              Ücretsiz çekici ve tüm evraklar bizden!
            </p>

            {/* CTA Buttons - PRIMARY CONVERSION */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
              {/* Phone CTA - Orange gradient */}
              <button
                onClick={handlePhoneClick}
                className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 sm:px-8 sm:py-5 font-semibold text-base sm:text-xl rounded-xl sm:rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 overflow-hidden shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
              >
                <PhoneIcon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
                <span>Hemen Ara</span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shine"></div>
              </button>

              {/* WhatsApp CTA - Green */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white px-6 py-4 sm:px-8 sm:py-5 font-semibold text-base sm:text-xl rounded-xl sm:rounded-2xl hover:bg-[#1da851] transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Rating + Trust Strip - Social proof at the decision point */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="flex" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm sm:text-base font-bold text-white">4.9/5</span>
              </div>
              <span className="text-sm sm:text-base text-gray-300">
                <span className="font-semibold text-white">100.000+</span> memnun müşteri
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Ortalama yanıt: 5 dakika
              </span>
            </div>

            {/* Phone Number - Always Visible */}
            <div className="flex items-center gap-3 sm:gap-4 text-orange-400">
              <PhoneIcon className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth={2} />
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhoneClick}
                className="text-xl sm:text-2xl md:text-3xl font-bold hover:text-orange-300 transition"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {siteConfig.stats.map((stat, index) => (


              <div
                key={index}
                className="bg-white/8 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-1 border border-white/10"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
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

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="text-white p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <ModernIcon name={feature.icon} label={feature.title} className="h-5 w-5" />
                </div>
                <div className="font-semibold text-base mb-1">{feature.title}</div>
                <div className="text-sm text-gray-400">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator targetId="anasayfa-icerigi" />
    </section>
  );
}
