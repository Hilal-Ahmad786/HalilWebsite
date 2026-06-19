import type { ComponentType, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';

type IconType = ComponentType<{ className?: string }>;

type Variant = 'primary' | 'purple' | 'navy' | 'outline' | 'ghost' | 'whatsapp';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: IconType;
  iconRight?: boolean;
  external?: boolean;
  className?: string;
  'aria-label'?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-[11px] transition-all duration-200 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-purple ' +
  'disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap';

// Lime is too light for white text (WCAG), so the green button uses navy text.
const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-brand-green to-brand-green-dark text-navy-950 hover:brightness-[1.05] shadow-soft',
  purple:
    'bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white hover:brightness-110 shadow-soft',
  navy: 'bg-navy-900 text-white hover:bg-navy-800',
  outline: 'bg-white border border-line text-ink hover:border-brand-green hover:text-brand-green-dark',
  ghost: 'text-ink hover:bg-surface-alt',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-soft',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-12 px-6 text-base',
};

const iconSize: Record<Size, string> = { sm: 'w-4 h-4', md: 'w-[18px] h-[18px]', lg: 'w-5 h-5' };

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled,
  fullWidth,
  icon: Icon,
  iconRight = false,
  external,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);
  const iconEl = Icon ? (
    <span className="inline-flex shrink-0" aria-hidden="true">
      <Icon className={iconSize[size]} />
    </span>
  ) : null;
  const inner = (
    <>
      {!iconRight && iconEl}
      <span>{children}</span>
      {iconRight && iconEl}
    </>
  );

  if (href) {
    const isExternal = external || /^(https?:|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...rest}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {inner}
    </button>
  );
}
