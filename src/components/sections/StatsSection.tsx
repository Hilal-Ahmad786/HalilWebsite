import { siteConfig } from '@/config/site';

export default function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-gray-100 bg-gray-50 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-lg"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-wide text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
