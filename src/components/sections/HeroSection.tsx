'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import SocialProof from '@/components/ui/SocialProof';
import { PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';

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
              <span className="block text-emerald-400">Nakde Dönsün</span>
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
                className="bg-white/8 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-2 border border-white/10"
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
                <div className="text-3xl mb-3">{feature.icon}</div>
                <div className="font-semibold text-base mb-1">{feature.title}</div>
                <div className="text-sm text-gray-400">{feature.description}</div>
              </div>
            ))}
          </div>
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
  );
}