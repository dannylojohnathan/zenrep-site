export const siteConfig = {
  name: "ZenRep",
  // Trocar pelo domínio real no deploy.
  url: "https://zenrep.app",
  tagline: "Check-ins, Conquistas e Comunidade Fitness",
  description:
    "Registre treinos, faça check-in, mantenha a ofensiva e suba no ranking. Desafie amigos e treine com gente do Brasil todo. 100% gratuito.",
  locale: "pt_BR",
  downloadHref: "/#baixar",
  navigation: [
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Comunidade", href: "/#comunidade" },
    { label: "Ranking", href: "/ranking" },
    { label: "Treinos", href: "/treinos" },
  ],
  footerLinks: [
    { label: "Treinos", href: "/treinos" },
    { label: "Ranking", href: "/ranking" },
    { label: "Termos de uso", href: "#" },
    { label: "Privacidade", href: "#" },
  ],
} as const;

export const pillars = [
  {
    title: "Registre treinos",
    description: "Monte seus treinos, alcance metas e desenvolva consistência.",
  },
  {
    title: "Desafie amigos",
    description: "Siga pessoas e interaja com quem treina no Brasil todo.",
  },
  {
    title: "Ganhe pontos",
    description: "Suba no ranking e conquiste recompensas a cada check-in.",
  },
  {
    title: "100% gratuito",
    description: "Para todos e sem complicação. Sem plano pago escondido.",
  },
] as const;
