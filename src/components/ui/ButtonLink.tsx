import Link from "next/link";
import type { ReactNode } from "react";

const variantClasses = {
  primary: "bg-primary text-on-primary hover:opacity-90 hover:text-on-primary",
  secondary: "border border-edge bg-surface text-content hover:bg-surface-muted hover:text-content",
  accent: "bg-on-accent text-accent hover:opacity-90 hover:text-accent",
} as const;

const sizeClasses = {
  medium: "h-11 px-5 text-[15px]",
  large: "h-14 px-7 text-base",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "large",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap no-underline transition ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
