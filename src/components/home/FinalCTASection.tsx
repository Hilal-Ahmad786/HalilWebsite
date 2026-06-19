'use client';

import { Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import AssetImage from '@/components/shared/AssetImage';
import { ctaImage } from '@/data/homeContent';

const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Merhaba Hasar Park, aracım için teklif almak istiyorum.'
)}`;

export default function FinalCTASection() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-brand-purple-soft px-6 py-10 shadow-soft sm:px-10 lg:py-12">
          {/* decorative curves */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border-[18px] border-brand-green/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 left-1/3 h-40 w-40 rounded-full bg-brand-purple/10 blur-2xl" aria-hidden="true" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-extrabold leading-[1.1] text-[clamp(26px,2.8vw,38px)] text-ink">
                Bugün Arayın,<br />
                <span className="text-brand-green-dark">Yarın Ödemenizi Alın!</span>
              </h2>
              <p className="mt-3 max-w-md text-[15px] text-ink-soft">
                Kazalı, hasarlı, pert veya hurda — aracınız ne durumda olursa olsun en yüksek teklifi sunuyoruz.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center [&>a]:w-full sm:[&>a]:w-auto">
                <Button
                  href={`tel:${siteConfig.phone}`}
                  variant="primary"
                  size="lg"
                  icon={Phone}
                  onClick={() => {
                    trackPhoneClick('final-cta');
                    trackCTAClick('Final CTA Phone', 'final-cta');
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
                    trackWhatsAppClick('final-cta');
                    trackCTAClick('Final CTA WhatsApp', 'final-cta');
                  }}
                >
                  WhatsApp
                </Button>
                <a href={`tel:${siteConfig.phone}`} className="text-[18px] font-extrabold text-ink hover:text-brand-green-dark sm:ml-2">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <AssetImage
                src={ctaImage}
                alt="Hasar Park ile aracını satan müşteri"
                width={460}
                height={300}
                sizes="360px"
                wrapperClassName="shadow-soft"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
