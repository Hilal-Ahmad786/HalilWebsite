'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';

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
        'Merhaba Premium Auto, aracım için teklif almak istiyorum.'
      )}`,
      '_blank'
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-32 pb-20">
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
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-purple-600/20 to-transparent transform skew-x-12"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-block bg-lime-400/20 text-lime-400 px-6 py-3 mb-8 border-2 border-lime-400">
              <span className="font-black text-sm tracking-widest">
                TÜRKİYE'NİN ARAÇ ALIM MERKEZİ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              ARACINIZ
              <span className="block text-lime-400">NAKDE DÖNSÜN</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-bold">
              KAZALI • HASARLI • PERT • HURDA
            </p>

            <p className="text-xl mb-12 text-gray-400 leading-relaxed max-w-xl">
              Anında değerlendirme, en yüksek fiyat garantisi ve 30 dakika içinde teklif.
              Ücretsiz çekici ve tüm evraklar bizden!
            </p>

            {/* CTA Buttons - PRIMARY CONVERSION */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              {/* Phone CTA - MEGA */}
              <button
                onClick={handlePhoneClick}
                className="group relative bg-lime-400 text-gray-900 px-10 py-6 font-black text-2xl tracking-wider hover:bg-lime-300 transition-all duration-300 flex items-center justify-center gap-4 overflow-hidden shadow-2xl hover:shadow-lime-400/50 transform hover:scale-105"
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6 A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9 a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4 c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
                </svg>

                <span>HEMEN ARA</span>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shine"></div>
              </button>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="border-4 border-lime-400 text-lime-400 px-10 py-6 font-black text-2xl tracking-wider hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl hover:shadow-lime-400/50"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span >WHATSAPP</span>
              </button>
            </div>

            {/* Phone Number - Always Visible */}
            <div className="flex items-center gap-4 text-lime-400">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2
           19.8 19.8 0 0 1-8.6-3.1
           19.5 19.5 0 0 1-6-6
           19.8 19.8 0 0 1-3.1-8.6
           A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7
           c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9
           a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4
           c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
              </svg>

              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhoneClick}
                className="text-3xl md:text-4xl font-black hover:text-lime-300 transition"
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
                className={`bg-white/10 backdrop-blur-sm p-6 sm:p-8 border-l-4 border-${stat.color}-400 hover:bg-white/15 transition-all transform hover:-translate-y-2`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* SAYI BOYUTLARI DAHA RESPONSIVE */}
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-${stat.color}-400 mb-3 leading-none`}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-bold tracking-wider">
                  {stat.label}
                </div>
              </div>

            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {siteConfig.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <div className="font-bold text-lg mb-1">{feature.title}</div>
                <div className="text-sm text-gray-400">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-lime-400"
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