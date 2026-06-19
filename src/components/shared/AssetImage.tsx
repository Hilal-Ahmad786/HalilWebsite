import Image from 'next/image';
import { Car } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * Floating-car image. The supplied PNGs are transparent, so we present them on
 * a designed backdrop (soft gradient + glow + ground shadow), object-contain,
 * which makes the vehicle prominent instead of cropping it in a photo box.
 * Set ASSETS_READY=false to show labelled placeholders again.
 */
const ASSETS_READY = true;

interface AssetImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
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
  rounded = 'rounded-3xl',
}: AssetImageProps) {
  return (
    <div
      style={{ aspectRatio: `${width} / ${height}` }}
      className={cn(
        'group/asset relative w-full overflow-hidden bg-gradient-to-br from-brand-green-pale via-white to-brand-purple-soft',
        rounded,
        wrapperClassName
      )}
    >
      {/* soft glow behind the car */}
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] h-[78%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-2xl"
        aria-hidden="true"
      />
      {/* decorative ring */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border-[10px] border-brand-green/15"
        aria-hidden="true"
      />

      {ASSETS_READY ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              'object-contain p-4 drop-shadow-[0_20px_24px_rgba(7,20,38,0.22)] transition-transform duration-500 group-hover/asset:scale-[1.03]',
              className
            )}
          />
          {/* ground shadow */}
          <div
            className="pointer-events-none absolute bottom-3 left-1/2 h-3 w-3/5 -translate-x-1/2 rounded-[100%] bg-navy-950/25 blur-md"
            aria-hidden="true"
          />
        </>
      ) : (
        <div role="img" aria-label={alt} className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-green-dark shadow-soft">
              <Car className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-[12.5px] font-semibold text-ink-soft leading-snug">{alt}</span>
          </div>
        </div>
      )}
    </div>
  );
}
