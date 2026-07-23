'use client';

import { Phone } from 'lucide-react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { trackPhoneClick } from '@/lib/analytics';
import IconBox from '@/components/shared/IconBox';
import { benefits } from '@/data/homeContent';
import { siteConfig } from '@/config/site';

export default function TrustBenefitsSection() {
  return (
    <section className="section bg-surface-green">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.7fr] lg:items-start">
        {/* Intro card */}
        <div className="rounded-2xl border border-line bg-white p-7 shadow-soft">
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-7 bg-brand-purple/60" aria-hidden="true" />
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-purple">Neden Hasar Park</span>
          </div>
          <h2 className="font-extrabold leading-[1.15] text-[clamp(26px,2.6vw,36px)] text-ink">
            Güvenilir Süreç,<br />
            <span className="text-brand-green-dark">Hızlı Nakit</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Aracınızı satarken her adımı baştan netleştiriyoruz: teklif, ücretsiz çekici, noter ve
            ödeme. Sürpriz yok, gizli masraf yok.
          </p>
          <Button href={`tel:${siteConfig.phone}`} onClick={() => trackPhoneClick('trust-benefits')} variant="primary" icon={Phone} className="mt-6">
            Hemen Ara
          </Button>
        </div>

        {/* Benefit cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40"
            >
              <IconBox icon={b.icon} tone="green" size="lg" />
              <h3 className="mt-4 text-[16px] font-bold text-ink">{b.title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{b.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
