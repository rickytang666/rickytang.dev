import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { ReactNode } from "react";

interface SeWebringProps {
  prevHref: string;
  nextHref: string;
  webringHref: string;
  webringName?: string;
  logo: ReactNode;
  className?: string;
}

export default function SeWebring({
  prevHref,
  nextHref,
  webringHref,
  webringName = "Webring",
  logo,
  className = "",
}: SeWebringProps) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {/* previous site */}
      <a
        href={prevHref}
        target="_blank"
        rel="noopener noreferrer"
        title="previous"
        className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
      >
        <IconArrowLeft stroke={2} className="w-5 h-5" />
      </a>

      {/* webring logo */}
      <a
        href={webringHref}
        target="_blank"
        rel="noopener noreferrer"
        title={webringName}
        className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
      >
        {logo}
      </a>

      {/* next site */}
      <a
        href={nextHref}
        target="_blank"
        rel="noopener noreferrer"
        title="next"
        className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
      >
        <IconArrowRight stroke={2} className="w-5 h-5" />
      </a>
    </div>
  );
}
