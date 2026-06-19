import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import IconBox from '@/components/shared/IconBox';
import { reasons } from '@/data/homeContent';

export default function WhyChooseUsSection() {
  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeader eyebrow="Avantajlar" title="Neden Bizi" highlight="Tercih Etmelisiniz?" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-green/40"
            >
              <IconBox icon={r.icon} tone={i % 2 === 0 ? 'green' : 'purple'} />
              <div>
                <h3 className="text-[17px] font-bold text-ink">{r.title}</h3>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
