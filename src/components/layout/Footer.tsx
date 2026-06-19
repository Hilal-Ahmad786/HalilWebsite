import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getAllCities } from '@/data/cities';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.41-10.4a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  );
}

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hizmetler', href: '/hizmetler' },
  { label: 'Şehirler', href: '/sehirler' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'İletişim', href: '/iletisim' },
];

const legalLinks = [
  { label: 'KVKK', href: '/kvkk' },
  { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
  { label: 'Kullanım Şartları', href: '/kullanim-sartlari' },
];

export default function Footer() {
  const cities = getAllCities().slice(0, 5);
  const year = 2026;

  return (
    <footer className="bg-navy-900 text-white/75">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="Hasar Park" width={176} height={56} className="h-12 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-white/65">
              Kazalı, hasarlı, pert ve hurda araç alımında Türkiye geneline hizmet veren güvenilir
              merkez. 7/24 hizmetinizdeyiz.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-brand-green hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
            <div className="mt-4 flex gap-2.5">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-green hover:text-navy-950 transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-green hover:text-navy-950 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <FooterCol title="Hızlı Linkler" links={quickLinks} />

          {/* Services */}
          <FooterCol
            title="Hizmetlerimiz"
            links={siteConfig.services.map((s) => ({ label: s.title, href: `/${s.slug}` }))}
          />

          {/* Cities + contact */}
          <div>
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white">Popüler Şehirler</h3>
            <ul className="space-y-2.5 text-[14px]">
              {cities.map((c) => (
                <li key={c.id}>
                  <Link href={`/sehirler/${c.slug}`} className="hover:text-brand-green transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sehirler" className="font-semibold text-brand-green hover:text-white transition-colors">
                  Tüm Şehirler →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact strip */}
        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 text-[14px] sm:grid-cols-3">
          <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 hover:text-brand-green transition-colors">
            <Phone className="h-4 w-4 text-brand-green" aria-hidden="true" /> {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-brand-green transition-colors">
            <Mail className="h-4 w-4 text-brand-green" aria-hidden="true" /> {siteConfig.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-green" aria-hidden="true" /> 7/24 Hizmetinizdeyiz
          </span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-[13px] text-white/55 sm:flex-row">
          <p>© {year} Hasar Park. Tüm hakları saklıdır.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Yasal">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-brand-green transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white">{title}</h3>
      <ul className="space-y-2.5 text-[14px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-brand-green transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
