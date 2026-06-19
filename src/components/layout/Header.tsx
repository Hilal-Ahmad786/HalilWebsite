'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Phone, Menu } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { mainNav } from '@/data/navigation';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Button from '@/components/shared/Button';
import MobileNavigation from '@/components/layout/MobileNavigation';
import { cn } from '@/lib/cn';

const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Merhaba, aracım için teklif almak istiyorum.'
)}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-navy-900 text-white transition-shadow',
        scrolled && 'shadow-[0_6px_24px_rgba(7,20,38,0.35)]'
      )}
    >
      <div className="container-page flex h-[70px] items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Hasar Park ana sayfa">
          <Image src="/logo.png" alt="Hasar Park" width={176} height={56} className="h-12 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Ana menü">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  'relative inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[14.5px] font-semibold transition-colors',
                  isActive(item.href) ? 'text-brand-green' : 'text-white hover:text-brand-green'
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />}
                {isActive(item.href) && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-brand-green" />
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-2xl border border-line bg-white p-2 opacity-0 shadow-soft-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-xl px-3 py-2.5 hover:bg-surface-alt transition-colors"
                    >
                      <span className="block text-[14px] font-semibold text-ink">{c.label}</span>
                      {c.desc && <span className="block text-[12px] text-ink-muted">{c.desc}</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Button
            href={waHref}
            external
            variant="whatsapp"
            size="sm"
            icon={WhatsAppIcon}
            onClick={() => {
              trackWhatsAppClick('header');
              trackCTAClick('WhatsApp', 'header');
            }}
          >
            WhatsApp
          </Button>
          <Button
            href={`tel:${siteConfig.phone}`}
            variant="primary"
            size="sm"
            icon={Phone}
            onClick={() => {
              trackPhoneClick('header');
              trackCTAClick('Phone', 'header');
            }}
          >
            Hemen Ara
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={() => trackPhoneClick('header-mobile')}
            aria-label="Hemen ara"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-white"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
    </header>
  );
}
