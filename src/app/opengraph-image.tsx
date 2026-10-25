import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} · ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(120% 100% at 100% 0%, #0F6E56 0%, #04241E 58%)",
          color: "#F2F7F4",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="84" height="84" viewBox="0 0 512 512">
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
          <span style={{ fontSize: 48, fontWeight: 700, letterSpacing: -2 }}>ZenRep</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 92, fontWeight: 700, lineHeight: 1, letterSpacing: -5 }}>
            Treinou? Faz check-in.
          </span>
          <span style={{ fontSize: 34, color: "#C0DD97" }}>{siteConfig.tagline} · 100% gratuito</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
