"use client";

import React from "react";
import Image from "next/image";
import Link from "@/components/ui/link";
import ViewMoreButton from "@/components/ui/view-more-button";
import { externalLinks } from "@/data/links";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";

export default function HeroSection() {
  return (
    <section>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-8 sm:mb-10 md:mb-12">
        Hey, I&apos;m Ricky 👋
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold mb-8 sm:mb-10 text-foreground">
        I build high-throughput AI systems with robust infra.
      </h2>

      <div className="flex flex-col items-center gap-5 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-foreground font-medium px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="text-center">Software Engineering at</span>
          <div className="inline-flex items-center gap-1">
            <Image src="/home/uwaterloo.svg" alt="" width={22} height={22} />
            <Link href={externalLinks.softwareEngineering} className="font-semibold">
              UWaterloo
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="text-center">Incoming SWE at</span>
          <div className="inline-flex items-center gap-1">
            <Image src="/home/hamming.png" alt="" width={19} height={19} />
            <Link href="https://hamming.ai" className="font-semibold">
              Hamming AI (YC S24)
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="text-center">Engineering at</span>
          <div className="inline-flex items-center gap-1">
            <Image src="/home/watai.jpg" alt="" width={22} height={22} />
            <Link href="https://watai.ca" className="font-semibold">
              WAT.ai
            </Link>
          </div>
          <span className="text-center font-normal text-lg sm:text-xl md:text-2xl">×</span>
          <div className="inline-flex items-center gap-1">
            <Image src="/home/bindwell.jpg" alt="" width={22} height={22} />
            <Link href="https://bindwell.ai" className="font-semibold">
              Bindwell (YC W25)
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <span className="text-center">Engineering at</span>
          <div className="inline-flex items-center gap-1">
            <Image src="/home/warg.png" alt="" width={19} height={19} />
            <Link href="https://www.uwarg.com" className="font-bold underline decoration-primary/50 underline-offset-4">WARG</Link>
          </div>
          <span className="text-center">and</span>
          <div className="inline-flex items-center gap-1">
            <Image src="/home/wato.svg" alt="" width={19} height={19} />
            <Link href="https://watonomous.ca" className="font-semibold">
              WATonomous
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-foreground text-center leading-relaxed">
          I love taking slow processes and engineering them down to seconds. Currently focused on <span className="font-semibold">absurdly</span> high-bar RAG pipelines and <span className="font-semibold">scalable</span> agentic workflows.
        </p>
      </div>
      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-8 md:mb-10 justify-center">
        <a
          href={externalLinks.github}
          target="_blank"
          className="text-sm sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
        >
          <IconBrandGithub stroke={2} className="w-5 h-5" />
          GitHub
        </a>
        <a
          href={externalLinks.linkedin}
          target="_blank"
          className="text-sm sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
        >
          <IconBrandLinkedin stroke={2} className="w-5 h-5" />
          LinkedIn
        </a>
        <a
          href="/Ricky_Tang_resume.pdf"
          target="_blank"
          className="text-sm sm:text-lg flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
        >
          <IconFileCv stroke={2} className="w-5 h-5" />
          Resume
        </a>
      </div>
      <div className="flex justify-center">
        <ViewMoreButton href="/about">More about me</ViewMoreButton>
      </div>
    </section>
  );
}
