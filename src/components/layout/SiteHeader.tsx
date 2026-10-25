import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-canvas/80 backdrop-blur-lg">
      <Container className="flex h-[68px] items-center gap-3">
        <Link href="/" aria-label="ZenRep, início" className="mr-auto no-underline md:mr-0">
          <BrandLogo size={32} />
        </Link>

        <nav aria-label="Seções" className="mx-auto hidden items-center gap-1 md:flex">
          {siteConfig.navigation.map((navigationItem) => (
            <Link
              key={navigationItem.href}
              href={navigationItem.href}
              className="rounded-full px-4 py-2.5 text-[15px] font-medium text-content-soft no-underline transition-colors hover:bg-surface-muted hover:text-content"
            >
              {navigationItem.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
        <span className="hidden sm:block">
          <ButtonLink href={siteConfig.downloadHref} size="medium">
            Baixar grátis
          </ButtonLink>
        </span>

        <details className="group relative md:hidden">
          <summary
            aria-label="Abrir menu"
            className="flex size-11 items-center justify-center rounded-full bg-primary text-on-primary"
          >
            <Menu size={20} aria-hidden="true" />
          </summary>
          <nav
            aria-label="Menu"
            className="absolute top-[56px] right-0 flex w-[min(84vw,300px)] flex-col gap-1 rounded-3xl border border-edge bg-surface p-3 shadow-[0_24px_48px_rgba(0,0,0,0.18)]"
          >
            {siteConfig.navigation.map((navigationItem) => (
              <Link
                key={navigationItem.href}
                href={navigationItem.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-content no-underline hover:bg-surface-muted"
              >
                {navigationItem.label}
              </Link>
            ))}
            <ButtonLink href={siteConfig.downloadHref} size="medium" className="mt-1 w-full">
              Baixar grátis
            </ButtonLink>
          </nav>
        </details>
      </Container>
    </header>
  );
}
