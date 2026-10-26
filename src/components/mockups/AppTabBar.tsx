import type { ReactNode } from "react";
import { AppIcon, type AppIconName } from "./AppIcon";

type AppTab = "inicio" | "comunidade" | "ranking" | "treinos";

const tabs: { key: AppTab | "checkin"; label: string; icon: AppIconName }[] = [
  { key: "inicio", label: "Início", icon: "home" },
  { key: "comunidade", label: "Comunidade", icon: "users" },
  { key: "checkin", label: "Check-in", icon: "check" },
  { key: "ranking", label: "Ranking", icon: "trophy" },
  { key: "treinos", label: "Treinos", icon: "dumbbell" },
];

// Barra do app: quatro abas e o check-in central em destaque, como no protótipo.
export function AppTabBar({ active }: { active: AppTab }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-40 flex items-end justify-around border-t border-app-line bg-app-card px-2 pt-2 pb-[30px]">
      {tabs.map((tab) => {
        if (tab.key === "checkin") {
          return (
            <span key={tab.key} className="flex flex-1 flex-col items-center gap-1">
              <span className="bg-app-accent -mt-7 flex size-[58px] items-center justify-center rounded-full border-4 border-app text-fundo shadow-[0_4px_14px_rgba(192,221,151,0.5)]">
                <AppIcon name="check" size={26} strokeWidth={3} />
              </span>
              <span className="text-[10px] font-semibold text-app-text-faint">{tab.label}</span>
            </span>
          );
        }
        const isActive = tab.key === active;
        return (
          <span
            key={tab.key}
            className={`flex min-h-11 flex-1 flex-col items-center gap-[3px] pt-1 ${
              isActive ? "text-menta" : "text-app-text-faint"
            }`}
          >
            <AppIcon name={tab.icon} size={22} strokeWidth={isActive ? 2.6 : 2} />
            <span className={`text-[10px] ${isActive ? "font-semibold" : "font-normal"}`}>{tab.label}</span>
          </span>
        );
      })}
    </div>
  );
}

// Estrutura comum das telas: fundo do app, respiro da status bar e a barra de abas por cima.
export function AppScreen({ active, children }: { active: AppTab; children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-app font-sans text-app-text">
      <div className="h-[54px] flex-none" />
      <div className="flex-1 overflow-hidden px-4">{children}</div>
      <AppTabBar active={active} />
    </div>
  );
}
