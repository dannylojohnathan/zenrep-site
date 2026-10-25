import { Asterisk } from "lucide-react";

const featureNames = [
  "Check-in",
  "Ofensiva diária",
  "Ranking",
  "Conquistas",
  "Comunidade",
  "Treinos com GIF",
  "Jornada guiada",
  "Relatório de progresso",
];

function FeatureRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Recursos do app"}
      className="m-0 flex flex-none list-none items-center gap-8 p-0 pr-8"
    >
      {featureNames.map((featureName) => (
        <li key={featureName} className="flex items-center gap-8 text-lg font-bold whitespace-nowrap md:text-2xl">
          {featureName}
          <Asterisk size={22} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export function FeatureMarquee() {
  return (
    <div className="relative z-30 overflow-hidden py-3">
      <div className="-mx-4 -rotate-1 overflow-hidden bg-accent py-4 text-on-accent md:py-5">
        <div className="flex w-max animate-marquee">
          <FeatureRow />
          <FeatureRow hidden />
        </div>
      </div>
    </div>
  );
}
