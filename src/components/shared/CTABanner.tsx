'use client';

import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';

interface CTABannerProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  whatsappMessage?: string;
  source?: string;
}

export default function CTABanner({
  title,
  highlight,
  subtitle,
  whatsappMessage = 'Merhaba Hasar Park, aracım için teklif almak istiyorum.',
  source = 'cta-banner',
}: CTABannerProps) {
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <section className="bg-surface py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-brand-purple-soft px-6 py-10 text-center shadow-soft sm:px-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border-[16px] border-brand-green/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 left-1/4 h-40 w-40 rounded-full bg-brand-purple/10 blur-2xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-extrabold leading-[1.12] text-[clamp(24px,2.6vw,34px)] text-ink">
              {title} {highlight && <span className="text-brand-green-dark">{highlight}</span>}
            </h2>
            {subtitle && <p className="mt-3 text-[15px] text-ink-soft">{subtitle}</p>}

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="primary"
                size="lg"
                icon={Phone}
                onClick={() => {
                  trackPhoneClick(source);
                  trackCTAClick('CTA Phone', source);
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
                  trackWhatsAppClick(source);
                  trackCTAClick('CTA WhatsApp', source);
                }}
              >
                WhatsApp
              </Button>
              <a href={`tel:${siteConfig.phone}`} className="text-[17px] font-extrabold text-ink hover:text-brand-green-dark sm:ml-2">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
