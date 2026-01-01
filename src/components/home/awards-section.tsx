"use client";

import React from "react";
import Image from "next/image";
import { IconAward } from "@tabler/icons-react";
import { awards } from "@/data/awards";

export default function AwardsSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
        <IconAward stroke={2} className="w-8 h-8 text-primary" />
        Awards
      </h2>
      <ul className="flex flex-col gap-6 ml-4 md:ml-6">
        {awards.map((award, index) => (
          <li key={index} className="flex items-center gap-3 text-foreground">
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image
                src={award.imgSrc}
                alt={award.imgAlt}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm sm:text-base md:text-lg font-semibold">
              <span>{award.title}</span>
              {" — "}
              <span className="text-primary">{award.result}</span>
              {award.additionalInfo && (
                <>
                  {" ("}
                  <span className="text-accent">{award.additionalInfo}</span>
                  {")"}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
