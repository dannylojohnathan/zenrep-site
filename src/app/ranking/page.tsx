import { Crown, Flame } from "lucide-react";
import { currentUser, ranking } from "@/content/mockData";
import { Container } from "@/components/layout/Container";
import { Avatar } from "@/components/ui/Avatar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Ranking fitness",
  description:
    "Veja quem mais treinou no ZenRep: pontos por check-in, ofensiva de dias seguidos e a classificação geral da comunidade.",
  path: "/ranking",
});

const numberFormatter = new Intl.NumberFormat("pt-BR");
const podiumOrder = [1, 0, 2];

export default function RankingPage() {
  const podium = podiumOrder.map((rankIndex) => ({ entry: ranking[rankIndex], position: rankIndex + 1 }));

  return (
    <Container className="pt-10 pb-16 md:pt-16 md:pb-[104px]">
      <div className="flex flex-col gap-5">
        <Eyebrow>
          <Flame size={14} aria-hidden="true" /> Atualizado a cada check-in
        </Eyebrow>
        <SectionHeading as="h1">Ranking da comunidade</SectionHeading>
        <p className="m-0 max-w-[560px] text-lg leading-7 font-medium text-content-soft">
          Cada treino concluído com check-in soma pontos. Quem mantém a constância sobe.
        </p>
      </div>

      <ol aria-label="Pódio" className="m-0 mt-10 grid list-none grid-cols-3 items-end gap-2.5 p-0 md:gap-4">
        {podium.map(({ entry, position }) => (
          <li
            key={entry.person.id}
            className={`flex flex-col items-center gap-2 rounded-[24px] px-2 pt-5 text-center md:rounded-[28px] ${
              position === 1 ? "bg-fundo pb-10 text-white" : "bg-surface pb-6"
            }`}
          >
            {position === 1 && <Crown size={24} className="text-lime" aria-hidden="true" />}
            <Avatar person={entry.person} size={52} />
            <span className="text-[13px] font-bold md:text-base">{entry.person.name.split(" ")[0]}</span>
            <span className={`text-xs font-semibold md:text-sm ${position === 1 ? "text-lime" : "text-brand"}`}>
              {numberFormatter.format(entry.points)} pts
            </span>
            <span className="text-2xl font-extrabold tracking-[-0.04em] md:text-[34px]">{position}º</span>
          </li>
        ))}
      </ol>

      <ol aria-label="Classificação geral" className="m-0 mt-4 flex list-none flex-col gap-2 p-0" start={4}>
        {ranking.slice(3).map((entry, entryIndex) => {
          const isCurrentUser = entry.person.id === currentUser.person.id;
          return (
            <li
              key={entry.person.id}
              className={`flex items-center gap-3 rounded-[20px] bg-surface p-3 md:gap-4 md:p-4 ${
                isCurrentUser ? "ring-2 ring-brand" : ""
              }`}
            >
              <span className="w-7 text-center text-base font-bold text-content-soft">{entryIndex + 4}</span>
              <Avatar person={entry.person} size={42} />
              <div className="min-w-0 flex-1">
                <p className="m-0 truncate text-[15px] font-semibold md:text-base">
                  {entry.person.name}
                  {isCurrentUser && <span className="ml-2 text-xs font-semibold text-brand">você</span>}
                </p>
                <p className="m-0 text-[13px] text-content-soft">
                  {entry.person.city}, {entry.person.state} · {entry.checkins} check-ins
                </p>
              </div>
              <span className="text-[15px] font-bold whitespace-nowrap text-brand">
                {numberFormatter.format(entry.points)}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-[28px] bg-surface p-6 md:flex-row md:items-center md:p-8">
        <p className="m-0 flex-1 text-lg font-semibold tracking-[-0.02em]">
          Quer seu nome aqui? Faça o primeiro check-in hoje.
        </p>
        <ButtonLink href={siteConfig.downloadHref}>
          Baixar grátis
        </ButtonLink>
      </div>
    </Container>
  );
}
