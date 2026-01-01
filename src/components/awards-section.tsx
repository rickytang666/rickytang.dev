"use client";

import React from "react";
import { IconAward } from "@tabler/icons-react";
import AwardCard from "@/components/award-card";

export default function AwardsSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
        <IconAward stroke={2} className="w-8 h-8 text-primary" />
        Awards
      </h2>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center sm:justify-start">
        <AwardCard
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
          imgAlt="Canadian Team Mathematics Competition"
          title="2025 Canadian Team Mathematics Competition"
          result="3rd Place"
        />
        <AwardCard
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
          imgAlt="Canadian Team Mathematics Competition"
          title="2025 Euclid Mathematics Contest"
          result="Top 5%"
        />
        <AwardCard
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
          imgAlt="Canadian Team Mathematics Competition"
          title="2024 Canadian Senior Mathematics Contest"
          result="Top 2%"
        />
        <AwardCard
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Centre_for_Education_in_Mathematics_and_Computing_logo.svg/1600px-Centre_for_Education_in_Mathematics_and_Computing_logo.svg.png?20221128005800"
          imgAlt="Canadian Team Mathematics Competition"
          title="2024 Fermat Mathematics Contest"
          result="Top 2%"
          additionalInfo="Honour Roll"
        />
      </div>
    </section>
  );
}
