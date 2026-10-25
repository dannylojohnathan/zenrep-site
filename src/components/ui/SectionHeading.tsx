import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ id, children, as: Tag = "h2", className = "" }: SectionHeadingProps) {
  return (
    <Tag
      id={id}
      className={`m-0 text-[clamp(32px,7vw,60px)] leading-[1.02] font-extrabold tracking-[-0.05em] text-balance ${className}`}
    >
      {children}
    </Tag>
  );
}
