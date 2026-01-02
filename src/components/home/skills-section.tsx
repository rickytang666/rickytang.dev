"use client";

import React, { useState } from "react";
import { IconTerminal2 } from "@tabler/icons-react";
import {
  languages,
  frameworks,
  librariesAndTools,
  databasesAndCloud,
} from "@/data/tech-skills";
import { cn } from "@/lib/utils";

type Category = "Languages" | "Frameworks" | "Libraries & Tools" | "DB & Cloud";

const categories: Category[] = [
  "Languages",
  "Frameworks",
  "Libraries & Tools",
  "DB & Cloud",
];

const skillsData: Record<Category, string[]> = {
  "Languages": languages,
  "Frameworks": frameworks,
  "Libraries & Tools": librariesAndTools,
  "DB & Cloud": databasesAndCloud,
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Category>("Languages");

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
        <IconTerminal2 stroke={2} className="w-8 h-8 text-primary" />
        Tech Skills
      </h2>

      <div className="flex flex-col gap-6">
        {/* mobile dropdown */}
        <div className="block sm:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as Category)}
            className="w-full p-2 rounded-md bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* desktop tabs */}
        <div className="hidden sm:flex flex-wrap gap-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-colors whitespace-nowrap",
                activeTab === category
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="flex flex-wrap gap-1 sm:gap-2 content-start">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="px-2 py-1 rounded-xl bg-card text-card-foreground text-xs md:text-sm font-medium border-[1.5px] border-border hover:text-primary hover:border-primary/50 transition-colors duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
