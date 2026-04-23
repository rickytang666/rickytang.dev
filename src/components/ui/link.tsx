"use client";

import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  isNextLink?: boolean;
  children: ReactNode;
  underlineWidth?: string;
  underlineOffset?: string;
}

export default function Link({
  className = "",
  href,
  onClick,
  isActive = false,
  isNextLink = false,
  children,
  underlineWidth = "1.75px",
  underlineOffset = "0px",
}: LinkProps) {
  const baseStyles = `
    relative
    inline-flex items-center
    text-foreground
    transition-all duration-300
    ${
      !isActive &&
      `
      after:absolute
      after:left-0
      after:bottom-[var(--ub)]
      after:h-[var(--uw)]
      after:w-full
      after:bg-border
      after:z-[1]
      before:absolute
      before:left-0
      before:bottom-[var(--ub)]
      before:h-[var(--uw)]
      before:w-full
      before:bg-primary
      before:opacity-70
      before:z-[2]
      hover:before:bg-primary
      hover:before:opacity-100
      hover:text-primary
      hover:before:[animation:sweep_2s_ease-in-out_infinite]
    `
    }
    ${className}
  `.trim();

  const style = {
    "--uw": underlineWidth,
    "--ub": underlineOffset === "0px" ? "0px" : `-${underlineOffset}`,
  } as React.CSSProperties;

  return (
    <>
      <style jsx global>{`
        @keyframes sweep {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.1% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
      `}</style>
      {onClick ? (
        <button onClick={onClick} className={baseStyles} style={style}>
          {children}
        </button>
      ) : isNextLink ? (
        <NextLink href={href!} className={baseStyles} style={style}>
          {children}
        </NextLink>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          style={style}
        >
          {children}
        </a>
      )}
    </>
  );
}
