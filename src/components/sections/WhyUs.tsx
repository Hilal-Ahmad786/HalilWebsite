'use client';

import { siteConfig } from '@/config/site';

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-600/20 text-purple-600 px-6 py-3 mb-6 border-2 border-purple-600">
            <span className="font-black text-sm tracking-widest">NEDEN HASAR PARK?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            6 NEDEN
            <span className="block text-purple-600">BİZİ TERCİH ETMELİSİNİZ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 border-l-4 border-lime-400 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
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