import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "brand" | "on-accent";
};

// Rótulo curto em caixa alta acima dos títulos de seção.
export function Eyebrow({ children, tone = "brand" }: EyebrowProps) {
  return (
    <p
      className={`m-0 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase ${
        tone === "brand" ? "text-brand" : "text-on-accent"
      }`}
    >
      <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-current" />
      {children}
    </p>
  );
}
