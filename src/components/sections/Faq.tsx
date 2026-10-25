import { Plus } from "lucide-react";
import { faqItems } from "@/content/faq";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/lib/seo/JsonLd";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faqItem) => ({
    "@type": "Question",
    name: faqItem.question,
    acceptedAnswer: { "@type": "Answer", text: faqItem.answer },
  })),
};

export function Faq() {
  return (
    <section aria-labelledby="faq-titulo" className="border-t border-edge">
      <JsonLd data={faqJsonLd} />
      <Container className="grid gap-10 py-16 md:grid-cols-[1fr_1.5fr] md:gap-16 md:py-28">
        <div className="flex flex-col gap-4 md:sticky md:top-28 md:self-start">
          <Eyebrow>Dúvidas</Eyebrow>
          <SectionHeading id="faq-titulo">Perguntas comuns</SectionHeading>
          <p className="m-0 text-base leading-6 text-content-soft">O básico para começar a treinar hoje.</p>
        </div>
        <div className="border-t border-edge">
          {faqItems.map((faqItem, faqIndex) => (
            <details key={faqItem.question} open={faqIndex === 0} className="group border-b border-edge">
              <summary className="flex items-center justify-between gap-4 py-5 text-base font-semibold tracking-[-0.01em] md:text-lg">
                {faqItem.question}
                <span className="flex size-9 flex-none items-center justify-center rounded-full bg-surface-muted text-brand transition-transform group-open:rotate-45">
                  <Plus size={18} aria-hidden="true" />
                </span>
              </summary>
              <p className="m-0 pr-12 pb-6 text-base leading-[25px] text-content-soft">{faqItem.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
