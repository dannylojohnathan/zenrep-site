import { communityWorkouts, currentUser } from "@/content/mockData";
import { AppAvatar } from "./AppAvatar";
import { AppIcon, type AppIconName } from "./AppIcon";
import { AppScreen } from "./AppTabBar";

const suggestedWorkout = communityWorkouts[0];
const suggestionCount = 3;

function ShortcutCard({ icon, title, subtitle }: { icon: AppIconName; title: string; subtitle: string }) {
  return (
    <div className="flex-1 rounded-[18px] border border-app-line bg-app-card p-4">
      <span className="bg-app-accent flex size-10 items-center justify-center rounded-[14px] text-fundo">
        <AppIcon name={icon} size={20} />
      </span>
      <p className="mt-3 mb-0 text-sm font-bold">{title}</p>
      <p className="mt-[3px] mb-0 text-xs leading-[1.35] text-app-text-faint">{subtitle}</p>
    </div>
  );
}

export function HomeScreen() {
  return (
    <AppScreen active="inicio">
      <header className="mb-5 flex items-center justify-between">
        <div>
          <p className="m-0 text-[13px] text-app-text-soft">Bom treino,</p>
          <h3 className="m-0 text-[26px] font-extrabold">Carlos</h3>
        </div>
        <AppAvatar person={currentUser.person} size={44} />
      </header>

      <div className="mb-3 flex items-center gap-3 rounded-[18px] border border-app-line bg-app-card p-4">
        <span className="bg-app-accent flex size-[52px] flex-none items-center justify-center rounded-2xl text-fundo">
          <AppIcon name="flame" size={26} />
        </span>
        <div>
          <p className="m-0 text-[26px] leading-[1.1] font-extrabold">
            {currentUser.streakDays}
            <span className="text-sm font-semibold text-app-text-soft"> dias consecutivos</span>
          </p>
          <p className="mt-[3px] mb-0 text-xs text-app-text-faint">
            Acompanhe sua ofensiva e veja todos os seus check-ins
          </p>
        </div>
      </div>

      <div className="mb-6 flex justify-between px-1 text-xs text-app-text-faint">
        <span>
          Posição <b className="font-semibold text-app-text-soft">{currentUser.rankPosition}º</b> no ranking
        </span>
        <span>
          {currentUser.weekSummary.workouts} treinos · {currentUser.weekSummary.calories} kcal
        </span>
      </div>

      <div className="mb-6 flex gap-3">
        <ShortcutCard icon="plus" title="Criar treino" subtitle="Seu treino, do seu jeito" />
        <ShortcutCard
          icon="users"
          title="Treinos da comunidade"
          subtitle="Descubra e realize treinos de outros usuários"
        />
      </div>

      <p className="m-0 pb-2.5 text-base font-bold">Treinos selecionados para você</p>
      <div className="bg-app-cover relative h-[220px] overflow-hidden rounded-[22px]">
        <AppIcon name="dumbbell" size={78} className="absolute top-[22px] right-[22px] text-menta-soft opacity-[0.22]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,9,0)_30%,rgba(7,10,9,0.93)_100%)]" />
        <div className="absolute inset-x-5 bottom-[18px]">
          <p className="m-0 text-xs font-semibold text-lime">Musculação</p>
          <p className="mt-0.5 mb-0 text-xl leading-[1.2] font-bold">{suggestedWorkout.name}</p>
          <p className="mt-1.5 mb-0 flex items-center gap-1.5 text-[13px] text-app-text-soft">
            <AppIcon name="clock" size={14} />
            {suggestedWorkout.minutes} min · {suggestedWorkout.exercises.length} exercícios
          </p>
        </div>
      </div>
      <div className="mt-3 flex justify-center gap-1.5">
        {Array.from({ length: suggestionCount }, (_, dotIndex) => (
          <span
            key={dotIndex}
            className={`h-1.5 rounded-full ${dotIndex === 0 ? "w-5 bg-menta" : "w-1.5 bg-app-line-strong"}`}
          />
        ))}
      </div>
    </AppScreen>
  );
}
