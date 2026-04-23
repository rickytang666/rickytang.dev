"use client";

import React from "react";
import Image from "next/image";
import Link from "@/components/ui/link";
import { externalLinks } from "@/data/links";

export default function HeroSection() {
  return (
    <section className="py-10">
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-7 lg:gap-9">
        <h1 className="font-gaegu font-bold text-3xl sm:text-5xl text-foreground/65 mb-6">
          Hi there, I&apos;m Ricky :)
        </h1>

        <p className="font-medium text-lg sm:text-2xl text-foreground flex flex-wrap items-center gap-x-2">
          Software Engineering @{" "}
          <span className="inline-flex items-center gap-1.5">
            <Image src="/home/uwaterloo.svg" alt="" width={22} height={22} />
            <Link href={externalLinks.softwareEngineering}>UWaterloo</Link>
          </span>
        </p>

        <div className="flex flex-col gap-4 text-sm sm:text-base text-foreground mt-1">
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            Incoming @{" "}
            <span className="inline-flex items-center gap-1">
              <Image
                src="/home/hamming.png"
                alt=""
                width={18}
                height={18}
                className="rounded-sm"
              />
              <Link href="https://hamming.ai">Hamming AI (YC S24)</Link>
            </span>
          </p>
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            Engineering @{" "}
            <span className="inline-flex items-center gap-1">
              <Image
                src="/home/watai.jpg"
                alt=""
                width={18}
                height={18}
                className="rounded-sm"
              />
              <Link href="https://watai.ca">WAT.ai</Link>
            </span>{" "}
            ×{" "}
            <span className="inline-flex items-center gap-1">
              <Image
                src="/home/bindwell.jpg"
                alt=""
                width={18}
                height={18}
                className="rounded-sm"
              />
              <Link href="https://bindwell.ai">Bindwell (YC W25)</Link>
            </span>
          </p>
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            Engineering @{" "}
            <span className="inline-flex items-center gap-1">
              <Image
                src="/home/warg.png"
                alt=""
                width={18}
                height={18}
                className="rounded-sm"
              />
              <Link href="https://www.uwarg.com">WARG</Link>
            </span>
            {", "}
            <span className="inline-flex items-center gap-1">
              <Image src="/home/wato.svg" alt="" width={18} height={18} />
              <Link href="https://watonomous.ca">WATonomous</Link>
            </span>
          </p>
        </div>

        <p className="max-w-2xl text-sm sm:text-base text-foreground mt-4 leading-relaxed">
          I love taking slow processes and engineering them down to seconds.
          Currently focused on high-throughput RAG pipelines and scalable
          agentic systems.
        </p>

        <p className="text-sm sm:text-base text-foreground">
          Read{" "}
          <Link href="/about" isNextLink>
            more about me
          </Link>
          , and check out{" "}
          <Link href="/projects" isNextLink>
            my projects
          </Link>
          .
        </p>

        <p className="text-sm sm:text-base">
          ...psst! You can contact me in{" "}
          <Link
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            many ways
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
