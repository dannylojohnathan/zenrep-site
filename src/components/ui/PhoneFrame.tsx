import type { ReactNode } from "react";

const SCREEN_WIDTH = 390;
const SCREEN_HEIGHT = 844;
const CORNER_RADIUS = 48;

type PhoneFrameProps = {
  children: ReactNode;
  scale?: number;
  label: string;
};

function StatusBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-center gap-[154px] px-6 pt-[21px] pb-[19px] text-white">
      <span
        className="flex h-[22px] flex-1 items-center justify-center pt-[1.5px] text-[17px] leading-[22px] font-semibold"
        style={{ fontFamily: "-apple-system, system-ui, sans-serif" }}
      >
        9:41
      </span>
      <span className="flex h-[22px] flex-1 items-center justify-center gap-[7px] pt-px">
        <svg width="19" height="12" viewBox="0 0 19 12" fill="currentColor">
          <rect x="0" y="7.5" width="3.2" height="4.5" rx="0.7" />
          <rect x="4.8" y="5" width="3.2" height="7" rx="0.7" />
          <rect x="9.6" y="2.5" width="3.2" height="9.5" rx="0.7" />
          <rect x="14.4" y="0" width="3.2" height="12" rx="0.7" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" />
          <path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" />
          <circle cx="8.5" cy="10.5" r="1.5" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="currentColor">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" strokeOpacity="0.35" fill="none" />
          <rect x="2" y="2" width="20" height="9" rx="2" />
          <path d="M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z" fillOpacity="0.4" />
        </svg>
      </span>
    </div>
  );
}

// iPhone dos mockups do app: tela 390×844 com Dynamic Island, status bar e home indicator,
// desenhada em tamanho real e reduzida por `scale`.
export function PhoneFrame({ children, scale = 0.86, label }: PhoneFrameProps) {
  return (
    <figure
      role="img"
      aria-label={label}
      className="m-0 flex-none overflow-hidden bg-black shadow-[0_40px_80px_rgba(4,36,30,0.30),0_0_0_1px_rgba(0,0,0,0.12)]"
      style={{
        width: Math.round(SCREEN_WIDTH * scale),
        height: Math.round(SCREEN_HEIGHT * scale),
        borderRadius: CORNER_RADIUS * scale,
      }}
    >
      <div
        aria-hidden="true"
        className="relative overflow-hidden antialiased"
        style={{
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "0 0",
        }}
      >
        {children}
        <span className="absolute top-[11px] left-1/2 z-50 h-[37px] w-[126px] -translate-x-1/2 rounded-3xl bg-black" />
        <StatusBar />
        <span className="absolute bottom-2 left-1/2 z-[60] h-[5px] w-[139px] -translate-x-1/2 rounded-full bg-white/70" />
      </div>
    </figure>
  );
}
