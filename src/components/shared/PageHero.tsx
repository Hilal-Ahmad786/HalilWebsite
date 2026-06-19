'use client';

import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import AssetImage from '@/components/shared/AssetImage';

export interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  highlight?: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  image?: { src: string; alt: string };
  showStats?: boolean;
  showCTAs?: boolean;
  whatsappMessage?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  breadcrumbs,
  image,
  showStats = false,
  showCTAs = true,
  whatsappMessage = 'Merhaba Hasar Park, aracım için teklif almak istiyorum.',
  children,
}: PageHeroProps) {
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
  const twoCol = Boolean(image);

  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-warm">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-green/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl" aria-hidden="true" />

      <Container
        className={`relative py-10 sm:py-14 ${twoCol ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12' : ''}`}
      >
        <div>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-ink-muted">
                {breadcrumbs.map((c, i) => {
                  const last = i === breadcrumbs.length - 1;
                  return (
                    <Fragment key={i}>
                      {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                      <li>
                        {c.href && !last ? (
                          <Link href={c.href} className="hover:text-brand-green-dark transition-colors">
                            {c.label}
                          </Link>
                        ) : (
                          <span className={last ? 'font-semibold text-ink' : ''}>{c.label}</span>
                        )}
                      </li>
                    </Fragment>
                  );
                })}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-soft">{eyebrow}</span>
            </div>
          )}

          <h1 className="font-extrabold leading-[1.08] text-[clamp(30px,3.6vw,48px)] text-ink">
            {title} {highlight && <span className="text-brand-green-dark">{highlight}</span>}
          </h1>

          {subtitle && <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">{subtitle}</p>}

          {showCTAs && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={`tel:${siteConfig.phone}`} variant="primary" size="lg" icon={Phone} onClick={() => trackPhoneClick('page-hero')}>
                Hemen Ara
              </Button>
              <Button href={waHref} external variant="whatsapp" size="lg" icon={WhatsAppIcon} onClick={() => trackWhatsAppClick('page-hero')}>
                WhatsApp
              </Button>
            </div>
          )}

          {showStats && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {siteConfig.stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-line bg-white px-3 py-3 text-center shadow-soft">
                  <div className="text-[20px] font-extrabold text-ink">{s.value}</div>
                  <div className="mt-0.5 text-[11px] text-ink-muted">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>

        {image && (
          <div className="relative mt-8 lg:mt-0">
            <div className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 rounded-full border-[12px] border-brand-purple/15" aria-hidden="true" />
            <AssetImage src={image.src} alt={image.alt} width={760} height={520} priority sizes="(max-width: 1024px) 100vw, 46vw" wrapperClassName="relative z-10 shadow-soft-lg" />
          </div>
        )}
      </Container>
    </section>
  );
}
