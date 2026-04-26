"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSearch,
  IconHome,
  IconUser,
  IconFolder,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileText,
  IconCalendar,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import { externalLinks } from "@/data/links";

const EMAIL = "rickytangdev@gmail.com";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CommandPalette({
  open,
  onOpenChange,
}: CommandPaletteProps) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chordRef = useRef<string | null>(null);
  const chordTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const routerRef = useRef(router);
  const onOpenChangeRef = useRef(onOpenChange);
  const isMobile = useIsMobile();
  const isDark = theme === "dark";

  useEffect(() => {
    routerRef.current = router;
  }, [router]);
  useEffect(() => {
    onOpenChangeRef.current = onOpenChange;
  }, [onOpenChange]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(true);
      }
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  // R → H/A/P sequence, global
  useEffect(() => {
    const routes: Record<string, string> = {
      h: "/",
      a: "/about",
      p: "/projects",
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
      const key = e.key.toLowerCase();
      if (key === "r") {
        chordRef.current = "r";
        if (chordTimerRef.current) clearTimeout(chordTimerRef.current);
        chordTimerRef.current = setTimeout(() => {
          chordRef.current = null;
        }, 800);
      } else if (chordRef.current === "r" && routes[key]) {
        if (chordTimerRef.current) clearTimeout(chordTimerRef.current);
        chordRef.current = null;
        e.preventDefault();
        routerRef.current.push(routes[key]);
        onOpenChangeRef.current(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // focus input on desktop
  useEffect(() => {
    if (open && !isMobile) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open, isMobile]);

  const close = () => onOpenChange(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // fallback for non-secure contexts
      const el = document.createElement("input");
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    close();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigate = (href: string) => {
    router.push(href);
    close();
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
    close();
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    close();
  };

  const panelVariants = isMobile
    ? {
        hidden: { y: "100%" },
        visible: { y: 0 },
        exit: { y: "100%" },
      }
    : {
        hidden: { opacity: 0, scale: 0.97, y: -6 },
        visible: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.97, y: -6 },
      };

  const itemClass =
    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer text-foreground/80 aria-selected:bg-primary/10 aria-selected:text-primary transition-colors duration-100 outline-none";

  const groupClass =
    "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground/40 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:select-none";

  if (!mounted) return null;

  return createPortal(
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 z-[200] bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={close}
            />

            {/* panel */}
            <motion.div
              className={`fixed z-[201] bg-background border border-border shadow-xl overflow-hidden ${
                isMobile
                  ? "bottom-0 left-0 right-0 rounded-t-2xl"
                  : "top-[18%] left-1/2 -translate-x-1/2 w-full max-w-lg rounded-xl"
              }`}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              {/* mobile drag handle */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 rounded-full bg-foreground/20" />
                </div>
              )}

              <Command>
                {/* search bar */}
                <div className="flex items-center gap-2 px-4 border-b border-border">
                  <IconSearch
                    stroke={2}
                    className="w-4 h-4 text-foreground/50 shrink-0"
                  />
                  <Command.Input
                    ref={inputRef}
                    placeholder="Search..."
                    className="flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-foreground/40"
                  />
                  {!isMobile && (
                    <kbd className="shrink-0 font-mono text-[11px] text-foreground/70 bg-foreground/15 px-1.5 py-0.5 rounded-sm">
                      ESC
                    </kbd>
                  )}
                </div>

                <Command.List
                  className="overflow-y-auto scroll-smooth overscroll-contain scrollbar-thin p-2 max-h-[58vh] sm:max-h-72"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor:
                      "oklch(from var(--foreground) l c h / 0.15) transparent",
                  }}
                >
                  <Command.Empty className="py-8 text-center text-sm text-foreground/50">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Navigate" className={groupClass}>
                    {[
                      {
                        id: "home",
                        label: "Home",
                        icon: IconHome,
                        href: "/",
                        shortcut: ["R", "H"],
                      },
                      {
                        id: "about",
                        label: "About",
                        icon: IconUser,
                        href: "/about",
                        shortcut: ["R", "A"],
                      },
                      {
                        id: "projects",
                        label: "Projects",
                        icon: IconFolder,
                        href: "/projects",
                        shortcut: ["R", "P"],
                      },
                    ].map(({ id, label, icon: Icon, href, shortcut }) => (
                      <Command.Item
                        key={id}
                        value={label}
                        onSelect={() => navigate(href)}
                        className={itemClass}
                      >
                        <Icon stroke={2} className="w-4 h-4 shrink-0" />
                        <span className="flex-1">{label}</span>
                        {!isMobile && (
                          <span className="flex items-center gap-1">
                            <kbd className="font-mono text-xs text-foreground/70 bg-foreground/10 px-1.5 py-0.5 rounded-sm">
                              {shortcut[0]}
                            </kbd>
                            <span className="text-xs text-foreground/50">
                              then
                            </span>
                            <kbd className="font-mono text-xs text-foreground/70 bg-foreground/10 px-1.5 py-0.5 rounded-sm">
                              {shortcut[1]}
                            </kbd>
                          </span>
                        )}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group heading="Links" className={groupClass}>
                    <Command.Item
                      value="Copy Email"
                      onSelect={copyEmail}
                      className={itemClass}
                    >
                      <IconMail stroke={2} className="w-4 h-4 shrink-0" />
                      Copy Email
                    </Command.Item>
                    {[
                      {
                        id: "github",
                        label: "GitHub",
                        icon: IconBrandGithub,
                        url: externalLinks.github,
                      },
                      {
                        id: "linkedin",
                        label: "LinkedIn",
                        icon: IconBrandLinkedin,
                        url: externalLinks.linkedin,
                      },
                      {
                        id: "resume",
                        label: "Resume",
                        icon: IconFileText,
                        url: "/Ricky_Tang_resume.pdf",
                      },
                      {
                        id: "calcom",
                        label: "Book a Call",
                        icon: IconCalendar,
                        url: externalLinks.calcom,
                      },
                    ].map(({ id, label, icon: Icon, url }) => (
                      <Command.Item
                        key={id}
                        value={label}
                        onSelect={() => openLink(url)}
                        className={itemClass}
                      >
                        <Icon stroke={2} className="w-4 h-4 shrink-0" />
                        {label}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Group heading="Appearance" className={groupClass}>
                    <Command.Item
                      value={isDark ? "Switch to Light" : "Switch to Dark"}
                      onSelect={toggleTheme}
                      className={itemClass}
                    >
                      {isDark ? (
                        <IconSun stroke={2} className="w-4 h-4 shrink-0" />
                      ) : (
                        <IconMoon stroke={2} className="w-4 h-4 shrink-0" />
                      )}
                      {isDark ? "Switch to Light" : "Switch to Dark"}
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* copy toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] bg-foreground/80 text-background text-xs font-medium px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            email copied!
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.body,
  );
}
