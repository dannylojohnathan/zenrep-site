import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Monte o treino", description: "Crie o seu ou salve um da comunidade." },
  { title: "Faça a jornada", description: "Séries, repetições e cronômetro de descanso, passo a passo." },
  { title: "Check-in", description: "Confirme no fim e registre onde treinou." },
  { title: "Suba no ranking", description: "Pontos, ofensiva e conquistas na hora." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="scroll-mt-20 bg-surface">
      <Container className="py-16 md:py-28">
        <div className="flex flex-col gap-4">
          <Eyebrow>Como funciona</Eyebrow>
          <SectionHeading id="como-funciona-titulo">Do treino ao ranking em 4 passos</SectionHeading>
        </div>

        <ol className="relative m-0 mt-10 grid list-none grid-cols-1 gap-8 p-0 md:mt-16 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[11px] w-0.5 bg-edge md:top-[11px] md:right-0 md:bottom-auto md:left-0 md:h-0.5 md:w-auto"
          />
          {steps.map((step, stepIndex) => (
            <li key={step.title} className="relative flex flex-col gap-2 pl-12 md:pt-12 md:pl-0">
              <span
                aria-hidden="true"
                className={`absolute top-0 left-0 size-6 rounded-full border-4 border-surface ${
                  stepIndex === steps.length - 1 ? "bg-accent ring-2 ring-brand" : "bg-brand"
                }`}
              />
              <span className="text-sm font-bold tracking-[0.1em] text-brand">
                {String(stepIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="m-0 text-2xl font-bold tracking-[-0.03em]">{step.title}</h3>
              <p className="m-0 text-[15px] leading-[22px] text-content-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
