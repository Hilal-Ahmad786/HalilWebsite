import Image from 'next/image';
import { Car } from 'lucide-react';
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
        'relative flex w-full items-center justify-center overflow-hidden border border-line',
        'bg-gradient-to-br from-surface-alt via-white to-brand-green-pale',
        rounded,
        wrapperClassName
      )}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-green-dark shadow-soft">
          <Car className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-[12.5px] font-semibold text-ink-soft leading-snug">{alt}</span>
      </div>
    </div>
  );
}
