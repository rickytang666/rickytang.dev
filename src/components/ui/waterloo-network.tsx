"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useEffect, useRef } from "react";
import Se30WebringLogo from "@/components/ui/se30-webring-logo";

interface WebringMember {
  name: string;
  website: string;
}

interface WaterlooNetworkProps {
  className?: string;
  members?: WebringMember[];
}

const EMPTY_MEMBERS: WebringMember[] = [];

export default function WaterlooNetwork({
  className = "",
  members = EMPTY_MEMBERS,
}: WaterlooNetworkProps) {
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = members.length > 0 ? Math.floor(Math.random() * members.length) : 0;
  }, [members]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (members.length === 0) return;

    const newIndex = (indexRef.current - 1 + members.length) % members.length;
    indexRef.current = newIndex;
    window.open(members[newIndex].website, "_blank", "noopener,noreferrer");
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (members.length === 0) return;

    const newIndex = (indexRef.current + 1) % members.length;
    indexRef.current = newIndex;
    window.open(members[newIndex].website, "_blank", "noopener,noreferrer");
  };

  const isDisabled = members.length === 0;

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      {/* previous */}
      <button
        onClick={handlePrev}
        disabled={isDisabled}
        title="prev"
        className="flex items-center text-foreground hover:text-waterloo-network transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IconArrowLeft stroke={2} className="w-5 h-5" />
      </button>

      {/* logo */}
      <a
        href="https://www.uwaterloo.network"
        target="_blank"
        rel="noopener noreferrer"
        title="Waterloo Network"
        className="flex items-center text-foreground hover:text-waterloo-network transition-colors duration-200"
      >
        <Se30WebringLogo className="w-8 h-8" />
      </a>

      {/* next */}
      <button
        onClick={handleNext}
        disabled={isDisabled}
        title="next"
        className="flex items-center text-foreground hover:text-waterloo-network transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IconArrowRight stroke={2} className="w-5 h-5" />
      </button>
    </div>
  );
}
