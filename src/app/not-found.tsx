import Link from 'next/link';
import { Phone, Home, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Container from '@/components/shared/Container';

export default function NotFound() {
  return (
    <section className="section bg-surface">
      <Container className="max-w-2xl py-20 text-center">
        <p className="text-[64px] font-extrabold leading-none text-brand-green-dark">404</p>
        <h1 className="mt-4 text-[28px] font-extrabold text-ink">Sayfa Bulunamadı</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aracınızı satmak için doğru
          yerdesiniz — aşağıdan devam edebilirsiniz.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[11px] bg-gradient-to-br from-brand-green to-brand-green-dark px-6 text-[15px] font-bold text-white shadow-soft transition hover:brightness-[1.05]"
          >
            <Home className="h-[18px] w-[18px]" aria-hidden="true" /> Ana Sayfa
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[11px] border border-line bg-white px-6 text-[15px] font-bold text-ink transition hover:border-brand-green"
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" /> {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="mx-auto mt-10 grid max-w-md gap-2.5 text-left">
          {siteConfig.services.map((s) => (
            <Link
              key={s.id}
              href={`/${s.slug}`}
              className="group flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-[14px] font-semibold text-ink transition hover:border-brand-green hover:text-brand-green-dark"
            >
              {s.title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
