"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("jl-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button
      type="button"
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/80"
    >
      {mounted && isDark ? (
        <>
          <SunMedium className="h-4 w-4 text-accent-500" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <MoonStar className="h-4 w-4 text-accent-600" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
}