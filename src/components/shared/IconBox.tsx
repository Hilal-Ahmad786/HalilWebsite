import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/cn';

type Tone = 'green' | 'purple' | 'navy';
type Size = 'sm' | 'md' | 'lg';

interface IconBoxProps {
  icon: ComponentType<LucideProps>;
  tone?: Tone;
  size?: Size;
  className?: string;
  label?: string;
}

const tones: Record<Tone, string> = {
  green: 'bg-brand-green-soft text-brand-green-dark',
  purple: 'bg-brand-purple-soft text-brand-purple',
  navy: 'bg-navy-900 text-brand-green',
};

const boxSizes: Record<Size, string> = {
  sm: 'h-10 w-10 rounded-[10px]',
  md: 'h-12 w-12 rounded-xl',
  lg: 'h-14 w-14 rounded-2xl',
};
const iconSizes: Record<Size, string> = { sm: 'w-5 h-5', md: 'w-6 h-6', lg: 'w-7 h-7' };

/** Consistent icon container used across cards and lists. */
export default function IconBox({ icon: Icon, tone = 'green', size = 'md', className, label }: IconBoxProps) {
  return (
    <span className={cn('inline-flex items-center justify-center flex-shrink-0', tones[tone], boxSizes[size], className)}>
      <Icon className={iconSizes[size]} strokeWidth={2} aria-hidden={label ? undefined : true} aria-label={label} />
    </span>
  );
}
