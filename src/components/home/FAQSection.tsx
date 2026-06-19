import Container from '@/components/shared/Container';
import SectionHeader from '@/components/shared/SectionHeader';
import Accordion from '@/components/shared/Accordion';
import { faqs } from '@/data/homeContent';

export default function FAQSection() {
  return (
    <section className="section bg-surface">
      <Container>
        <SectionHeader eyebrow="SSS" title="Merak" highlight="Edilenler" />
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
