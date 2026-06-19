'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { mainNav } from '@/data/navigation';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/Icons';
import Button from '@/components/shared/Button';
import { cn } from '@/lib/cn';

interface Props {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}

const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Merhaba, aracım için teklif almak istiyorum.'
)}`;

export default function MobileNavigation({ open, onClose, isActive }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const ui = (
    <div className={cn('lg:hidden', open ? 'pointer-events-auto' : 'pointer-events-none')} aria-hidden={!open}>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-[90] bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
      />
      {/* Drawer */}
      <aside
        className={cn(
          'fixed right-0 top-0 z-[100] flex h-dvh w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 will-change-transform',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Mobil menü"
      >
        <div className="flex h-[70px] items-center justify-between border-b border-line px-5">
          <span className="text-[15px] font-extrabold text-ink">Menü</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Menüyü kapat"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink hover:bg-surface-alt"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {mainNav.map((item) => (
            <div key={item.href} className="mb-1">
              <Link
                href={item.href}
                onClick={onClose}
                className={cn(
                  'block rounded-xl px-3 py-3 text-[15px] font-bold',
                  isActive(item.href) ? 'bg-brand-green-soft text-brand-green-dark' : 'text-ink hover:bg-surface-alt'
                )}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 mt-0.5 border-l border-line pl-3">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-2 text-[14px] text-ink-soft hover:text-brand-green-dark"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="safe-area-bottom grid grid-cols-2 gap-2.5 border-t border-line p-4">
          <Button
            href={waHref}
            external
            variant="whatsapp"
            icon={WhatsAppIcon}
            onClick={() => {
              trackWhatsAppClick('mobile-menu');
              onClose();
            }}
          >
            WhatsApp
          </Button>
          <Button
            href={`tel:${siteConfig.phone}`}
            variant="primary"
            icon={Phone}
            onClick={() => {
              trackPhoneClick('mobile-menu');
              onClose();
            }}
          >
            Ara
          </Button>
        </div>
      </aside>
    </div>
  );

  return createPortal(ui, document.body);
}
