"use client";

import { IconArrowDown } from "@tabler/icons-react";
import Link from "@/components/ui/link";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export default function ScrollToFooterLink() {
  return (
    <Link
      onClick={() => {
        const shouldReduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
        window.dispatchEvent(new CustomEvent("animateFooterIcons"));
      }}
    >
      more <IconArrowDown stroke={1.5} className="w-5 h-5" />
    </Link>
  );
}
