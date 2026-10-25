import type { Person } from "@/content/mockData";
import { tintClasses } from "./tints";

type AvatarProps = {
  person: Person;
  size?: number;
  ringClassName?: string;
};

export function Avatar({ person, size = 38, ringClassName = "" }: AvatarProps) {
  const tint = tintClasses[person.tint];
  return (
    <span
      title={person.name}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.32), letterSpacing: "-0.02em" }}
      className={`inline-flex flex-none items-center justify-center rounded-full font-bold ${tint.background} ${tint.text} ${ringClassName}`}
    >
      {person.initials}
    </span>
  );
}

type AvatarStackProps = {
  people: Person[];
  size?: number;
  ringClassName?: string;
};

export function AvatarStack({ people, size = 38, ringClassName = "ring-2 ring-canvas" }: AvatarStackProps) {
  return (
    <span className="inline-flex">
      {people.map((person, index) => (
        <span key={person.id} className={index === 0 ? "" : "-ml-1"}>
          <Avatar person={person} size={size} ringClassName={ringClassName} />
        </span>
      ))}
    </span>
  );
}
