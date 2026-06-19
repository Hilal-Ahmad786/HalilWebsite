import { Award, Users, Headphones, ShieldCheck, type LucideIcon } from 'lucide-react';
import Container from '@/components/shared/Container';
import { siteConfig } from '@/config/site';

const icons: LucideIcon[] = [Award, Users, Headphones, ShieldCheck];

export default function StatsStrip() {
  return (
    <Container className="relative z-20 -mt-6 pb-2 sm:-mt-8">
      <div className="grid grid-cols-2 divide-line rounded-2xl border border-line bg-white shadow-soft sm:grid-cols-4 sm:divide-x">
        {siteConfig.stats.map((stat, i) => {
          const Icon = icons[i] ?? Award;
          return (
            <div key={stat.label} className="flex items-center gap-3 px-4 py-5 sm:justify-center sm:px-3">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="text-[20px] font-extrabold leading-none text-ink">{stat.value}</div>
                <div className="mt-1 text-[12px] font-medium text-ink-muted">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
