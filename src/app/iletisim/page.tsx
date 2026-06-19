'use client';

import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import PageHero from '@/components/shared/PageHero';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageHero
        breadcrumbs={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İletişim' }]}
        eyebrow="İletişim"
        title="Bize"
        highlight="Ulaşın"
        subtitle="7/24 müşteri hizmetleri ile her zaman yanınızdayız. Hemen arayın, anında teklif alın!"
        whatsappMessage="Merhaba, bilgi almak istiyorum."
      />

      {/* Contact methods */}
      <section className="section bg-surface">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => trackPhoneClick('contact-page')}
              className="group rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark p-7 text-center text-white shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-navy-950/10">
                <Phone className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="text-[13px] font-semibold opacity-80">Telefon</div>
              <div className="text-[20px] font-extrabold">{siteConfig.phoneDisplay}</div>
              <div className="mt-1 text-[12.5px] opacity-70">7/24 Destek</div>
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('contact-page')}
              className="group rounded-2xl bg-[#25D366] p-7 text-center text-white shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <div className="text-[13px] font-semibold opacity-90">WhatsApp</div>
              <div className="text-[20px] font-extrabold">{siteConfig.phoneDisplay}</div>
              <div className="mt-1 text-[12.5px] opacity-75">Hızlı Mesaj</div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group rounded-2xl bg-gradient-to-br from-brand-purple to-brand-purple-dark p-7 text-center text-white shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <Mail className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="text-[13px] font-semibold opacity-90">E-Posta</div>
              <div className="text-[16px] font-bold break-all">{siteConfig.email}</div>
              <div className="mt-1 text-[12.5px] opacity-75">24 Saat İçinde Yanıt</div>
            </a>
          </div>

          {/* Form */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-9">
            <SectionHeader eyebrow="İletişim Formu" title="Bize Mesaj" highlight="Gönderin" />
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Service hours */}
      <section className="section bg-surface-alt">
        <Container>
          <SectionHeader eyebrow="Hizmet Saatleri" title="Her Zaman" highlight="Yanınızdayız" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Phone, label: 'Telefon Destek', value: '7/24' },
              { icon: MessageCircle, label: 'WhatsApp', value: '7/24' },
              { icon: Clock, label: 'E-posta', value: '24 Saat' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-line bg-white p-6 text-center shadow-soft">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="text-[14px] font-semibold text-ink">{label}</div>
                <div className="text-[22px] font-extrabold text-brand-green-dark">{value}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[15px] text-ink-soft">
            Hafta sonu ve resmi tatillerde de hizmetinizdeyiz!
          </p>
        </Container>
      </section>
    </div>
  );
}
