import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  /** part of the title rendered in brand green */
  highlight?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  className?: string;
}

/** Eyebrow (purple, wide-tracked) + title with optional green highlight + subtitle. */
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={cn(isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left', 'mb-10 sm:mb-12', className)}>
      {eyebrow && (
        <div className={cn('flex items-center gap-2.5 mb-4', isCenter && 'justify-center')}>
          <span className="h-px w-7 bg-brand-purple/60" aria-hidden="true" />
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-purple">
            {eyebrow}
          </span>
          {isCenter && <span className="h-px w-7 bg-brand-purple/60" aria-hidden="true" />}
        </div>
      )}
      <h2
        className={cn(
          'font-extrabold leading-[1.15] text-[clamp(28px,3vw,40px)]',
          tone === 'dark' ? 'text-white' : 'text-ink'
        )}
      >
        {title} {highlight && <span className="text-brand-green-dark">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-[16px] leading-relaxed',
            tone === 'dark' ? 'text-white/70' : 'text-ink-soft',
            isCenter && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
