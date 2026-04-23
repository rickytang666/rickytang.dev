import React from "react";
import Link from "@/components/ui/link";
import Image from "next/image";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Quota",
    description: (
      <>
        The first linter for your budget. 1st place overall at{" "}
        <span className="inline-block">
          <Image
            src="/projects/deltahacks_logo.svg"
            className="inline align-middle mx-1"
            alt=""
            width={16}
            height={16}
          />
          DeltaHacks 2026.
        </span>
      </>
    ),
    image: "/projects/quota1.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/dwseoh/Quota",
      },
    ],
  },
  {
    title: "Sneuz",
    description: (
      <>
        Brings back automatic sleep tracking Apple removed in iOS 18+. Set up
        once, never touch it again.
      </>
    ),
    image: "/projects/sneuz1.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/sneuz",
      },
      {
        name: "Website",
        url: "https://sneuz.rickytang.dev",
      },
    ],
  },
  {
    title: "Tark",
    description: (
      <>
        Google Earth for game devs. Converts any real-world location into
        textured .obj meshes in seconds.
      </>
    ),
    image: "/projects/tark1.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/tark",
      },
    ],
  },
  {
    title: "Auralis",
    description: [
      <>
        An AI doctor that talks with you in a video call. Best AI app built w/
        Cloudflare at{" "}
        <span className="inline-block">
          <Image
            src="/projects/hackwestern_logo.jpg"
            className="inline align-middle mx-1"
            alt=""
            width={16}
            height={16}
          />
          Hack Western 2025.
        </span>
      </>,
    ],
    image: "/projects/auralis1.jpeg",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/auralis",
      },
      {
        name: "Website",
        url: "https://stop-googling-symptoms.tech/",
      },
    ],
  },
  {
    title: "Post-It",
    description: (
      <>
        Leave persistent 3D notes in the real world via Snap Spectacles.
        Semi-finalist at{" "}
        <span className="inline-block">
          <Image
            src="/projects/htn_logo.jpg"
            className="inline align-middle mx-1"
            alt=""
            width={16}
            height={16}
          />
          Hack the North 2025.
        </span>
      </>
    ),
    image: "/projects/post1.jpg",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/post-it",
      },
    ],
  },
  {
    title: "Nebula",
    description: (
      <>
        Mobile notes app with camera import via OCR, semantic search, and LLM
        chat.
      </>
    ),
    image: "/projects/nebula.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/nebula",
      },
      {
        name: "TestFlight",
        url: "https://testflight.apple.com/join/9H8gv9a8",
      },
    ],
  },
  {
    title: "BrainLattice",
    description: (
      <>CLI + Web app that converts PDFs into fully linked Obsidian vaults.</>
    ),
    image: "/projects/brain1.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/brainlattice",
      },
      {
        name: "Website",
        url: "https://brainlattice.rickytang.dev/",
      },
    ],
  },
  {
    title: "FitSage",
    description: (
      <>
        Fitness tracker that turns messy diary entries into structured workout
        data, with AI workout curation.
      </>
    ),
    image: "/projects/fit1.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/fitsage",
      },
      {
        name: "Website",
        url: "https://www.fitsage.tech/",
      },
    ],
  },
];
