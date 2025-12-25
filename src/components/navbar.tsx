"use client";
import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import "@/styles/components.css";

// Icons
import {
  IconUser,
  IconHome,
  IconFolders,
  IconFileCv,
  IconLayoutSidebarRightExpandFilled,
  IconX,
} from "@tabler/icons-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:px-5 lg:py-5 flex justify-center">
        <div className="w-full lg:w-[75%] max-w-full">
          <div className="relative flex items-center justify-between h-20 px-4 lg:px-10 rounded-none lg:rounded-full bg-white/5 dark:bg-black/10 backdrop-filter backdrop-blur-md backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 dark:border-white/10 hover:border-teal-200/40 hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] transition-all duration-500 group overflow-hidden">
            {/* Specular highlight / Sheen */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

            {/* Bottom reflections */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 pointer-events-none" />
            {/* Content with relative positioning for 3D layering */}
            <div className="relative z-10 flex items-center justify-center mr-8">
              <Link href="/" className="px-2">
                <Image
                  src="/logo_ricfinity.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="h-10 lg:h-12 w-auto saturate-120 filter drop-shadow-lg"
                />
              </Link>
            </div>

            <div className="relative z-10 flex items-center">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6">
                <Link
                  href="/"
                  className={`${pathname === "/" ? "navlink-active" : "navlink"
                    } mix-blend-difference text-white dark:text-white/90 font-medium tracking-wide`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`${pathname === "/about" ? "navlink-active" : "navlink"
                    } mix-blend-difference text-white dark:text-white/90 font-medium tracking-wide`}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className={`${pathname === "/projects" ? "navlink-active" : "navlink"
                    } mix-blend-difference text-white dark:text-white/90 font-medium tracking-wide`}
                >
                  Projects
                </Link>
                <Link
                  href="/Ricky_Tang_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navlink mix-blend-difference text-white dark:text-white/90 font-medium tracking-wide"
                >
                  Resume
                </Link>
                <div className="mix-blend-normal">
                  <ThemeToggle />
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <IconLayoutSidebarRightExpandFilled
                  stroke={2}
                  className="w-8 h-8 text-foreground drop-shadow-md"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - rendered outside navbar to avoid constraints */}
      {isMounted && isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />

          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-[170px] bg-sidebar flex flex-col items-center">
            {/* Close button */}
            <div className="flex w-full justify-end p-4">
              <button
                onClick={closeMobileMenu}
                className="text-foreground transition-colors duration-200"
              >
                <IconX stroke={3} className="w-6 h-6" />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex w-full flex-col space-y-4 justify-items-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg text-foreground transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconHome stroke={2} className="w-5 h-5" />
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-2 text-lg text-foreground transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconUser stroke={2} className="w-5 h-5" />
                About
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-2 text-lg text-foreground transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconFolders stroke={2} className="w-5 h-5" />
                Projects
              </Link>
              <a
                href="/Ricky_Tang_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-foreground transition-colors duration-200 justify-center text-center"
                onClick={closeMobileMenu}
              >
                <IconFileCv stroke={2} className="w-5 h-5" />
                Resume
              </a>

              {/* Theme Toggle in Mobile Menu */}
              <div className="flex items-center text-lg text-foreground justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
