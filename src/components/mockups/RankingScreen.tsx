import { Crown } from "lucide-react";
import { currentUser, ranking } from "@/content/mockData";
import { Avatar } from "@/components/ui/Avatar";
import { AppTabBar } from "./AppTabBar";

const numberFormatter = new Intl.NumberFormat("pt-BR");

export function RankingScreen() {
  const [leader, ...others] = ranking;

  return (
    <div className="relative flex h-full w-full flex-col bg-app font-sans text-app-text">
      <div className="h-[50px] flex-none" />
      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-5">
        <h3 className="m-0 text-[26px] font-bold tracking-[-0.035em]">Ranking</h3>
        <div className="flex gap-2">
          <span className="rounded-full bg-lime px-4 py-2 text-[13px] font-semibold text-fundo">Geral</span>
          <span className="rounded-full border border-app-line-strong px-4 py-2 text-[13px] font-semibold text-app-text-soft">
            Seguindo
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-[22px] bg-musgo-deep p-4">
          <Crown size={22} className="text-lime" />
          <Avatar person={leader.person} size={44} />
          <div className="flex-1">
            <p className="m-0 text-[15px] font-semibold">{leader.person.name}</p>
            <p className="m-0 text-xs text-menta-soft">{leader.checkins} check-ins</p>
          </div>
          <span className="text-base font-bold text-lime">{numberFormatter.format(leader.points)}</span>
        </div>

        {others.map((entry, entryIndex) => {
          const isCurrentUser = entry.person.id === currentUser.person.id;
          return (
            <div
              key={entry.person.id}
              className={`flex items-center gap-3 rounded-[18px] border px-3.5 py-2.5 ${
                isCurrentUser ? "border-lime bg-lime/10" : "border-app-line bg-app-card"
              }`}
            >
              <span className="w-5 text-center text-sm font-bold text-app-text-faint">{entryIndex + 2}</span>
              <Avatar person={entry.person} size={34} />
              <span className="flex-1 text-sm font-semibold">{isCurrentUser ? "Você" : entry.person.name}</span>
              <span className="text-sm font-bold text-app-text-soft">{numberFormatter.format(entry.points)}</span>
            </div>
          );
        })}
      </div>
      <AppTabBar active="ranking" />
    </div>
  );
}
