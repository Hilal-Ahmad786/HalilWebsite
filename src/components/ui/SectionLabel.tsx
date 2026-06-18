import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  /** center = thin rule on both sides; left = rule on the left only */
  align?: 'center' | 'left';
  /** light surfaces use emerald-600; dark surfaces use emerald-400 */
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Editorial section eyebrow. Replaces the filled "candy pill" badge that was
 * repeated above every heading (the #1 template/AI-generated tell). A thin
 * accent rule + wide-tracked uppercase label reads as intentional design.
 */
export default function SectionLabel({
  children,
  align = 'center',
  tone = 'light',
  className = '',
}: SectionLabelProps) {
  const rule = tone === 'dark' ? 'bg-emerald-400/70' : 'bg-emerald-500/70';
  const text = tone === 'dark' ? 'text-emerald-400' : 'text-emerald-700';

  return (
    <div
      className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''} ${className}`}
    >
      <span className={`h-px w-8 ${rule}`} aria-hidden="true" />
      <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${text}`}>
        {children}
      </span>
      {align === 'center' && <span className={`h-px w-8 ${rule}`} aria-hidden="true" />}
    </div>
  );
}
