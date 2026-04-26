import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import CanadaWebringLogo from "@/components/ui/canada-webring-logo";

interface CanadaWebringProps {
  className?: string;
}

export default function CanadaWebring({ className = "" }: CanadaWebringProps) {
  const slug = "ricky-tang";
  const baseUrl = "https://webring.ca";

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <a
        href={`${baseUrl}/prev/${slug}`}
        title="prev"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-foreground hover:text-canada-webring transition-colors duration-200"
      >
        <IconArrowLeft stroke={2} className="w-5 h-5" />
      </a>

      <a
        href={baseUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Canada Webring"
        className="flex items-center text-foreground hover:text-canada-webring transition-colors duration-200"
      >
        <CanadaWebringLogo className="w-8 h-8" />
      </a>

      <a
        href={`${baseUrl}/next/${slug}`}
        title="next"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-foreground hover:text-canada-webring transition-colors duration-200"
      >
        <IconArrowRight stroke={2} className="w-5 h-5" />
      </a>
    </div>
  );
}
