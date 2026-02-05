"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SeWebring from "@/components/ui/se-webring";
import SeWebringLogo from "@/components/ui/se-webring-logo";
import Se30Webring from "@/components/ui/se30-webring";

export default function WebringSwitcher() {
  const [index, setIndex] = useState(0);

  // 0: se webring
  // 1: se30 webring
  
  // trackpad / wheel logic
  const containerRef = useRef<HTMLDivElement>(null);
  const cooldownRef = useRef(false);

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
           // scrolled right -> go next
           setIndex((prev) => (prev === 0 ? 1 : prev));
           triggerCooldown();
        } else if (e.deltaX < -threshold) {
           // scrolled left -> go prev
           setIndex((prev) => (prev === 1 ? 0 : prev));
           triggerCooldown();
        }
      }
    };

    const triggerCooldown = () => {
      cooldownRef.current = true;
      setTimeout(() => {
        cooldownRef.current = false;
      }, 250); // 250ms cooldown
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

    if (isLeftSwipe && index === 0) {
      setIndex(1);
    } else if (isRightSwipe && index === 1) {
      setIndex(0);
    }
  };

  const currentWebringName = index === 0 ? "SE Webring" : "SE '30 Webring";

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center gap-2 select-none w-[116px] relative p-2 rounded-xl border-2 border-transparent hover:border-2 hover:border-sidebar-border/70 hover:bg-primary/2"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex w-full"
          animate={{ x: index === 0 ? "0%" : "-100%" }}
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
        </motion.div>
      </div>

      {/* pagination dots */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2 px-1">
          <button
            onClick={() => setIndex(0)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === 0 
                ? "bg-primary scale-110" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
            }`}
             aria-label="Show SE Webring"
          />
          <button
           onClick={() => setIndex(1)}
           className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === 1 
                ? "bg-se30 scale-110" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
            }`}
            aria-label="Show SE30 Webring"
          />
        </div>
        
        {/* Webring Name Label */}
        <span className="text-[10px] text-foreground/70 font-medium whitespace-nowrap">
          {currentWebringName}
        </span>
      </div>
    </div>
  );
}
