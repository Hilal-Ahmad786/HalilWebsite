'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface TrackedContactLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Which conversion event to fire on click */
  kind: 'phone' | 'whatsapp';
  /** Placement label for GTM/reporting (e.g. "topbar", "footer-cta") */
  location: string;
  children: ReactNode;
}

/**
 * Drop-in replacement for a raw <a href="tel:..."> / wa.me link that fires the
 * conversion tracking (GTM dataLayer + first-party beacon + Ads/Pixel when
 * configured). Usable from server components — this is a small client island.
 */
export default function TrackedContactLink({
  kind,
  location,
  children,
  ...rest
}: TrackedContactLinkProps) {
  const handleClick = () =>
    kind === 'phone' ? trackPhoneClick(location) : trackWhatsAppClick(location);

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  );
}
