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

type Category = "Languages" | "Frameworks" | "Libraries & Tools" | "Databases & Cloud";

const categories: Category[] = [
  "Languages",
  "Frameworks",
  "Libraries & Tools",
  "Databases & Cloud",
];

const skillsData: Record<Category, string[]> = {
  "Languages": languages,
  "Frameworks": frameworks,
  "Libraries & Tools": librariesAndTools,
  "Databases & Cloud": databasesAndCloud,
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
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors whitespace-nowrap",
                activeTab === category
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-transparent text-muted-foreground hover:bg-secondary/50 hover:text-secondary-foreground border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-md bg-zinc-800 text-zinc-100 text-sm sm:text-base font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
