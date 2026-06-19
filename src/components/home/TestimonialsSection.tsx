import { Star, Quote } from 'lucide-react';
import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import { testimonials } from '@/data/homeContent';

export default function TestimonialsSection() {
  return (
    <section className="section bg-surface-alt">
      <Container>
        <SectionHeader eyebrow="Yorumlar" title="Gerçek Yorumlar," highlight="Gerçek Memnuniyet" />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border border-line bg-white p-6 shadow-soft">
              <Quote className="absolute right-5 top-5 h-7 w-7 text-brand-purple/15" aria-hidden="true" />
              <div className="flex gap-0.5" aria-label={`${t.rating} / 5 yıldız`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-ink-soft">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-soft text-[15px] font-bold text-brand-green-dark">
                  {t.name[0]}
                </span>
                <span>
                  <span className="block text-[14px] font-bold text-ink">{t.name}</span>
                  <span className="block text-[12px] text-ink-muted">
                    {t.city} • {t.category}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
