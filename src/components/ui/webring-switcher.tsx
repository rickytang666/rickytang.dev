"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SeWebring from "@/components/ui/se-webring";
import SeWebringLogo from "@/components/ui/se-webring-logo";
import Se30Webring from "@/components/ui/se30-webring";
import WaterlooWebring from "@/components/ui/waterloo-network";
import CanadaWebring from "@/components/ui/canada-webring";

interface WebringMember {
  name: string;
  website: string;
}

interface WebringSwitcherProps {
  waterlooMembers?: WebringMember[];
}

export default function WebringSwitcher({
  waterlooMembers,
}: WebringSwitcherProps) {
  const [index, setIndex] = useState(0);
  const [peek, setPeek] = useState(false);
  const [hovered, setHovered] = useState(false);

  // 0: se webring
  // 1: se30 webring
  // 2: waterloo webring
  const TOTAL_WEBRINGS = 4;

  // trackpad / wheel logic
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const cooldownRef = useRef(false);

  // keyboard navigation
  useEffect(() => {
    if (!hovered) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((prev) => Math.min(prev + 1, TOTAL_WEBRINGS - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hovered]);

  // peek animation when scrolling into view
  useEffect(() => {
    if (isInView) {
      // delay slightly so user sees it settle
      const timer = setTimeout(() => {
        setPeek(true);
        setTimeout(() => {
          setPeek(false);
        }, 400); // duration of peek
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  // trackpad / wheel logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // create a logic to detect horizontal swipe dominance
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault(); // stop browser back/forward

        // debounce/cooldown check
        if (cooldownRef.current) return;

        const threshold = 15; // sensitivity
        if (e.deltaX > threshold) {
          // scrolled right -> go next (restricted)
          setIndex((prev) => Math.min(prev + 1, TOTAL_WEBRINGS - 1));
          triggerCooldown();
        } else if (e.deltaX < -threshold) {
          // scrolled left -> go prev (restricted)
          setIndex((prev) => Math.max(prev - 1, 0));
          triggerCooldown();
        }
      }
    };

    const triggerCooldown = () => {
      cooldownRef.current = true;
      setTimeout(() => {
        cooldownRef.current = false;
      }, 750); // longer (to handle trackpad inertia)
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // touch logic (mobile swipe)
  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);
  // minimum swipe distance
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setIndex((prev) => Math.min(prev + 1, TOTAL_WEBRINGS - 1));
    } else if (isRightSwipe) {
      setIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const currentWebringName =
    index === 0
      ? "SE Webring"
      : index === 1
        ? "SE '30 Webring"
        : index === 2
          ? "Waterloo Network"
          : "Canada Webring";

  // calculate animation target
  // normal: -100% * index
  // peek (only works if index is 0): -22%
  const xValue = peek && index === 0 ? "-22%" : `-${index * 100}%`;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center gap-2 select-none w-[170px] relative p-2 rounded-xl border-2 transition-all duration-300 group
        ${
          peek
            ? "border-primary/40 bg-primary/10" // hint color during peek
            : "border-transparent hover:border-border/50"
        }`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex w-full"
          animate={{ x: xValue }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          {/* se webring */}
          <div className="min-w-full flex justify-center">
            <SeWebring
              prevHref="https://archangelinux.vercel.app/"
              webringHref="https://se-webring.xyz/"
              nextHref="https://davidhua.ca/"
              webringName="SE Webring"
              logo={<SeWebringLogo width={38} height={38} />}
            />
          </div>

          {/* se30 webring */}
          <div className="min-w-full flex justify-center">
            <Se30Webring domain="https://rickytang.dev" />
          </div>

          {/* waterloo webring */}
          <div className="min-w-full flex justify-center">
            <WaterlooWebring members={waterlooMembers} />
          </div>

          {/* canada webring */}
          <div className="min-w-full flex justify-center">
            <CanadaWebring />
          </div>
        </motion.div>
      </div>

      {/* pagination dots */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1.5 px-1">
          {[
            { i: 0, label: "Show SE Webring", active: "bg-primary" },
            { i: 1, label: "Show SE30 Webring", active: "bg-se30" },
            { i: 2, label: "Show Waterloo Network", active: "bg-waterloo-network" },
            { i: 3, label: "Show Canada Webring", active: "bg-canada-webring" },
          ].map(({ i, label, active }) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="p-[7px] group"
              aria-label={label}
            >
              <span className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === i
                  ? `${active} scale-110`
                  : "bg-muted-foreground/30 group-hover:bg-muted-foreground/50 group-hover:scale-110"
              }`} />
            </button>
          ))}
        </div>

        {/* Webring Name Label */}
        <span className="text-[10px] text-foreground/70 font-medium whitespace-nowrap">
          {currentWebringName}
        </span>
      </div>
    </div>
  );
}
