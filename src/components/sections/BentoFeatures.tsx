import Image from "next/image";
import { Award, Flame, Medal, Trophy } from "lucide-react";
import { currentUser, exercises, people } from "@/content/mockData";
import { Container } from "@/components/layout/Container";
import { Avatar } from "@/components/ui/Avatar";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const numberFormatter = new Intl.NumberFormat("pt-BR");
const weekdayLabels = ["S", "T", "Q", "Q", "S", "S", "D"];

const workoutPreview = [
  { exercise: exercises.mergulho, sets: "3 × 12" },
  { exercise: exercises.crossover, sets: "3 × 12" },
  { exercise: exercises.crucifixo, sets: "3 × 12" },
];

const friendsChallenge = [
  { person: people.marina, points: 2870, isCurrentUser: false },
  { person: people.carlos, points: currentUser.points, isCurrentUser: true },
  { person: people.rafael, points: 880, isCurrentUser: false },
];
const challengeTopScore = friendsChallenge[0].points;

const badges = [
  { name: "Primeiro check-in", date: "mar 2026", Icon: Award },
  { name: "7 dias seguidos", date: "mai 2026", Icon: Flame },
  { name: "10 check-ins", date: "jun 2026", Icon: Medal },
];

function CardTitle({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h3 className="m-0 text-xl font-bold tracking-[-0.03em] md:text-2xl">{title}</h3>
      <p className="m-0 text-[15px] leading-[22px] text-content-soft">{description}</p>
    </div>
  );
}

const cardBase = "flex flex-col gap-6 rounded-[28px] border border-edge bg-surface p-5 md:p-7";

export function BentoFeatures() {
  return (
    <section id="recursos" aria-labelledby="recursos-titulo" className="scroll-mt-20">
      <Container className="py-16 md:py-28">
        <div className="flex max-w-[720px] flex-col gap-4">
          <Eyebrow>Por que o ZenRep</Eyebrow>
          <SectionHeading id="recursos-titulo">Tudo que faz você voltar amanhã</SectionHeading>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:mt-14 md:grid-cols-6 md:gap-4">
          <article className={`${cardBase} md:col-span-4`}>
            <CardTitle
              title="Registre treinos"
              description="Monte seus treinos, alcance metas e desenvolva consistência. Cada exercício vem com GIF."
            />
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {workoutPreview.map(({ exercise, sets }) => (
                <li key={exercise.slug} className="flex items-center gap-3 rounded-2xl bg-surface-muted p-2">
                  <Image
                    src={exercise.gifSrc}
                    alt={`Execução: ${exercise.name}`}
                    width={52}
                    height={52}
                    unoptimized
                    className="size-[52px] rounded-xl bg-white object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="line-clamp-2 block text-[15px] leading-tight font-semibold">{exercise.name}</span>
                    <span className="text-[13px] text-content-soft">{exercise.primaryMuscle}</span>
                  </span>
                  <span className="mr-2 rounded-full border border-edge bg-surface px-3 py-1 text-[13px] font-semibold">
                    {sets}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`${cardBase} justify-between md:col-span-2`}>
            <CardTitle title="Ofensiva" description="Treinou hoje? A sequência continua." />
            <div>
              <p className="m-0 flex items-center gap-2 text-[64px] leading-none font-extrabold tracking-[-0.06em]">
                <Flame size={44} aria-hidden="true" className="text-brand" />
                {currentUser.streakDays}
                <span className="text-lg font-semibold tracking-normal text-content-soft">dias</span>
              </p>
              <ol aria-label="Treinos da semana" className="m-0 mt-5 flex list-none justify-between p-0">
                {weekdayLabels.map((weekdayLabel, dayIndex) => {
                  const trained = currentUser.weekActivity[dayIndex] > 0;
                  return (
                    <li key={dayIndex} className="flex flex-col items-center gap-1.5">
                      <span
                        className={`size-7 rounded-full ${trained ? "bg-accent" : "border border-edge bg-surface-muted"}`}
                      />
                      <span className="text-[11px] font-semibold text-content-soft">{weekdayLabel}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </article>

          <article className="flex flex-col justify-between gap-6 rounded-[28px] bg-accent p-5 text-on-accent md:col-span-2 md:p-7">
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-xl font-bold tracking-[-0.03em] md:text-2xl">Ganhe pontos</h3>
              <p className="m-0 text-[15px] leading-[22px] text-on-accent/80">
                Cada check-in soma no ranking.
              </p>
            </div>
            <p className="m-0 text-[72px] leading-none font-extrabold tracking-[-0.06em]">
              +52
              <span className="ml-2 text-xl tracking-normal">pts</span>
            </p>
          </article>

          <article className={`${cardBase} md:col-span-4`}>
            <CardTitle
              title="Desafie amigos"
              description="Siga pessoas, interaja e veja quem treinou mais. Gente do Brasil todo."
            />
            <ol aria-label="Desafio entre amigos" className="m-0 flex list-none flex-col gap-3 p-0">
              {friendsChallenge.map((challenger) => (
                <li key={challenger.person.id} className="flex items-center gap-3">
                  <Avatar person={challenger.person} size={36} />
                  <div className="flex-1">
                    <div className="flex justify-between text-sm font-semibold">
                      <span>{challenger.isCurrentUser ? "Você" : challenger.person.name}</span>
                      <span className="text-content-soft">{numberFormatter.format(challenger.points)} pts</span>
                    </div>
                    <div className="mt-1.5 h-2.5 rounded-full bg-surface-muted">
                      <div
                        className={`h-full rounded-full ${challenger.isCurrentUser ? "bg-accent" : "bg-brand"}`}
                        style={{ width: `${Math.round((challenger.points / challengeTopScore) * 100)}%` }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="flex flex-col justify-between gap-8 rounded-[28px] bg-fundo p-5 text-white md:col-span-3 md:p-7">
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-xl font-bold tracking-[-0.03em] md:text-2xl">100% gratuito</h3>
              <p className="m-0 text-[15px] leading-[22px] text-menta-soft">
                Para todos e sem complicação. Sem plano pago escondido.
              </p>
            </div>
            <p className="m-0 text-[clamp(72px,12vw,120px)] leading-none font-extrabold tracking-[-0.07em] text-lime">
              R$ 0
            </p>
          </article>

          <article className={`${cardBase} md:col-span-3`}>
            <CardTitle title="Conquiste recompensas" description="Insígnias ficam no seu perfil, com a data em que você chegou lá." />
            <ul className="m-0 grid list-none grid-cols-3 gap-2 p-0">
              {badges.map((badge) => (
                <li key={badge.name} className="flex flex-col items-center gap-2 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-fundo text-lime ring-4 ring-accent/40">
                    <badge.Icon size={26} aria-hidden="true" />
                  </span>
                  <span className="text-[13px] leading-tight font-semibold">{badge.name}</span>
                  <span className="text-xs text-content-soft">{badge.date}</span>
                </li>
              ))}
            </ul>
            <p className="m-0 flex items-center gap-2 text-sm font-semibold text-brand">
              <Trophy size={16} aria-hidden="true" /> Próxima: 30 dias seguidos
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
