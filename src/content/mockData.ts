// Dados de demonstração. Os 4 exercícios (nome, músculos, passos e GIF) vêm do catálogo
// real do app; pessoas, treinos e ranking são fictícios, só para a apresentação.

export type Tint = "lime" | "menta" | "sky" | "lilac" | "peach" | "rose";

export type Person = {
  id: string;
  name: string;
  initials: string;
  city: string;
  state: string;
  goal: string;
  tint: Tint;
};

export const people = {
  carlos: { id: "carlos", name: "Carlos Silva", initials: "CS", city: "São Paulo", state: "SP", goal: "Hipertrofia", tint: "lime" },
  marina: { id: "marina", name: "Marina Costa", initials: "MC", city: "São Paulo", state: "SP", goal: "Hipertrofia", tint: "menta" },
  rafael: { id: "rafael", name: "Rafael Almeida", initials: "RA", city: "Campinas", state: "SP", goal: "Emagrecimento", tint: "sky" },
  juliana: { id: "juliana", name: "Juliana Rocha", initials: "JR", city: "Rio de Janeiro", state: "RJ", goal: "Resistência", tint: "lilac" },
  pedro: { id: "pedro", name: "Pedro Henrique", initials: "PH", city: "Belo Horizonte", state: "MG", goal: "Hipertrofia", tint: "peach" },
  beatriz: { id: "beatriz", name: "Beatriz Lima", initials: "BL", city: "Curitiba", state: "PR", goal: "Flexibilidade", tint: "rose" },
  lucas: { id: "lucas", name: "Lucas Ferreira", initials: "LF", city: "Porto Alegre", state: "RS", goal: "Hipertrofia", tint: "sky" },
  amanda: { id: "amanda", name: "Amanda Souza", initials: "AS", city: "São Paulo", state: "SP", goal: "Emagrecimento", tint: "lilac" },
} satisfies Record<string, Person>;

export const currentUser = {
  person: people.carlos,
  streakDays: 5,
  rankPosition: 7,
  points: 1240,
  followers: 342,
  following: 189,
  weekSummary: { workouts: 4, calories: "1.310" },
  // check-ins por dia, seg → dom
  weekActivity: [1, 0, 1, 1, 0, 1, 1],
  badges: ["Primeiro check-in", "7 dias seguidos", "10 check-ins"],
};

export type Exercise = {
  slug: string;
  name: string;
  level: string;
  primaryMuscle: string;
  secondaryMuscles: string[];
  gifSrc: string;
  steps: string[];
};

export const exercises = {
  mergulho: {
    slug: "mergulho",
    name: "Mergulho na paralela para peito",
    level: "Intermediário",
    primaryMuscle: "Peitoral",
    secondaryMuscles: ["Tríceps", "Ombros"],
    gifSrc: "/exercicios/mergulho.gif",
    steps: [
      "Segure as barras paralelas com as palmas para baixo e os braços estendidos.",
      "Dobre os joelhos e cruze os tornozelos.",
      "Desça dobrando os braços até os ombros ficarem abaixo dos cotovelos.",
      "Empurre para voltar à posição inicial.",
    ],
  },
  crossover: {
    slug: "crossover",
    name: "Crossover na polia em pé",
    level: "Intermediário",
    primaryMuscle: "Peitoral",
    secondaryMuscles: ["Deltoides", "Tríceps"],
    gifSrc: "/exercicios/crossover.gif",
    steps: [
      "Fique no centro da polia com os pés na largura dos ombros.",
      "Segure as alças com os braços estendidos para os lados.",
      "Traga as mãos juntas à frente do corpo, cruzando uma sobre a outra.",
      "Volte devagar à posição inicial.",
    ],
  },
  crucifixo: {
    slug: "crucifixo",
    name: "Crucifixo inclinado na polia",
    level: "Intermediário",
    primaryMuscle: "Peitoral",
    secondaryMuscles: ["Deltoides", "Tríceps"],
    gifSrc: "/exercicios/crucifixo.gif",
    steps: [
      "Apoie a bola de estabilidade em ângulo inclinado, de costas para a polia.",
      "Segure as alças com as palmas para a frente.",
      "Abra os braços com os cotovelos levemente dobrados.",
      "Pause e retorne devagar.",
    ],
  },
  afundo: {
    slug: "afundo",
    name: "Afundo frontal com halteres",
    level: "Intermediário",
    primaryMuscle: "Glúteos",
    secondaryMuscles: ["Quadríceps", "Isquiotibiais", "Panturrilhas"],
    gifSrc: "/exercicios/afundo.gif",
    steps: [
      "Em pé, um haltere em cada mão.",
      "Dê um passo à frente com as costas retas e o core ativado.",
      "Desça até a coxa da frente ficar paralela ao chão.",
      "Empurre pelo calcanhar para voltar e alterne as pernas.",
    ],
  },
} satisfies Record<string, Exercise>;

export type Workout = {
  id: string;
  name: string;
  description: string;
  author: Person | null;
  minutes: number;
  saves: number;
  likes: number;
  exercises: Exercise[];
};

export const communityWorkouts: Workout[] = [
  {
    id: "full-body-essencial",
    name: "Full Body Essencial",
    description: "Treino da plataforma para o corpo todo.",
    author: null,
    minutes: 45,
    saves: 120,
    likes: 88,
    exercises: [exercises.afundo, exercises.mergulho, exercises.crossover, exercises.crucifixo],
  },
  {
    id: "treino-de-casal",
    name: "Treino de casal!",
    description: "Treino de peito para fazer a dois, revezando as séries.",
    author: people.marina,
    minutes: 50,
    saves: 14,
    likes: 21,
    exercises: [exercises.mergulho, exercises.crossover, exercises.crucifixo],
  },
  {
    id: "full-body-express",
    name: "Full body express",
    description: "Corpo inteiro em 35 minutos, sem enrolação.",
    author: people.pedro,
    minutes: 35,
    saves: 9,
    likes: 15,
    exercises: [exercises.afundo, exercises.mergulho, exercises.crossover, exercises.crucifixo],
  },
  {
    id: "peito-pesado",
    name: "Peito pesado",
    description: "Duas variações para fechar o peito.",
    author: people.amanda,
    minutes: 40,
    saves: 6,
    likes: 4,
    exercises: [exercises.mergulho, exercises.crucifixo],
  },
  {
    id: "peito-e-triceps",
    name: "Peito e Tríceps",
    description: "Treino da plataforma para empurrar.",
    author: null,
    minutes: 40,
    saves: 96,
    likes: 70,
    exercises: [exercises.mergulho, exercises.crossover, exercises.crucifixo],
  },
  {
    id: "peito-completo",
    name: "Peito Completo",
    description: "Treino da plataforma para o peitoral.",
    author: null,
    minutes: 30,
    saves: 74,
    likes: 51,
    exercises: [exercises.crossover, exercises.crucifixo],
  },
];

export type RankingEntry = { person: Person; checkins: number; points: number };

export const ranking: RankingEntry[] = [
  { person: people.pedro, checkins: 61, points: 3120 },
  { person: people.marina, checkins: 54, points: 2870 },
  { person: people.juliana, checkins: 47, points: 2410 },
  { person: people.amanda, checkins: 39, points: 1980 },
  { person: people.beatriz, checkins: 31, points: 1610 },
  { person: people.lucas, checkins: 28, points: 1395 },
  { person: people.carlos, checkins: 24, points: 1240 },
  { person: people.rafael, checkins: 17, points: 880 },
];
