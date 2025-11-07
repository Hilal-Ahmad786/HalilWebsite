'use client';

import { siteConfig } from '@/config/site';

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="transform hover:scale-110 transition-all duration-300"
            >
              <div className="text-6xl md:text-7xl font-black mb-3 text-lime-400">
                {stat.value}
              </div>
              <div className="text-lg font-bold tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}