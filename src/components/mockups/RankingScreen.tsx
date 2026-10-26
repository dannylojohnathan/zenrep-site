import { currentUser, ranking } from "@/content/mockData";
import { AppAvatar } from "./AppAvatar";
import { AppIcon } from "./AppIcon";
import { AppScreen } from "./AppTabBar";

// Ouro, prata e bronze para o pódio; o resto fica apagado.
const podiumColors = ["#F59E0B", "#94A3B8", "#B45309"];

export function RankingScreen() {
  return (
    <AppScreen active="ranking">
      <header className="mb-[18px] flex items-center justify-between">
        <div>
          <p className="m-0 text-sm text-app-text-soft">Ranking</p>
          <h3 className="m-0 text-2xl font-extrabold">Carlos</h3>
          <p className="mt-0.5 mb-0 text-xs text-app-text-faint">Veja sua colocação</p>
        </div>
        <AppAvatar person={currentUser.person} size={48} />
      </header>

      <div className="bg-app-cover mb-[18px] flex items-center gap-3 rounded-[20px] border border-app-line-strong p-4">
        <span className="flex size-12 items-center justify-center rounded-[14px] bg-lime/15 text-lime">
          <AppIcon name="trophy" size={24} />
        </span>
        <div className="flex-1">
          <p className="m-0 text-xs text-menta-soft">Você está em</p>
          <p className="m-0 text-2xl font-extrabold">{currentUser.rankPosition}º lugar</p>
        </div>
        <div className="text-right">
          <p className="m-0 text-xl font-extrabold text-lime">{currentUser.points}</p>
          <p className="m-0 text-xs text-menta-soft">pontos</p>
        </div>
      </div>

      <ol className="m-0 flex list-none flex-col gap-2 p-0">
        {ranking.map((entry, entryIndex) => {
          const isCurrentUser = entry.person.id === currentUser.person.id;
          return (
            <li
              key={entry.person.id}
              className={`flex items-center gap-3 rounded-[18px] border border-app-line p-3 ${
                isCurrentUser ? "bg-musgo/20" : "bg-app-card"
              }`}
            >
              <span
                className="w-[30px] text-center text-[15px] font-extrabold text-app-text-faint"
                style={{ color: podiumColors[entryIndex] }}
              >
                {entryIndex + 1}
              </span>
              <AppAvatar person={entry.person} size={40} />
              <div className="min-w-0 flex-1">
                <p className="m-0 truncate text-sm font-semibold">
                  {entry.person.name}
                  {isCurrentUser ? " (você)" : ""}
                </p>
                <p className="m-0 text-xs text-app-text-faint">{entry.checkins} check-ins</p>
              </div>
              <span className="text-sm font-bold text-lime">{entry.points}</span>
            </li>
          );
        })}
      </ol>
    </AppScreen>
  );
}
