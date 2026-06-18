'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { trackCTAClick } from '@/lib/analytics';
import { ModernIcon } from '@/components/ui/Icons';
import SectionLabel from '@/components/ui/SectionLabel';

// Real damage photos already in /public/images, keyed by service id
const serviceImages: Record<string, string> = {
  kazali: '/images/kazali-arac.png',
  hasarli: '/images/hasarli-arac.png',
  pert: '/images/pert-arac.png',
  hurda: '/images/hurda-arac.png',
};

export default function ServicesGrid() {
  const handleServiceClick = (serviceName: string) => {
    trackCTAClick(`Service Card - ${serviceName}`, 'services-grid');
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <SectionLabel>Hizmetlerimiz</SectionLabel>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Hangi Araçları
            <span className="block text-emerald-600">Satın Alıyoruz?</span>
          </h2>

          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Tüm araç türleri için en yüksek fiyat garantisi ve anında ödeme
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {siteConfig.services.map((service, index) => {
            const colorClasses = {
              lime: {
                border: 'border-gray-200/80',
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                hover: 'hover:border-emerald-300',
                button: 'bg-emerald-500 text-white hover:bg-emerald-600',
              },
              purple: {
                border: 'border-gray-200/80',
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                hover: 'hover:border-emerald-300',
                button: 'bg-emerald-500 text-white hover:bg-emerald-600',
              },
              fuchsia: {
                border: 'border-gray-200/80',
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                hover: 'hover:border-emerald-300',
                button: 'bg-emerald-500 text-white hover:bg-emerald-600',
              },
            };

            const colors = colorClasses[service.color as keyof typeof colorClasses] || colorClasses.purple;

            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl border ${colors.border} ${colors.hover} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col`}
              >
                {/* Real damage photo */}
                <div className="relative h-32 sm:h-44 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={serviceImages[service.id] ?? '/images/kazali-arac.png'}
                    alt={`${service.title} - Hasar Park`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-gray-900/5 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white/95 text-emerald-600 shadow-sm overflow-visible">
                    <ModernIcon name={service.icon} label={service.title} className="h-7 w-7 sm:h-9 sm:w-9 scale-110" strokeWidth={2.25} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                    {service.shortDesc}
                  </p>

                  {/* Features List - Hidden on mobile */}
                  <ul className="hidden sm:block space-y-2 mb-5">
                    {['En yüksek fiyat', 'Anında değerleme', 'Ücretsiz çekici'].map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className={`w-4 h-4 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={`/${service.slug}`}
                    onClick={() => handleServiceClick(service.title)}
                    className={`mt-auto block w-full ${colors.button} px-3 py-2 sm:px-5 sm:py-3 font-semibold text-center text-xs sm:text-base rounded-xl transition-all duration-300`}
                  >
                    Detay Al
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Aracınız hangi kategoride? Hemen arayın, anında teklif alın!
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => trackCTAClick('Services Grid Bottom Phone', 'services-grid')}
            className="inline-flex items-center gap-2 sm:gap-3 bg-emerald-500 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold rounded-xl hover:bg-emerald-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-500/25"
          >
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.3a2 2 0 0 1 2.1-.4c.9.3 1.7.5 2.6.7A2 2 0 0 1 22 16.9z" />
            </svg>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
