import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/lib/seo/JsonLd";
import { themeBootScript } from "@/lib/theme";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "app de treino",
    "check-in academia",
    "ranking fitness",
    "comunidade fitness",
    "ofensiva de treino",
    "treino grátis",
    "conquistas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#070a09" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  slogan: siteConfig.tagline,
};

const applicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  operatingSystem: "Android, iOS",
  applicationCategory: "HealthApplication",
  inLanguage: "pt-BR",
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={sora.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={applicationJsonLd} />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
