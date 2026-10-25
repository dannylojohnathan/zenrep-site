type BrandMarkProps = {
  size?: number;
  className?: string;
};

// Ícone do app: quadrado musgo com o "Z" em lime e o ponto da repetição.
export function BrandMark({ size = 34, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      aria-hidden="true"
      className={className}
    >
      <rect width="512" height="512" rx="120" fill="#0F6E56" />
      <path
        d="M170 185H355L208 320H355"
        fill="none"
        stroke="#C0DD97"
        strokeWidth="34"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="256" cy="392" r="19" fill="#C0DD97" />
    </svg>
  );
}

type BrandLogoProps = {
  size?: number;
  tone?: "dark" | "light";
};

export function BrandLogo({ size = 34, tone = "dark" }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={size} />
      <span
        className={`text-[22px] leading-none font-bold tracking-[-0.04em] ${
          tone === "dark" ? "text-content" : "text-app-text"
        }`}
      >
        ZenRep
      </span>
    </span>
  );
}
