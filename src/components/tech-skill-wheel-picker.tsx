"use client";

import React, { useState, useSyncExternalStore, useMemo } from "react";
import Image from "next/image";
import { WheelPicker, WheelPickerWrapper } from "@/components/wheel-picker";
import { cn } from "@/lib/utils";

interface TechSkill {
  name: string;
  icon: string;
  alt: string;
}

interface TechWheelPickerProps {
  skills: TechSkill[];
  className?: string;
}

export default function TechWheelPicker({
  skills,
  className,
}: TechWheelPickerProps) {
  const initialValue = useMemo(() => skills[0]?.name || "", [skills]);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const options = skills.map((skill) => ({
    value: skill.name,
    label: (
      <div className="flex items-center gap-2">
        <Image src={skill.icon} alt={skill.alt} width={40} height={40} />
        <span>{skill.name}</span>
      </div>
    ),
  }));

  if (!isClient) {
    return <div className={className}>Loading...</div>;
  }

  return (
    <div className={cn("w-7/10 sm:w-1/2 md:w-3/4", className)}>
      <WheelPickerWrapper>
        <WheelPicker
          options={options}
          value={selectedValue}
          onValueChange={setSelectedValue}
          visibleCount={16}
          dragSensitivity={20}
          optionItemHeight={65}
        />
      </WheelPickerWrapper>
    </div>
  );
}
