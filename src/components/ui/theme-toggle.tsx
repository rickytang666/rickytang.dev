"use client";

import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-5 h-5" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-foreground/70 hover:text-foreground transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IconMoon stroke={2} className="w-5 h-5" />
      ) : (
        <IconSun stroke={2} className="w-5 h-5" />
      )}
    </button>
  );
}
