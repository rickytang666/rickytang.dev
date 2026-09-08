"use client";

import { IconArrowDown } from "@tabler/icons-react";
import Link from "@/components/ui/link";

export default function ScrollToFooterLink() {
  return (
    <Link
      onClick={() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        window.dispatchEvent(new CustomEvent("animateFooterIcons"));
      }}
    >
      more <IconArrowDown stroke={1.5} className="w-5 h-5" />
    </Link>
  );
}
