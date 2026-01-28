"use client";
import { useTheme } from "@/hooks/useTheme";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between px-16 py-6">
      <strong>Fintech Pro</strong>

      <button
        className="border px-3 py-1 rounded"
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
