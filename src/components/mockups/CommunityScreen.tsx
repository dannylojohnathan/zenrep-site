import type { ReactNode } from "react";
import { communityWorkouts, currentUser, people, type Person, type Workout } from "@/content/mockData";
import { AppAvatar } from "./AppAvatar";
import { AppIcon, type AppIconName } from "./AppIcon";
import { AppScreen } from "./AppTabBar";

const publishedWorkout = communityWorkouts[2];
const savedWorkout = communityWorkouts[3];

const innerBox = "mt-3 rounded-[14px] border border-app-line bg-app-raised p-3";

function TimelineCard({ person, action, time, children }: { person: Person; action: string; time: string; children: ReactNode }) {
  return (
    <article className="rounded-[18px] border border-app-line bg-app-card p-4">
      <div className="flex min-h-11 items-center gap-3">
        <AppAvatar person={person} size={40} />
        <div className="min-w-0 flex-1">
          <p className="m-0 truncate text-sm font-semibold">{person.name}</p>
          <p className="m-0 text-xs text-app-text-faint">
            {action} · {time}
          </p>
        </div>
      </div>
      {children}
    </article>
  );
}

function WorkoutRow({ workout, icon }: { workout: Workout; icon: AppIconName }) {
  return (
    <div className={`${innerBox} flex items-center gap-3`}>
      <span className="flex size-14 flex-none items-center justify-center rounded-xl border border-app-line-strong bg-app-card text-menta">
        <AppIcon name={icon} size={17} />
      </span>
      <div className="min-w-0">
        <p className="m-0 text-sm font-semibold">{workout.name}</p>
        <p className="mt-1 mb-0 flex gap-3 text-xs">
          <span className="text-app-text-soft">Musculação</span>
          <span className="inline-flex items-center gap-1 text-app-text-faint">
            <AppIcon name="clock" size={13} /> {workout.minutes} min
          </span>
        </p>
      </div>
    </div>
  );
}

export function CommunityScreen() {
  return (
    <AppScreen active="comunidade">
      <header className="mb-4 flex items-center gap-2.5">
        <div className="min-w-0 flex-1">
          <h3 className="m-0 text-xl font-bold">Comunidade</h3>
          <span className="mt-0.5 inline-flex items-center gap-1.5 text-[11.5px] text-menta">
            <span className="size-[7px] rounded-full bg-menta shadow-[0_0_8px_#5DCAA5]" /> Ao vivo
          </span>
        </div>
        <span className="bg-app-accent flex size-10 items-center justify-center rounded-[13px] text-fundo">
          <AppIcon name="dumbbell" size={20} />
        </span>
        <span className="bg-app-accent flex size-10 items-center justify-center rounded-[13px] text-fundo">
          <AppIcon name="userPlus" size={20} />
        </span>
        <AppAvatar person={currentUser.person} size={44} />
      </header>

      <div className="flex justify-center pb-3">
        <span className="bg-app-accent inline-flex h-9 items-center gap-[7px] rounded-full px-4 text-[13px] font-bold text-fundo shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
          <AppIcon name="arrowUp" size={15} strokeWidth={2.6} /> 2 novas atividades
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <TimelineCard person={people.marina} action="fez check-in" time="há 5 min">
          <div className={`${innerBox} overflow-hidden`}>
            <div className="-mx-3 -mt-3 mb-2 h-[72px] bg-[linear-gradient(180deg,rgba(15,110,86,0.55),#102019)]" />
            <p className="m-0 text-sm font-semibold">Treino de casal!</p>
            <p className="mt-[5px] mb-0 text-xs text-app-text-soft">Musculação</p>
            <p className="mt-2 mb-0 flex gap-4 text-[13px] font-semibold">
              <span className="inline-flex items-center gap-1.5 text-lime">
                <AppIcon name="zap" size={14} /> 52 pts
              </span>
              <span className="inline-flex items-center gap-1.5 text-menta">
                <AppIcon name="flame" size={14} /> 340 kcal
              </span>
            </p>
          </div>
        </TimelineCard>

        <TimelineCard person={people.pedro} action="publicou um treino" time="há 1 h">
          <WorkoutRow workout={publishedWorkout} icon="share" />
        </TimelineCard>

        <TimelineCard person={people.juliana} action="ganhou uma conquista" time="há 3 h">
          <div className={`${innerBox} flex items-center gap-3`}>
            <span className="flex size-10 items-center justify-center rounded-full border border-app-line-strong bg-app-card text-lime">
              <AppIcon name="award" size={20} />
            </span>
            <span className="text-sm font-semibold text-lime">7 dias seguidos</span>
          </div>
        </TimelineCard>

        <TimelineCard person={people.amanda} action="salvou um treino" time="ontem">
          <WorkoutRow workout={savedWorkout} icon="plus" />
        </TimelineCard>
      </div>
    </AppScreen>
  );
}
