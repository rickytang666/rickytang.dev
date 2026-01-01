"use client";

import React from "react";
import { IconTerminal2, IconCode, IconTool } from "@tabler/icons-react";
import TechWheelPicker from "@/components/tech-skill-wheel-picker";
import { languages, tools } from "@/data/tech-skills";

export default function SkillsSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-15 flex items-center gap-2 text-foreground">
        <IconTerminal2 stroke={2} className="w-8 h-8 text-primary" />
        Tech Skills
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex justify-center items-center gap-2 text-foreground">
            <IconCode stroke={2} className="w-6 h-6 text-primary" />
            Languages
          </h3>
          <TechWheelPicker skills={languages} />
        </div>
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex justify-center items-center gap-2 text-foreground">
            <IconTool stroke={2} className="w-6 h-6 text-primary" />
            Tools / Technologies
          </h3>
          <TechWheelPicker skills={tools} />
        </div>
      </div>
    </section>
  );
}
