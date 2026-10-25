import type { ReactNode } from "react";

const SCREEN_WIDTH = 390;
const SCREEN_HEIGHT = 844;
const BEZEL = 10;

type PhoneFrameProps = {
  children: ReactNode;
  scale?: number;
  label: string;
};

// Celular mockado: a tela é desenhada em 390×844 e reduzida por `scale`, como na S1 da Labuta.
export function PhoneFrame({ children, scale = 0.86, label }: PhoneFrameProps) {
  const innerWidth = Math.round(SCREEN_WIDTH * scale);
  const innerHeight = Math.round(SCREEN_HEIGHT * scale);

  return (
    <figure
      role="img"
      aria-label={label}
      className="m-0 flex-none rounded-[51px] bg-app shadow-[0_30px_60px_rgba(4,36,30,0.30)] ring-1 ring-white/10"
      style={{ padding: BEZEL, width: innerWidth + BEZEL * 2, height: innerHeight + BEZEL * 2 }}
    >
      <div
        className="overflow-hidden rounded-[38px]"
        style={{ width: innerWidth, height: innerHeight }}
      >
        <div
          aria-hidden="true"
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "0 0",
          }}
        >
          {children}
        </div>
      </div>
    </figure>
  );
}
