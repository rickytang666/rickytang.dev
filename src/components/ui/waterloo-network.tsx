"use client";

import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Se30WebringLogo from "@/components/ui/se30-webring-logo";

interface WebringMember {
  name: string;
  website: string;
}

interface WaterlooNetworkProps {
  className?: string;
  members?: WebringMember[];
}

export default function WaterlooNetwork({
  className = "",
  members = [], // default to empty if not passed
}: WaterlooNetworkProps) {
  const [index, setIndex] = useState(0);

  // initialize randomized index only on client to avoid hydration mismatch
  useEffect(() => {
    if (members.length > 0) {
      setTimeout(() => {
        setIndex(Math.floor(Math.random() * members.length));
      }, 0);
    }
  }, [members]); // re-run if members change (e.g. initial load)

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (members.length === 0) return;
    
    // logic from script: (currentIndex - 1 + length) % length
    const newIndex = (index - 1 + members.length) % members.length;
    setIndex(newIndex);
    window.open(members[newIndex].website, '_blank');
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (members.length === 0) return;
    
    // logic from script: (currentIndex + 1) % length
    const newIndex = (index + 1) % members.length;
    setIndex(newIndex);
    window.open(members[newIndex].website, '_blank');
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
