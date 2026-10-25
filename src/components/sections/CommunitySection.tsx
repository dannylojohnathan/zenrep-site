import Image from "next/image";
import { Award, CircleCheck, Lock, Radio, UserPlus, Users, type LucideIcon } from "lucide-react";
import { communityWorkouts, people } from "@/content/mockData";
import { Container } from "@/components/layout/Container";
import { Avatar } from "@/components/ui/Avatar";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights: { title: string; text: string; Icon: LucideIcon }[] = [
  { title: "Siga quem te inspira", text: "Seguir, seguir de volta e virar amigos.", Icon: UserPlus },
  { title: "Tudo ao vivo", text: "Check-ins e conquistas chegam na hora.", Icon: Radio },
  { title: "Desafie os amigos", text: "Compare ofensivas e pontos da semana.", Icon: Users },
  { title: "Você controla", text: "Treino privado aparece só como “Privado”.", Icon: Lock },
];

const publishedWorkout = communityWorkouts[2];

export function CommunitySection() {
  return (
    <section id="comunidade" aria-labelledby="comunidade-titulo" className="scroll-mt-20">
      <Container className="py-16 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-6">
            <Eyebrow>Comunidade</Eyebrow>
            <SectionHeading id="comunidade-titulo">Treine junto com o Brasil todo</SectionHeading>
            <p className="m-0 max-w-[520px] text-lg leading-7 text-content-soft">
              A timeline mostra o que as pessoas que você segue estão fazendo. Motivação de quem treina como você.
            </p>
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li key={highlight.title} className="flex gap-3 rounded-2xl border border-edge p-4">
                  <highlight.Icon size={22} aria-hidden="true" className="mt-0.5 flex-none text-brand" />
                  <span>
                    <span className="block text-[15px] font-bold">{highlight.title}</span>
                    <span className="text-sm leading-5 text-content-soft">{highlight.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="hero-glow absolute -inset-10" />
            <ol aria-label="Exemplo de timeline" className="relative m-0 flex list-none flex-col gap-3 p-0">
              <li className="flex items-center justify-between px-1">
                <span className="text-sm font-bold">Atividade de quem você segue</span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand">
                  <span className="size-2 animate-pulse-dot rounded-full bg-menta" /> Ao vivo
                </span>
              </li>

              <li className="rounded-3xl border border-edge bg-surface p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] md:mr-12">
                <div className="flex items-center gap-3">
                  <Avatar person={people.marina} size={40} />
                  <p className="m-0 flex-1 text-sm text-content-soft">
                    <strong className="font-semibold text-content">Marina Costa</strong> fez check-in · há 5 min
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-2xl bg-surface-muted p-3">
                  <CircleCheck size={22} aria-hidden="true" className="text-brand" />
                  <span className="flex-1 text-sm font-semibold">Treino de casal! · 340 kcal</span>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-on-accent">+52 pts</span>
                </div>
              </li>

              <li className="rounded-3xl border border-edge bg-surface p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] md:ml-12">
                <div className="flex items-center gap-3">
                  <Avatar person={people.pedro} size={40} />
                  <p className="m-0 flex-1 text-sm text-content-soft">
                    <strong className="font-semibold text-content">Pedro Henrique</strong> publicou um treino · há 1 h
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-2xl bg-surface-muted p-2">
                  <Image
                    src={publishedWorkout.exercises[0].gifSrc}
                    alt=""
                    width={56}
                    height={56}
                    unoptimized
                    className="size-14 rounded-xl bg-white object-cover"
                  />
                  <span className="flex-1">
                    <span className="block text-sm font-semibold">{publishedWorkout.name}</span>
                    <span className="text-xs text-content-soft">
                      {publishedWorkout.exercises.length} exercícios · {publishedWorkout.minutes} min
                    </span>
                  </span>
                </div>
              </li>

              <li className="flex items-center gap-3 rounded-3xl bg-fundo p-4 text-white md:mr-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-lime text-fundo">
                  <Award size={20} aria-hidden="true" />
                </span>
                <p className="m-0 flex-1 text-sm text-menta-soft">
                  <strong className="font-semibold text-white">Juliana Rocha</strong> ganhou a conquista{" "}
                  <strong className="font-semibold text-lime">7 dias seguidos</strong>
                </p>
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
