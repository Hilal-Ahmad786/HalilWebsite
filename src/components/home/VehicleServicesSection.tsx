import Link from 'next/link';
import { Car, Wrench, AlertTriangle, Recycle, Check, ArrowRight, type LucideIcon } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import AssetImage from '@/components/shared/AssetImage';
import { siteConfig } from '@/config/site';
import { serviceImages } from '@/data/homeContent';

const serviceIcons: Record<string, LucideIcon> = {
  kazali: Car,
  hasarli: Wrench,
  pert: AlertTriangle,
  hurda: Recycle,
};

const bullets = ['En yüksek fiyat', 'Anında değerlendirme', 'Ücretsiz çekici'];

export default function VehicleServicesSection() {
  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeader eyebrow="Hizmetlerimiz" title="Hangi Araçları" highlight="Satın Alıyoruz?" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.map((service) => {
            const Icon = serviceIcons[service.id] ?? Car;
            return (
              <div
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-green/40"
              >
                <div className="relative">
                  <AssetImage
                    src={serviceImages[service.id] ?? serviceImages.kazali}
                    alt={`${service.title} - Hasar Park`}
                    width={400}
                    height={300}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    rounded="rounded-none"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-green-dark shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[18px] font-bold text-ink">{service.title}</h3>
                  <p className="mt-1 text-[14px] text-ink-soft">{service.shortDesc}</p>

                  <ul className="mt-4 space-y-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[13.5px] text-ink-soft">
                        <Check className="h-4 w-4 flex-shrink-0 text-brand-green-dark" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${service.slug}`}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-[11px] border border-line py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-brand-green hover:text-brand-green-dark"
                  >
                    Detay Al
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
