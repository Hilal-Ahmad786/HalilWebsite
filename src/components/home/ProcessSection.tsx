import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import { processSteps } from '@/data/homeContent';

export default function ProcessSection() {
  return (
    <section className="section bg-surface-green">
      <Container>
        <SectionHeader eyebrow="Nasıl Çalışır" title="4 Adımda" highlight="Kolay Satış" />

        <div className="relative">
          {/* dotted connector (desktop) */}
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-brand-green/40 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className="relative rounded-2xl border border-line bg-white p-6 text-center shadow-soft"
                >
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-dark text-[18px] font-extrabold text-white shadow-soft">
                    {step.number}
                  </span>
                  <span className="mx-auto mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-soft text-brand-green-dark">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{step.description}</p>
                  <span className="mt-4 inline-block rounded-full bg-brand-purple-soft px-3 py-1 text-[12px] font-semibold text-brand-purple">
                    {step.time}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
