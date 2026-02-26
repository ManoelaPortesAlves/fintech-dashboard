"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header
      className="
        h-16 px-6
        flex items-center justify-between
        bg-background/70 backdrop-blur-xl
        border-b border-border/50
      "
    >
      <h2 className="font-semibold text-lg">
        Dashboard
      </h2>

      <ThemeToggle />
    </header>
  );
}