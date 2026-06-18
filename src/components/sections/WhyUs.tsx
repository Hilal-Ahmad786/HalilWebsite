'use client';

import { siteConfig } from '@/config/site';
import { ModernIcon } from '@/components/ui/Icons';
import SectionLabel from '@/components/ui/SectionLabel';

export default function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Neden Hasar Park?</SectionLabel>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            6 Neden
            <span className="block text-emerald-600">Bizi Tercih Etmelisiniz</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 overflow-visible">
                <ModernIcon name={feature.icon} label={feature.title} className="h-12 w-12 scale-125" strokeWidth={2.25} />
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
