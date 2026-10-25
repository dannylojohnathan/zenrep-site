"use client";

import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function currentTheme(): "light" | "dark" {
  const chosenTheme = document.documentElement.dataset.theme;
  if (chosenTheme === "light" || chosenTheme === "dark") return chosenTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  function toggleTheme() {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // sem storage (aba privada): o tema vale só nesta visita
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema claro e escuro"
      className="flex size-11 flex-none items-center justify-center rounded-full border border-edge bg-surface text-content transition-colors hover:bg-surface-muted"
    >
      <Sun size={19} aria-hidden="true" className="hidden dark:block" />
      <Moon size={19} aria-hidden="true" className="block dark:hidden" />
    </button>
  );
}
