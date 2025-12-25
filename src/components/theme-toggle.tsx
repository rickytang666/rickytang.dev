"use client";

import * as React from "react";
import { IconSun, IconMoon, IconDeviceDesktop } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-1 p-1 bg-sidebar rounded-full border border-sidebar-border">
        <button
          className="p-2 rounded-full transition-all duration-200"
          aria-label="System theme"
        >
          <IconDeviceDesktop stroke={2} className="h-4 w-4" />
        </button>
        <button
          className="p-2 rounded-full transition-all duration-200"
          aria-label="Light theme"
        >
          <IconSun stroke={2} className="h-4 w-4" />
        </button>
        <button
          className="p-2 rounded-full transition-all duration-200"
          aria-label="Dark theme"
        >
          <IconMoon stroke={2} className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-sidebar text-foreground rounded-full border border-sidebar-border shadow-sm">
      {/* System Theme */}
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === "system"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`}
        aria-label="System theme"
        title="Use system theme"
      >
        <IconDeviceDesktop stroke={2} className="h-5 w-5" />
      </button>

      {/* Light Theme */}
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === "light"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`}
        aria-label="Light theme"
        title="Light theme"
      >
        <IconSun stroke={2} className="h-5 w-5" />
      </button>

      {/* Dark Theme */}
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition-all duration-300 ${
          theme === "dark"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        }`}
        aria-label="Dark theme"
        title="Dark theme"
      >
        <IconMoon stroke={2} className="h-5 w-5" />
      </button>
    </div>
  );
}
