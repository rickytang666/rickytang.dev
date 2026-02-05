"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SeWebring from "@/components/ui/se-webring";
import SeWebringLogo from "@/components/ui/se-webring-logo";
import Se30Webring from "@/components/ui/se30-webring";

export default function WebringSwitcher() {
  const [index, setIndex] = useState(0);

  // 0: se webring
  // 1: se30 webring
  
  return (
    <div className="flex flex-col items-center gap-2 select-none w-[116px] relative touch-pan-y overscroll-x-contain p-2 rounded-xl transition-colors hover:bg-muted/30">
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
      <div className="flex gap-1.5 p-1">
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
              ? "bg-[#FFCE1A] scale-110" 
              : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
          }`}
          aria-label="Show SE30 Webring"
        />
      </div>
    </div>
  );
}
