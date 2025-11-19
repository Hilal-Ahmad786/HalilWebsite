'use client';

import { siteConfig } from '@/config/site';

export default function WhyUs() {
  return (
    <section className="py-section-y bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-xl">
          <div className="inline-block bg-purple-600/20 text-purple-600 py-3 mb-md border-2 border-purple-600">
            <span className="font-black text-sm tracking-widest">NEDEN PREMIUM AUTO?</span>
          </div>
          
          <h2 className="text-5xl font-black text-gray-900 mb-md">
            6 NEDEN
            <span className="block text-purple-600">BİZİ TERCİH ETMELİSİNİZ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-card border-l-4 border-lime-400 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-md">{feature.icon}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-sm">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}