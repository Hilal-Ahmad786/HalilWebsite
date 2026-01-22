'use client';

import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';

export default function ProcessSteps() {
  const handlePhoneClick = () => {
    trackPhoneClick('process-steps-cta');
    trackCTAClick('Process Steps CTA', 'process-steps');
  };

  return (
    <section className="py-20 bg-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-500/15 text-emerald-400 px-6 py-3 mb-6 rounded-full">
            <span className="font-semibold text-sm">Nasıl Çalışır?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            4 Adımda
            <span className="block text-emerald-400">Nakde Çevirin</span>
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Basit, hızlı ve güvenli süreç. Aracınızı 24 saat içinde nakde çevirin.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteConfig.process.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-emerald-500 text-white flex items-center justify-center text-xl font-bold z-10 rounded-xl">
                {step.number}
              </div>

              {/* Step Card */}
              <div className="bg-white/8 backdrop-blur-sm p-8 pt-12 rounded-2xl hover:bg-white/12 transition-all transform hover:-translate-y-2 h-full border border-white/10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-emerald-400">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-emerald-400 transform group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Connector Line (Desktop) */}
              {index < siteConfig.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-500/50 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-xl font-bold">Ortalama Süre</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-1">5 dk</div>
                <div className="text-sm text-gray-400">İlk Görüşme</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-1">30 dk</div>
                <div className="text-sm text-gray-400">Değerlendirme</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-1">2 saat</div>
                <div className="text-sm text-gray-400">Noter İşlemi</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-1">Anında</div>
                <div className="text-sm text-gray-400">Ödeme</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg mb-6 text-gray-400">
            Hemen başlayın, 24 saat içinde paranız hesabınızda!
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-emerald-600 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <svg
              className="w-5 h-5"
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
            <span>Hemen Başla</span>
          </a>

          <p className="mt-6 text-emerald-400 text-base">
            {siteConfig.phoneDisplay} • 7/24 Hizmet
          </p>
        </div>
      </div>
    </section>
  );
}