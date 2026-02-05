"use client";

import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Se30WebringLogo from "@/components/ui/se30-webring-logo";

interface Se30WebringProps {
  className?: string;
  domain?: string; // used for SSR/SEO
}

export default function Se30Webring({
  className = "",
  domain,
}: Se30WebringProps) {
  const [currentUrl, setCurrentUrl] = useState(domain || "");

  useEffect(() => {
    // if no domain prop, use the actual window location on client
    if (!domain) {
      const timer = setTimeout(() => {
        setCurrentUrl(window.location.href);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [domain]);

  const baseUrl = "https://se30webring.com";
  
  const prevHref = currentUrl
    ? `${baseUrl}?from=${currentUrl}&dir=prev`
    : baseUrl;
  const nextHref = currentUrl
    ? `${baseUrl}?from=${currentUrl}&dir=next`
    : baseUrl;

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* previous */}
      <a
        href={prevHref}
        title="previous"
        className="flex items-center text-foreground hover:text-[#FFCE1A] transition-colors duration-200"
      >
        <IconArrowLeft stroke={2} className="w-5 h-5" />
      </a>

      {/* logo */}
      <a
        href={baseUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="SE '30 Webring"
        className="flex items-center text-foreground hover:text-[#FFCE1A] transition-colors duration-200"
      >
        <Se30WebringLogo className="w-8 h-8" />
      </a>

      {/* next */}
      <a
        href={nextHref}
        title="next"
        className="flex items-center text-foreground hover:text-[#FFCE1A] transition-colors duration-200"
      >
        <IconArrowRight stroke={2} className="w-5 h-5" />
      </a>
    </div>
  );
}
