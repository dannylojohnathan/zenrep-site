import Image from "next/image";
import { ArrowRight, Award, Bookmark, CircleCheck, Dumbbell, Lock, UserPlus } from "lucide-react";
import { communityWorkouts, currentUser, people, type Person } from "@/content/mockData";
import { Avatar } from "@/components/ui/Avatar";
import { AppTabBar } from "./AppTabBar";

const publishedWorkout = communityWorkouts[2];

function EventHeader({ person, action, time }: { person: Person; action: string; time: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar person={person} size={36} />
      <p className="m-0 flex-1 text-[13px] leading-[1.35] text-app-text-soft">
        <strong className="font-semibold text-app-text">{person.name}</strong> {action}
      </p>
      <span className="text-[11px] text-app-text-faint">{time}</span>
    </div>
  );
}

export function CommunityScreen() {
  return (
    <div className="relative flex h-full w-full flex-col bg-app font-sans text-app-text">
      <div className="h-[50px] flex-none" />
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-5">
        <header className="flex items-center gap-2">
          <div className="flex-1">
            <h3 className="m-0 text-[26px] font-bold tracking-[-0.035em]">Comunidade</h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-menta">
              <span className="size-2 rounded-full bg-menta" /> Ao vivo
            </span>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-musgo text-lime">
            <Dumbbell size={18} />
          </span>
          <span className="flex size-10 items-center justify-center rounded-full bg-musgo text-lime">
            <UserPlus size={18} />
          </span>
          <Avatar person={currentUser.person} size={40} ringClassName="ring-2 ring-menta" />
        </header>

        <span className="self-center rounded-full bg-lime px-4 py-2 text-[13px] font-semibold text-fundo shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
          2 novas atividades
        </span>

        <article className="flex flex-col gap-3 rounded-[22px] border border-app-line bg-app-card p-3.5">
          <EventHeader person={people.marina} action="fez check-in" time="há 5 min" />
          <div className="flex items-center gap-3 rounded-2xl bg-app-raised p-3">
            <CircleCheck size={22} className="text-lime" />
            <div className="flex-1">
              <p className="m-0 text-sm font-semibold">Treino de casal!</p>
              <p className="m-0 text-xs text-app-text-soft">Musculação · 340 kcal</p>
            </div>
            <span className="text-sm font-bold text-lime">+52 pts</span>
          </div>
        </article>

        <article className="flex flex-col gap-3 rounded-[22px] border border-app-line bg-app-card p-3.5">
          <EventHeader person={people.pedro} action="publicou um treino" time="há 1 h" />
          <div className="flex items-center gap-3 rounded-2xl bg-app-raised p-2.5">
            <Image
              src={publishedWorkout.exercises[0].gifSrc}
              alt=""
              width={56}
              height={56}
              unoptimized
              className="size-14 rounded-xl bg-white object-cover"
            />
            <div className="flex-1">
              <p className="m-0 text-sm font-semibold">{publishedWorkout.name}</p>
              <p className="m-0 text-xs text-app-text-soft">
                {publishedWorkout.exercises.length} exercícios · {publishedWorkout.minutes} min
              </p>
            </div>
            <ArrowRight size={18} className="text-app-text-faint" />
          </div>
        </article>

        <article className="flex flex-col gap-3 rounded-[22px] border border-app-line bg-app-card p-3.5">
          <EventHeader person={people.juliana} action="ganhou uma conquista" time="há 3 h" />
          <div className="flex items-center gap-3 rounded-2xl bg-lime/10 p-3">
            <Award size={22} className="text-lime" />
            <p className="m-0 text-sm font-semibold text-lime">7 dias seguidos</p>
          </div>
        </article>

        <article className="flex items-center gap-2.5 rounded-[22px] border border-app-line bg-app-card p-3.5">
          <Avatar person={people.amanda} size={36} />
          <p className="m-0 flex-1 text-[13px] text-app-text-soft">
            <strong className="font-semibold text-app-text">Amanda</strong> salvou{" "}
            <strong className="font-semibold text-app-text">Peito pesado</strong>
          </p>
          <Bookmark size={18} className="text-menta" />
        </article>

        <article className="flex items-center gap-2.5 rounded-[22px] border border-app-line bg-app-card p-3.5">
          <Avatar person={people.juliana} size={36} />
          <p className="m-0 flex-1 text-[13px] text-app-text-soft">
            <strong className="font-semibold text-app-text">Juliana</strong> fez check-in
          </p>
          <span className="inline-flex items-center gap-1 text-xs text-app-text-faint">
            <Lock size={13} /> Privado
          </span>
        </article>
      </div>
      <AppTabBar active="comunidade" />
    </div>
  );
}
