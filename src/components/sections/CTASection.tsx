'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';

interface CTASectionProps {
  title: string;
  subtitle: string;
  variant?: 'urgent' | 'dark' | 'lime';
}

export default function CTASection({ title, subtitle, variant = 'urgent' }: CTASectionProps) {
  const handlePhoneClick = (location: string) => {
    trackPhoneClick(location);
    trackCTAClick(`CTA Section Phone - ${variant}`, location);
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = (location: string) => {
    trackWhatsAppClick(location);
    trackCTAClick(`CTA Section WhatsApp - ${variant}`, location);
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
        'Merhaba Premium Auto, aracım için teklif almak istiyorum.'
      )}`,
      '_blank'
    );
  };

  // Variant styles
  const variantStyles = {
    urgent: {
      container: 'bg-gradient-to-r from-purple-600 to-fuchsia-600',
      badge: 'bg-lime-400/20 text-lime-400 border-lime-400',
      title: 'text-white',
      subtitle: 'text-purple-100',
    },
    dark: {
      container: 'bg-gray-900',
      badge: 'bg-purple-600/20 text-purple-400 border-purple-400',
      title: 'text-white',
      subtitle: 'text-gray-400',
    },
    lime: {
      container: 'bg-lime-400',
      badge: 'bg-gray-900/20 text-gray-900 border-gray-900',
      title: 'text-gray-900',
      subtitle: 'text-gray-800',
    },
  };

  const styles = variantStyles[variant];

  return (
    <section className={`py-20 ${styles.container} relative overflow-hidden`}>
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
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-br from-black/20 to-transparent transform -skew-x-12"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className={`inline-block ${styles.badge} px-6 py-3 mb-8 border-2`}>
            <span className="font-black text-sm tracking-widest flex items-center gap-2">
              <span className="animate-pulse">🔥</span>
              {variant === 'urgent' && 'HEMEN ARAYIN'}
              {variant === 'dark' && 'EN YÜKSEK FİYAT'}
              {variant === 'lime' && 'BUGÜN ÖZEL'}
            </span>
          </div>

          {/* Title */}
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight ${styles.title}`}>
            {title}
          </h2>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 font-bold ${styles.subtitle}`}>
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            {/* Phone Button */}
            <button
              onClick={() => handlePhoneClick(`cta-section-${variant}`)}
              className={`group relative px-12 py-6 font-black text-2xl tracking-wider transition-all duration-300 flex items-center gap-4 overflow-hidden shadow-2xl transform hover:scale-105 ${variant === 'lime'
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-lime-400 text-gray-900 hover:bg-lime-300'
                }`}
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

            {/* WhatsApp Button */}
            <button
              onClick={() => handleWhatsAppClick(`cta-section-${variant}`)}
              className={`group relative px-12 py-6 font-black text-2xl tracking-wider transition-all duration-300 flex items-center gap-4 border-4 ${variant === 'lime'
                ? 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                : 'border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900'
                }`}
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WHATSAPP</span>
            </button>
          </div>

          {/* Phone Number Display */}
          <div className={`flex items-center justify-center gap-4 ${styles.subtitle}`}>
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

            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => handlePhoneClick(`cta-section-${variant}-text`)}
              className={`text-3xl md:text-4xl font-black hover:opacity-80 transition ${variant === 'lime' ? 'text-gray-900' : 'text-lime-400'
                }`}
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}