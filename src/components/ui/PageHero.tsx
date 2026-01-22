'use client';

import SocialProof from '@/components/ui/SocialProof';

interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  showSocialProof?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  showSocialProof = true,
  children,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 pt-32 pb-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-emerald-900/10" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-white text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-emerald-400 px-5 py-2.5 mb-8 rounded-full border border-white/10">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="font-medium text-sm tracking-wide">{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
          {titleHighlight && (
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        {/* Optional children (CTAs, forms, etc.) */}
        {children}

        {/* Social Proof */}
        {showSocialProof && (
          <div className="mt-12">
            <SocialProof variant="dark" />
          </div>
        )}
      </div>
    </section>
  );
}
