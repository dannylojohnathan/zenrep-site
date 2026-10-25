import Link from "next/link";
import { siteConfig } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-edge">
      <Container className="flex flex-col gap-8 pt-12 pb-6 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-[320px] flex-col gap-3">
          <BrandLogo size={30} />
          <p className="m-0 text-sm leading-6 text-content-soft">{siteConfig.tagline}. Grátis para Android e iPhone.</p>
        </div>
        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-x-12 gap-y-2">
          {siteConfig.footerLinks.map((footerLink) => (
            <Link
              key={footerLink.label}
              href={footerLink.href}
              className="py-1.5 text-[15px] font-medium text-content-soft no-underline hover:text-content"
            >
              {footerLink.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div
        aria-hidden="true"
        className="-mb-[0.18em] text-center text-[clamp(88px,24vw,340px)] leading-none font-extrabold tracking-[-0.07em] text-surface-muted select-none before:content-['ZenRep']"
      />
    </footer>
  );
}
