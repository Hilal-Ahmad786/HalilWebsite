'use client';

import { Phone, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Button from '@/components/shared/Button';
import Container from '@/components/shared/Container';
import AssetImage from '@/components/shared/AssetImage';
import { heroImage } from '@/data/homeContent';

const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Merhaba Hasar Park, aracım için teklif almak istiyorum.'
)}`;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface-warm">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brand-purple/10 blur-3xl" aria-hidden="true" />

      <Container className="relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-20">
        {/* Left */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-soft">
              Türkiye’nin Lider Araç Alım Merkezi
            </span>
          </div>

          <h1 className="font-extrabold leading-[1.05] text-[clamp(36px,4.2vw,56px)] text-ink">
            Aracınızı Değerinde{' '}
            <span className="text-brand-green-dark">Nakde Dönüştürün</span>
          </h1>

          <p className="mt-4 text-[15px] font-semibold uppercase tracking-wide text-brand-purple">
            Kazalı • Hasarlı • Pert • Hurda
          </p>

          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">
            Aracınızın fotoğraflarını gönderin, en yüksek fiyat teklifini 30 dakika içinde alın.
            Noterde güvenli devir ve anında ödeme.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="primary"
              size="lg"
              icon={Phone}
              onClick={() => {
                trackPhoneClick('hero');
                trackCTAClick('Hero Phone', 'hero');
              }}
            >
              Hemen Ara
            </Button>
            <Button
              href={waHref}
              external
              variant="whatsapp"
              size="lg"
              icon={WhatsAppIcon}
              onClick={() => {
                trackWhatsAppClick('hero');
                trackCTAClick('Hero WhatsApp', 'hero');
              }}
            >
              WhatsApp
            </Button>
          </div>

          {/* Rating row */}
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1.5">
              <span className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </span>
              <span className="text-[15px] font-extrabold text-ink">4.9/5</span>
            </div>
            <span className="text-[15px] text-ink-soft">
              <span className="font-bold text-ink">100.000+</span> memnun müşteri
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          {/* arcs */}
          <div className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full border-[14px] border-brand-purple/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-8 left-6 h-28 w-28 rounded-full border-[12px] border-brand-green/20" aria-hidden="true" />

          <AssetImage
            src={heroImage}
            alt="Hasarlı aracını Hasar Park üzerinden satan müşteri aracı"
            width={900}
            height={560}
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            wrapperClassName="relative z-10 shadow-soft-lg"
          />

          {/* Floating stat card */}
          <div className="absolute -bottom-5 -left-2 z-20 flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-soft-lg sm:-left-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
              <Star className="h-5 w-5 fill-current" />
            </div>
            <div>
              <div className="text-[18px] font-extrabold leading-none text-ink">100.000+</div>
              <div className="text-[12px] text-ink-muted">Memnun müşteri</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
