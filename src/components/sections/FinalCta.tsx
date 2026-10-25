import { ArrowRight, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { BrandMark } from "@/components/ui/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCta() {
  return (
    <section
      id="baixar"
      aria-labelledby="baixar-titulo"
      className="relative scroll-mt-20 overflow-hidden bg-accent text-on-accent"
    >
      <BrandMark
        size={420}
        className="pointer-events-none absolute -right-24 -bottom-28 rotate-12 opacity-20 md:-right-10"
      />
      <Container className="relative flex flex-col gap-8 py-16 md:py-28">
        <h2
          id="baixar-titulo"
          className="m-0 max-w-[900px] text-[clamp(44px,10vw,112px)] leading-[0.92] font-extrabold tracking-[-0.06em]"
        >
          Bora treinar junto?
        </h2>
        <p className="m-0 inline-flex items-center gap-2 text-lg font-semibold">
          <Smartphone size={20} aria-hidden="true" /> Grátis para Android e iPhone.
        </p>
        <div>
          <ButtonLink href="#baixar" variant="accent" className="w-full sm:w-auto">
            Baixar o ZenRep <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
