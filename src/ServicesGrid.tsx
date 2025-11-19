'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { trackCTAClick } from '@/lib/analytics';

export default function ServicesGrid() {
  const handleServiceClick = (serviceName: string) => {
    trackCTAClick(`Service Card - ${serviceName}`, 'services-grid');
  };
const ServicesGridSpacing = {
  section: "py-section-y bg-white",
  container: "container mx-auto",
  
  // Section header
  headerWrapper: "text-center mb-xl",
  badge: "inline-block bg-purple-600/20 text-purple-600 px-md py-sm mb-lg border-2 border-purple-600",
  title: "text-5xl font-black text-gray-900 mb-md",
  subtitle: "text-lg text-gray-600 max-w-3xl mx-auto font-bold",
  
  // Grid
  grid: "grid md:grid-cols-2 lg:grid-cols-4 gap-md",
  card: "group bg-white p-card border-l-4 shadow-md hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2",
  
  // Card content
  cardIcon: "text-6xl mb-md transform group-hover:scale-110 transition-transform duration-300",
  cardTitle: "text-2xl font-black text-gray-900 mb-sm leading-tight",
  cardDescription: "text-base text-gray-600 mb-md font-medium",
  
  // Bottom CTA
  bottomCTA: "mt-xl text-center",
};
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 text-purple-600 px-6 py-3 mb-6 border-2 border-purple-600">
            <span className="font-black text-sm tracking-widest">HİZMETLERİMİZ</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            HANGİ ARAÇLARI
            <span className="block text-purple-600">SATIN ALIYORUZ?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
            Tüm araç türleri için en yüksek fiyat garantisi ve anında ödeme
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => {
            const colorClasses = {
              lime: {
                border: 'border-lime-400',
                bg: 'bg-lime-400/10',
                text: 'text-lime-600',
                hover: 'hover:bg-lime-400/20',
                button: 'bg-lime-400 text-gray-900 hover:bg-lime-300',
              },
              purple: {
                border: 'border-purple-600',
                bg: 'bg-purple-600/10',
                text: 'text-purple-600',
                hover: 'hover:bg-purple-600/20',
                button: 'bg-purple-600 text-white hover:bg-purple-700',
              },
              fuchsia: {
                border: 'border-fuchsia-600',
                bg: 'bg-fuchsia-600/10',
                text: 'text-fuchsia-600',
                hover: 'hover:bg-fuchsia-600/20',
                button: 'bg-fuchsia-600 text-white hover:bg-fuchsia-700',
              },
            };

            const colors = colorClasses[service.color as keyof typeof colorClasses] || colorClasses.purple;

            return (
              <div
                key={service.id}
                className={`group bg-white p-8 border-l-4 ${colors.border} shadow-md hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-medium">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className={`w-5 h-5 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-bold">En yüksek fiyat</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className={`w-5 h-5 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-bold">Anında değerleme</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className={`w-5 h-5 ${colors.text} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="font-bold">Ücretsiz çekici</span>
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/${service.slug}`}
                  onClick={() => handleServiceClick(service.title)}
                  className={`block w-full ${colors.button} px-6 py-4 font-black text-center transition-all duration-300 transform group-hover:scale-105`}
                >
                  DETAY & TEKLİF AL
                </Link>

                {/* Hover Accent */}
                <div className={`mt-4 pt-4 border-t ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <div className="flex items-center justify-center gap-2 text-sm font-black text-gray-700">
                    <span>HEMEN TEKLİF AL</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 mb-6 font-bold">
            Aracınız hangi kategoride? Hemen arayın, anında teklif alın!
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-3 bg-lime-400 text-gray-900 px-10 py-5 text-2xl font-black hover:bg-lime-300 transition-all transform hover:scale-105 shadow-xl"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}