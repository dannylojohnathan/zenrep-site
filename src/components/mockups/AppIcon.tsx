import type { ReactNode } from "react";

// Ícones do app (mesmos traços dos mockups oficiais), para as telas baterem com o ZenRep real.
const paths = {
  home: (
    <>
      <path d="M3 10.2 12 3l9 7.2" />
      <path d="M5.5 9.2V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.2" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6" />
      <path d="M18 14.6c2 .8 3.4 2.6 3.4 5.4" />
    </>
  ),
  check: <path d="M4 12.5 9.5 18 20 6.5" />,
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" />
      <path d="M9.5 15.5 9 20h6l-.5-4.5" />
      <path d="M7 21h10" />
    </>
  ),
  dumbbell: <path d="M6.5 6.5v11M4 8.5v7M17.5 6.5v11M20 8.5v7M6.5 12h11" />,
  flame: <path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-1.5.6-2.7 1.2-3.6C9 10 10 11 10 11s-.5-4 2-8Z" />,
  plus: <path d="M12 5v14M5 12h14" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  userPlus: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3.5 20c0-3.5 2.7-5.7 5.5-5.7 1 0 2 .3 2.8.7" />
      <path d="M18 9v6M15 12h6" />
    </>
  ),
  arrowUp: <path d="M12 20V5M6 11l6-6 6 6" />,
  zap: <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
  share: (
    <>
      <circle cx="18" cy="5.5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="18.5" r="2.6" />
      <path d="m8.3 10.8 7.4-4M8.3 13.2l7.4 4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type AppIconName = keyof typeof paths;

type AppIconProps = {
  name: AppIconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function AppIcon({ name, size = 22, strokeWidth = 2, className }: AppIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
