import Image from "next/image";
import { Dumbbell, Flame, Plus, Trophy, Users } from "lucide-react";
import { communityWorkouts, currentUser } from "@/content/mockData";
import { Avatar } from "@/components/ui/Avatar";
import { BrandMark } from "@/components/ui/BrandLogo";
import { AppTabBar } from "./AppTabBar";

const suggestedWorkout = communityWorkouts[0];
const weekdayLabels =["S", "T", "Q", "Q", "S", "S", "D"];

function WeekCurve() {
  // Curva suave da semana: cada dia com check-in sobe a linha.
  const chartWidth = 300;
  const chartHeight = 70;
  const stepWidth = chartWidth / (currentUser.weekActivity.length - 1);
  const points = currentUser.weekActivity.map((dayCount, dayIndex) => ({
    horizontal: dayIndex * stepWidth,
    vertical: chartHeight - 10 - dayCount * 44,
  }));
  const linePath = points
    .map((point, pointIndex) => `${pointIndex === 0 ? "M" : "L"}${point.horizontal},${point.vertical}`)
    .join(" ");
  const lastPoint = points[points.length - 1];

  return (
    <svg width="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
      <path d={`${linePath} L${chartWidth},${chartHeight} L0,${chartHeight} Z`} fill="rgba(192,221,151,0.10)" />
      <path d={linePath} fill="none" stroke="#C0DD97" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lastPoint.horizontal} cy={lastPoint.vertical} r="6" fill="#5DCAA5" stroke="#070A09" strokeWidth="3" />
    </svg>
  );
}

export function HomeScreen() {
  return (
    <div className="relative flex h-full w-full flex-col bg-app font-sans text-app-text">
      <div className="h-[50px] flex-none" />
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-5">
        <header className="flex items-center gap-2.5">
          <BrandMark size={30} />
          <span className="text-[21px] font-bold tracking-[-0.04em]">ZenRep</span>
          <span className="flex-1" />
          <Avatar person={currentUser.person} size={40} ringClassName="ring-2 ring-menta" />
        </header>

        <h3 className="m-0 text-[26px] leading-[1.15] font-bold tracking-[-0.035em]">
          Bom treino, Carlos.
          <br />
          <span className="text-app-text-soft">Bora manter a ofensiva?</span>
        </h3>

        <div className="bg-app-radial relative flex flex-col gap-3.5 overflow-hidden rounded-[26px] p-[18px]">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-lime/15 text-lime">
                <Flame size={24} />
              </span>
              <span>
                <span className="block text-[30px] leading-none font-extrabold tracking-[-0.04em]">
                  {currentUser.streakDays} dias
                </span>
                <span className="text-[13px] text-menta-soft">seguidos de treino</span>
              </span>
            </span>
            <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">Meus check-ins</span>
          </div>
          <div className="flex justify-between">
            {weekdayLabels.map((weekdayLabel, dayIndex) => {
              const trained = currentUser.weekActivity[dayIndex] > 0;
              return (
                <span key={dayIndex} className="flex flex-col items-center gap-1.5">
                  <span
                    className={`size-8 rounded-full ${
                      trained ? "bg-lime" : "border border-white/20 bg-white/5"
                    }`}
                  />
                  <span className="text-[11px] font-semibold text-menta-soft">{weekdayLabel}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-[20px] border border-app-line bg-app-card p-3.5">
            <Trophy size={18} className="text-lime" />
            <p className="mt-2 mb-0 text-[22px] font-bold tracking-[-0.03em]">#{currentUser.rankPosition}</p>
            <p className="m-0 text-xs text-app-text-soft">no ranking · 1.240 pts</p>
          </div>
          <div className="rounded-[20px] border border-app-line bg-app-card p-3.5">
            <Dumbbell size={18} className="text-menta" />
            <p className="mt-2 mb-0 text-[22px] font-bold tracking-[-0.03em]">
              {currentUser.weekSummary.workouts} treinos
            </p>
            <p className="m-0 text-xs text-app-text-soft">{currentUser.weekSummary.calories} kcal na semana</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <span className="flex items-center gap-2 rounded-[18px] bg-musgo-deep px-3.5 py-3 text-sm font-semibold text-lime">
            <Plus size={18} /> Criar treino
          </span>
          <span className="flex items-center gap-2 rounded-[18px] border border-app-line-strong bg-app-raised px-3.5 py-3 text-sm font-semibold">
            <Users size={18} className="text-menta" /> Comunidade
          </span>
        </div>

        <div className="rounded-[20px] border border-app-line bg-app-card p-4">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-[15px] font-bold">Meu progresso</span>
            <span className="text-xs text-app-text-soft">esta semana</span>
          </div>
          <WeekCurve />
        </div>

        <div className="flex items-center gap-3 rounded-[20px] border border-app-line bg-app-card p-2.5">
          <Image
            src={suggestedWorkout.exercises[0].gifSrc}
            alt=""
            width={56}
            height={56}
            unoptimized
            className="size-14 rounded-xl bg-white object-cover"
          />
          <div className="flex-1">
            <p className="m-0 text-[11px] font-semibold text-menta">Selecionado para você</p>
            <p className="m-0 text-sm font-semibold">{suggestedWorkout.name}</p>
            <p className="m-0 text-xs text-app-text-soft">
              {suggestedWorkout.exercises.length} exercícios · {suggestedWorkout.minutes} min
            </p>
          </div>
        </div>
      </div>
      <AppTabBar active="inicio" />
    </div>
  );
}
