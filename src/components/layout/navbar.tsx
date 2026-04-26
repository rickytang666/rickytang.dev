"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconLayoutSidebarRightExpandFilled,
  IconX,
  IconSearch,
} from "@tabler/icons-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import CommandPalette from "@/components/ui/command-palette";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/Ricky_Tang_resume.pdf", label: "Resume", external: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-8 py-6">
        <Link href="/">
          <Image
            src="/logo_ricfinity.png"
            alt="RicFinity"
            width={150}
            height={150}
            className="h-7 sm:h-8 lg:h-9 w-auto"
            priority
          />
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label, external }) => {
            const isActive = !external && pathname === href;
            return (
              <Link
                key={href}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`text-foreground font-medium text-base${isActive ? " underline underline-offset-4 decoration-2" : ""}`}
              >
                {label}
              </Link>
            );
          })}
          <button
            onClick={() => setPaletteOpen(true)}
            className="text-foreground/70 hover:text-foreground transition-colors duration-200"
            aria-label="Open command palette"
          >
            <IconSearch stroke={2} className="w-5 h-5" />
          </button>
          <ThemeToggle />
        </div>

        {/* mobile right-side buttons */}
        <div className="sm:hidden flex items-center gap-1">
          <button
            onClick={() => setPaletteOpen(true)}
            className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
            aria-label="Open command palette"
          >
            <IconSearch stroke={2} className="w-6 h-6" />
          </button>
          <button
            className="p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <IconLayoutSidebarRightExpandFilled
              stroke={2}
              className="w-6 h-6 text-foreground"
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-48 bg-background border-l border-border flex flex-col p-6 gap-6">
            <button onClick={() => setMobileOpen(false)} className="self-end">
              <IconX stroke={2} className="w-5 h-5 text-foreground" />
            </button>
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`text-foreground font-medium text-lg${isActive ? " underline underline-offset-4 decoration-2" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      )}

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
