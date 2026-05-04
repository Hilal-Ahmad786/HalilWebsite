interface ScrollIndicatorProps {
  targetId?: string;
  label?: string;
}

export default function ScrollIndicator({
  targetId = 'sayfa-icerigi',
  label = 'Devamını keşfet',
}: ScrollIndicatorProps) {
  return (
    <a
      href={`#${targetId}`}
      className="group absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center rounded-full p-2 text-emerald-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:bottom-7"
      aria-label={label}
    >
      <span className="sr-only">{label}</span>
      <span className="relative flex h-14 w-8 items-start justify-center rounded-full border border-white/25 bg-white/10 pt-2 shadow-lg shadow-emerald-950/20 backdrop-blur-md transition group-hover:border-emerald-300/70 group-hover:bg-emerald-400/15">
        <span className="scroll-indicator-dot h-2 w-1 rounded-full bg-emerald-300 transition group-hover:bg-white" />
        <span className="absolute -bottom-5 left-1/2 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-emerald-300/70 to-transparent" />
      </span>
    </a>
  );
}
