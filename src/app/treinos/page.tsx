import Image from "next/image";
import { Bookmark, Clock, Heart } from "lucide-react";
import { communityWorkouts, exercises } from "@/content/mockData";
import { Container } from "@/components/layout/Container";
import { Avatar } from "@/components/ui/Avatar";
import { BrandMark } from "@/components/ui/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Treinos da comunidade",
  description:
    "Treinos prontos criados pela comunidade ZenRep e pela plataforma, com GIF de execução em cada exercício. Salve, faça a jornada e registre o check-in.",
  path: "/treinos",
});

export default function WorkoutsPage() {
  return (
    <>
      <Container className="pt-10 pb-16 md:pt-16 md:pb-[104px]">
        <div className="flex flex-col gap-5">
          <Eyebrow>
            <Bookmark size={14} aria-hidden="true" /> Salve e treine hoje
          </Eyebrow>
          <SectionHeading as="h1">Treinos da comunidade</SectionHeading>
          <p className="m-0 max-w-[560px] text-lg leading-7 font-medium text-content-soft">
            Monte o seu ou use um pronto. Todo exercício vem com GIF, séries e repetições.
          </p>
        </div>

        <ul className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {communityWorkouts.map((workout) => (
            <li key={workout.id} className="flex flex-col gap-4 rounded-[28px] bg-surface p-5">
              <div className="grid grid-cols-4 gap-1.5">
                {workout.exercises.slice(0, 4).map((exercise) => (
                  <Image
                    key={exercise.slug}
                    src={exercise.gifSrc}
                    alt={exercise.name}
                    width={120}
                    height={120}
                    unoptimized
                    className="aspect-square w-full rounded-xl bg-surface-muted object-cover"
                  />
                ))}
              </div>
              <div>
                <h2 className="m-0 text-xl font-bold tracking-[-0.03em]">{workout.name}</h2>
                <p className="m-0 mt-1 text-[15px] leading-[22px] font-medium text-content-soft">{workout.description}</p>
              </div>
              <div className="mt-auto flex items-center gap-3 text-[13px] font-semibold text-content-soft">
                {workout.author ? (
                  <span className="inline-flex min-w-0 flex-1 items-center gap-2">
                    <Avatar person={workout.author} size={28} />
                    <span className="truncate">{workout.author.name}</span>
                  </span>
                ) : (
                  <span className="inline-flex flex-1 items-center gap-2">
                    <BrandMark size={28} /> ZenRep
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Clock size={14} aria-hidden="true" /> {workout.minutes} min
                </span>
                <span className="inline-flex items-center gap-1">
                  <Heart size={14} aria-hidden="true" /> {workout.likes}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <section aria-labelledby="exercicios-titulo" className="bg-surface">
        <Container className="py-16 md:py-[104px]">
          <SectionHeading id="exercicios-titulo">Exercícios com execução em GIF</SectionHeading>
          <ul className="m-0 mt-10 grid list-none gap-4 p-0 md:grid-cols-2">
            {Object.values(exercises).map((exercise) => (
              <li key={exercise.slug} className="flex flex-col gap-4 rounded-[28px] bg-surface-muted p-5 sm:flex-row">
                <Image
                  src={exercise.gifSrc}
                  alt={`Execução do exercício ${exercise.name}`}
                  width={180}
                  height={180}
                  unoptimized
                  className="aspect-square w-full rounded-2xl bg-surface object-cover sm:w-[160px] sm:flex-none"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-lg font-bold tracking-[-0.02em]">{exercise.name}</h3>
                  <p className="m-0 text-[13px] font-semibold text-brand">
                    {exercise.primaryMuscle} · {exercise.secondaryMuscles.join(", ")}
                  </p>
                  <ol className="m-0 flex flex-col gap-1 pl-5 text-sm leading-[21px] text-content-soft">
                    {exercise.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/#baixar">Treinar com o ZenRep</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
