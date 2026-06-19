import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Container from '@/components/shared/Container';

/** Shared chrome for legal/policy pages: light header + readable white card. */
export default function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface-alt">
      <section className="relative overflow-hidden border-b border-line bg-surface-warm">
        <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl" aria-hidden="true" />
        <Container className="relative py-9">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-[13px] text-ink-muted">
              <li>
                <Link href="/" className="hover:text-brand-green-dark transition-colors">Ana Sayfa</Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <li className="font-semibold text-ink">{title}</li>
            </ol>
          </nav>
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-brand-purple">Yasal</span>
          <h1 className="mt-2 font-extrabold leading-tight text-[clamp(26px,3vw,40px)] text-ink">{title}</h1>
        </Container>
      </section>

      <Container className="max-w-3xl py-12">
        <div className="rounded-2xl border border-line bg-white p-6 text-ink-soft shadow-soft sm:p-9 [&_h2]:mt-9 [&_h2]:mb-3 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-ink [&_strong]:text-ink [&_a]:text-brand-green-dark [&_a]:underline">
          {children}
        </div>
      </Container>
    </div>
  );
}
