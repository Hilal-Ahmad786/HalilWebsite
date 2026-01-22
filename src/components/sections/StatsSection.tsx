'use client';

import { siteConfig } from '@/config/site';

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="transform hover:scale-105 transition-all duration-300 p-6 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-medium text-indigo-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}