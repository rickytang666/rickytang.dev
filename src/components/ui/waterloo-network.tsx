"use client";

import { useEffect, useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Se30WebringLogo from "@/components/ui/se30-webring-logo";

interface WaterlooNetworkProps {
  className?: string;
  user?: string;
}

interface WebringMember {
  name: string;
  website: string;
}

export default function WaterlooNetwork({
  className = "",
  user = "ricky-tang",
}: WaterlooNetworkProps) {
  const [members, setMembers] = useState<WebringMember[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebring = async () => {
      try {
        const response = await fetch(`https://www.uwaterloo.network/api/webring?user=${user}`);
        if (!response.ok) throw new Error("Failed to fetch webring");
        const data = await response.json();
        
        if (data.members && data.members.length > 0) {
          setMembers(data.members);
          // Start at random index, like the script does
          setIndex(Math.floor(Math.random() * data.members.length));
        }
      } catch (error) {
        console.error("Webring error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebring();
  }, [user]);

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

  const isDisabled = loading || members.length === 0;

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
