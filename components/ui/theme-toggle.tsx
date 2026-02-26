"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative inline-flex items-center justify-center
        w-10 h-10 rounded-lg
        border border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-neutral-900
        hover:bg-neutral-100 dark:hover:bg-neutral-800
        transition-colors
      "
    >
      <Sun
        className={`
          absolute h-5 w-5 text-yellow-500
          transition-all duration-300
          ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}
        `}
      />

      <Moon
        className={`
          absolute h-5 w-5 text-blue-400
          transition-all duration-300
          ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}
        `}
      />
    </button>
  );
}