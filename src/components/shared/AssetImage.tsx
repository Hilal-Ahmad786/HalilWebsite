import Image from 'next/image';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * Drop-in image with a labelled placeholder until real assets are supplied.
 *
 * HOW TO GO LIVE WITH REAL IMAGES:
 *   1. Add the .webp files to the exact paths passed as `src`
 *      (see /public/images/hero, /vehicles, /cta).
 *   2. Flip ASSETS_READY to true below.
 * The layout/dimensions are identical, so nothing else changes.
 */
const ASSETS_READY = false;

interface AssetImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** wrapper classes (rounding, ring, etc.) */
  wrapperClassName?: string;
  rounded?: string;
}

export default function AssetImage({
  src,
  alt,
  width,
  height,
  priority,
  sizes,
  className,
  wrapperClassName,
  rounded = 'rounded-2xl',
}: AssetImageProps) {
  if (ASSETS_READY) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={cn(rounded, className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-brand-purple/30',
        'bg-gradient-to-br from-brand-purple-soft/60 to-brand-green-soft/50 text-center px-4',
        rounded,
        wrapperClassName
      )}
    >
      <ImageIcon className="h-7 w-7 text-brand-purple/70" aria-hidden="true" />
      <span className="text-[13px] font-semibold text-ink-soft leading-snug">{alt}</span>
      <span className="text-[11px] font-mono text-ink-muted break-all">{src}</span>
    </div>
  );
}
