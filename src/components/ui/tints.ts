import type { Tint } from "@/content/mockData";

// Classes completas e estáticas para o Tailwind enxergar na varredura.
export const tintClasses: Record<Tint, { background: string; text: string }> = {
  lime: { background: "bg-tint-lime", text: "text-ink-lime" },
  menta: { background: "bg-tint-menta", text: "text-ink-menta" },
  sky: { background: "bg-tint-sky", text: "text-ink-sky" },
  lilac: { background: "bg-tint-lilac", text: "text-ink-lilac" },
  peach: { background: "bg-tint-peach", text: "text-ink-peach" },
  rose: { background: "bg-tint-rose", text: "text-ink-rose" },
};
