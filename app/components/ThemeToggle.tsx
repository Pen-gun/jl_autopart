"use client";

import { MoonStar, SunMedium, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("jl-theme") as Theme | null;
    const resolved = stored || "system";
    setTheme(resolved);
    applyTheme(resolved);
  }, []);

  const applyTheme = (t: Theme) => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = t === "dark" || (t === "system" && prefersDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  };

  const cycleTheme = () => {
    setTheme((current) => {
      const next = current === "light" ? "dark" : current === "dark" ? "system" : "light";
      localStorage.setItem("jl-theme", next);
      applyTheme(next);
      return next;
    });
  };

  const Icon = theme === "light" ? SunMedium : theme === "dark" ? MoonStar : Monitor;
  const label = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";

  return (
    <button
      type="button"
      aria-label={`Theme: ${label}. Click to cycle.`}
      onClick={cycleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/80"
    >
      {mounted && <Icon className="h-4 w-4 text-accent-500" />}
    </button>
  );
}