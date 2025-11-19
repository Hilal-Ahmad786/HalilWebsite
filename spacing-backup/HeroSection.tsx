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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-section-y pt-32">
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

      <div className="container mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-lg items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="text-white text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block bg-lime-400/20 text-lime-400 px-md py-sm mb-lg border-2 border-lime-400">
              <span className="font-black text-xs tracking-widest">
                TÜRKİYE'NİN #1 ALIM MERKEZİ
              </span>
            </div>

            {/* Main Headline - Using fluid typography */}
            <h1 className="text-6xl font-black mb-md leading-tighter">
              ARACINIZ
              <span className="block text-lime-400">NAKDE DÖNSÜN</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl mb-sm text-gray-300 font-bold">
              KAZALI • HASARLI • PERT • HURDA
            </p>

            <p className="text-base mb-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Anında değerlendirme, en yüksek fiyat garantisi ve 30 dakika içinde teklif.
              Ücretsiz çekici ve tüm evraklar bizden!
            </p>

            {/* CTA Buttons - Using consistent spacing */}
            <div className="flex flex-col sm:flex-row gap-md mb-lg justify-center lg:justify-start">
              {/* Phone CTA */}
              <button
                onClick={handlePhoneClick}
                className="group relative bg-lime-400 text-gray-900 px-button-x py-button-y font-black text-lg tracking-wider hover:bg-lime-300 transition-all duration-300 flex items-center justify-center gap-sm overflow-hidden shadow-2xl hover:shadow-lime-400/50 transform hover:scale-105 min-h-touch"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                HEMEN ARA
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:animate-shine"></div>
              </button>

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="border-4 border-lime-400 text-lime-400 px-button-x py-button-y font-black text-lg tracking-wider hover:bg-lime-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-sm shadow-2xl hover:shadow-lime-400/50 min-h-touch"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WHATSAPP
              </button>
            </div>

            {/* Phone Number - Consistent spacing */}
            <div className="flex items-center gap-sm text-lime-400 justify-center lg:justify-start">
              <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhoneClick}
                className="text-2xl font-black hover:text-lime-300 transition"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Side - Stats Cards with consistent spacing */}
          <div className="grid grid-cols-2 gap-md">
            {siteConfig.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-card border-l-4 border-lime-400 hover:bg-white/15 transition-all transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-5xl font-black text-lime-400 mb-sm leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300 font-bold tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators - Consistent spacing */}
        <div className="mt-xl pt-lg border-t border-gray-700 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md text-center">
            {siteConfig.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl mb-sm">{feature.icon}</div>
                <div className="font-bold text-base mb-xs">{feature.title}</div>
                <div className="text-xs text-gray-400">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-6 h-6 text-lime-400"
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

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        
        .group:hover .group-hover\\:animate-shine {
          animation: shine 1s;
        }
      `}</style>
    </section>
  );
}