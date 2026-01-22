'use client';

import { siteConfig } from '@/config/site';

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-600 px-6 py-3 mb-6 rounded-full">
            <span className="font-bold text-sm tracking-wide">NEDEN HASAR PARK?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            6 Neden
            <span className="block text-indigo-600">Bizi Tercih Etmelisiniz</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}