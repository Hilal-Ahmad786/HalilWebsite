'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { trackCTAClick } from '@/lib/analytics';

export default function ServicesGrid() {
  const handleServiceClick = (serviceName: string) => {
    trackCTAClick(`Service Card - ${serviceName}`, 'services-grid');
  };

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block bg-indigo-500/10 text-indigo-600 px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 rounded-full">
            <span className="font-semibold text-xs sm:text-sm">Hizmetlerimiz</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Hangi Araçları
            <span className="block text-indigo-600">Satın Alıyoruz?</span>
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
                border: 'border-emerald-200',
                bg: 'bg-emerald-50',
                text: 'text-emerald-600',
                hover: 'hover:border-emerald-300',
                button: 'bg-emerald-500 text-white hover:bg-emerald-600',
              },
              purple: {
                border: 'border-indigo-200',
                bg: 'bg-indigo-50',
                text: 'text-indigo-600',
                hover: 'hover:border-indigo-300',
                button: 'bg-indigo-500 text-white hover:bg-indigo-600',
              },
              fuchsia: {
                border: 'border-violet-200',
                bg: 'bg-violet-50',
                text: 'text-violet-600',
                hover: 'hover:border-violet-300',
                button: 'bg-violet-500 text-white hover:bg-violet-600',
              },
            };

            const colors = colorClasses[service.color as keyof typeof colorClasses] || colorClasses.purple;

            return (
              <div
                key={service.id}
                className={`group bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border ${colors.border} ${colors.hover} shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`text-4xl sm:text-6xl mb-3 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                  {service.shortDesc}
                </p>

                {/* Features List - Hidden on mobile */}
                <ul className="hidden sm:block space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className={`w-4 h-4 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>En yüksek fiyat</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className={`w-4 h-4 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Anında değerleme</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className={`w-4 h-4 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ücretsiz çekici</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/${service.slug}`}
                  onClick={() => handleServiceClick(service.title)}
                  className={`block w-full ${colors.button} px-3 py-2 sm:px-6 sm:py-3 font-semibold text-center text-xs sm:text-base rounded-lg sm:rounded-xl transition-all duration-300`}
                >
                  Detay Al
                </Link>

                {/* Hover Accent - Hidden on mobile */}
                <div className="hidden sm:block mt-4 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
                    <span>Hemen teklif al</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
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