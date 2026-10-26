import type { Person } from "@/content/mockData";

// Dentro do app os avatares são escuros: fundo fechado + iniciais claras (tons do protótipo).
const appTones: Record<string, { background: string; text: string }> = {
  carlos: { background: "#0F6E56", text: "#5DCAA5" },
  marina: { background: "#3A2E5C", text: "#C0A6F0" },
  rafael: { background: "#0A4B3C", text: "#5DCAA5" },
  juliana: { background: "#5C3A1E", text: "#F0C79A" },
  pedro: { background: "#1E3A5C", text: "#9AC7F0" },
  beatriz: { background: "#5C1E3A", text: "#F09AC7" },
  lucas: { background: "#3A5C1E", text: "#C0DD97" },
  amanda: { background: "#1E5C4B", text: "#9FE1CB" },
};

export function AppAvatar({ person, size = 44 }: { person: Person; size?: number }) {
  const tone = appTones[person.id] ?? { background: "#102019", text: "#5DCAA5" };
  return (
    <span
      className="inline-flex flex-none items-center justify-center rounded-full border border-app-line-strong font-bold"
      style={{ width: size, height: size, background: tone.background, color: tone.text, fontSize: size * 0.38 }}
    >
      {person.initials}
    </span>
  );
}
