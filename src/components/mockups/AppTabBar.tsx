import { ChartColumn, CircleCheck, Dumbbell, House, Users } from "lucide-react";

type AppTab = "inicio" | "comunidade" | "ranking" | "treinos";

const tabs = [
  { key: "inicio", label: "Início", Icon: House },
  { key: "comunidade", label: "Comunidade", Icon: Users },
  { key: "ranking", label: "Ranking", Icon: ChartColumn },
  { key: "treinos", label: "Treinos", Icon: Dumbbell },
] as const;

// Barra do app: quatro abas e o check-in central em destaque.
export function AppTabBar({ active }: { active: AppTab }) {
  const [firstTab, secondTab, thirdTab, fourthTab] = tabs;
  const renderTab = (tab: (typeof tabs)[number]) => {
    const isActive = tab.key === active;
    return (
      <span key={tab.key} className="flex w-16 flex-col items-center gap-1">
        <tab.Icon size={22} strokeWidth={2} className={isActive ? "text-lime" : "text-app-text-faint"} />
        <span className={`text-[10.5px] font-semibold ${isActive ? "text-lime" : "text-app-text-faint"}`}>
          {tab.label}
        </span>
      </span>
    );
  };

  return (
    <div className="absolute inset-x-0 bottom-0 flex h-[92px] items-start justify-around border-t border-app-line bg-app/95 px-3 pt-3">
      {renderTab(firstTab)}
      {renderTab(secondTab)}
      <span className="-mt-6 flex size-[62px] items-center justify-center rounded-full bg-lime text-fundo shadow-[0_10px_24px_rgba(192,221,151,0.25)]">
        <CircleCheck size={28} strokeWidth={2.2} />
      </span>
      {renderTab(thirdTab)}
      {renderTab(fourthTab)}
    </div>
  );
}
