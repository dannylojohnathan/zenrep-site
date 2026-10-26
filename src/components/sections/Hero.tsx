import { Flame, Trophy } from "lucide-react";
import { people } from "@/content/mockData";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { AvatarStack } from "@/components/ui/Avatar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { CommunityScreen } from "@/components/mockups/CommunityScreen";
import { HomeScreen } from "@/components/mockups/HomeScreen";
import { RankingScreen } from "@/components/mockups/RankingScreen";

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />

      <Container className="relative flex flex-col items-center gap-6 pt-12 text-center md:pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-2 text-[13px] font-semibold text-content-soft">
          <span className="size-2 animate-pulse-dot rounded-full bg-menta" />
          Comunidade ao vivo · 100% gratuito
        </span>

        <h1
          id="hero-titulo"
          className="m-0 max-w-[1100px] text-[clamp(28px,8.6vw,88px)] leading-[0.95] font-extrabold tracking-[-0.06em]"
        >
          <span className="whitespace-nowrap">Check-ins,</span>{" "}
          <span className="whitespace-nowrap">Conquistas e</span>
          <br />
          <span className="mt-2 inline-block -skew-x-6 rounded-2xl bg-accent px-[0.18em] pb-[0.08em] whitespace-nowrap text-on-accent">
            <span className="inline-block skew-x-6">Comunidade Fitness</span>
          </span>
        </h1>

        <p className="m-0 max-w-[600px] text-lg leading-7 text-content-soft md:text-xl md:leading-8">
          Registre treinos, mantenha a ofensiva, ganhe pontos e conquiste recompensas com gente do Brasil todo.
        </p>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href={siteConfig.downloadHref}>Baixar grátis</ButtonLink>
          <ButtonLink href="/treinos" variant="secondary">
            Explorar treinos
          </ButtonLink>
        </div>

        <div className="flex items-center gap-3 text-left">
          <AvatarStack people={[people.marina, people.pedro, people.juliana, people.amanda]} size={34} />
          <span className="text-sm leading-5 text-content-soft">
            Gente de SP, RJ, MG, PR e RS
            <br />
            treinando junto agora
          </span>
        </div>
      </Container>

      <div className="relative mt-12 h-[520px] md:mt-16 md:h-[640px]">
        <div aria-hidden="true" className="hero-glow absolute inset-0" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-center">
          <div className="hidden translate-x-16 translate-y-14 -rotate-[8deg] lg:block">
            <PhoneFrame scale={0.66} label="Timeline da comunidade com check-ins e conquistas">
              <CommunityScreen />
            </PhoneFrame>
          </div>

          <div className="relative z-10 max-[400px]:[zoom:0.86]">
            <PhoneFrame scale={0.8} label="Tela inicial do ZenRep com ofensiva, ranking e progresso da semana">
              <HomeScreen />
            </PhoneFrame>

            <div className="absolute top-[232px] -left-24 hidden items-center gap-2 rounded-2xl bg-accent px-3.5 py-2.5 text-on-accent shadow-[0_16px_32px_rgba(0,0,0,0.18)] sm:flex">
              <Trophy size={18} aria-hidden="true" />
              <span className="text-sm font-bold">+52 pts</span>
            </div>
            <div className="absolute top-[300px] -right-28 hidden items-center gap-2 rounded-2xl border border-edge bg-surface px-3.5 py-2.5 shadow-[0_16px_32px_rgba(0,0,0,0.14)] sm:flex">
              <Flame size={18} aria-hidden="true" className="text-brand" />
              <span className="text-left text-sm leading-tight font-semibold">
                5 dias
                <span className="block text-xs font-medium text-content-soft">seguidos</span>
              </span>
            </div>
          </div>

          <div className="hidden -translate-x-16 translate-y-14 rotate-[8deg] lg:block">
            <PhoneFrame scale={0.66} label="Ranking geral com a posição do usuário">
              <RankingScreen />
            </PhoneFrame>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-b from-transparent to-canvas"
        />
      </div>
    </section>
  );
}
