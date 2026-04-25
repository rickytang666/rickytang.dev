import Image from "next/image";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "BrainLattice",
    description:
      "CLI + Web app that converts PDFs into fully linked Obsidian vaults.",
    image: "/projects/brainlattice.png",
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
    title: "YapDraw",
    description: (
      <span>
        Wispr Flow for Excalidraw. Build Excalidraw diagrams entirely by voice.
        Winner at{" "}
        <span className="inline-block">
          <Image
            src="/projects/genai_genesis_logo.png"
            className="inline align-middle mx-1"
            alt=""
            width={13}
            height={13}
          />
          GenAI Genesis 2026.
        </span>
      </span>
    ),
    image: "/projects/yapdraw.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/yapdraw",
      },
      {
        name: "Website",
        url: "https://yapdraw.vercel.app/",
      },
    ],
  },
  {
    title: "Quota",
    description: (
      <span>
        The first linter for your budget. 1st place overall at{" "}
        <span className="inline-block">
          <Image
            src="/projects/deltahacks_logo.svg"
            className="inline align-middle mx-1"
            alt=""
            width={14}
            height={14}
          />
          DeltaHacks 2026.
        </span>
      </span>
    ),
    image: "/projects/quota.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/dwseoh/Quota",
      },
    ],
  },
  {
    title: "LeetRAG",
    description:
      "Claude Code, but for grinding LeetCode. It lives in your terminal and knows all your submissions history.",
    image: "/projects/leetrag.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/leetrag",
      },
    ],
  },
  {
    title: "Tark",
    description:
      "Google Earth for game devs. Converts any real-world location into textured .obj meshes in seconds.",
    image: "/projects/tark.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/tark",
      },
    ],
  },
  {
    title: "Prospector",
    description:
      "Discord bot that finds the perfect sponsors for your design team and cold emails them.",
    image: "/projects/prospector.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/prospector",
      },
    ],
  },
  {
    title: "Sneuz",
    description:
      "Brings back automatic sleep tracking Apple removed in iOS 18+. Set up once, never touch it again.",
    image: "/projects/sneuz.png",
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
    title: "DocBot",
    description:
      "A CLI tool that turns any codebase into a interactive knowledge map that you can actually navigate.",
    image: "/projects/docbot.png",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/ariobarin/docbot",
      },
    ],
  },
  {
    title: "Auralis",
    description: (
      <span>
        An AI doctor that talks with you in a video call. Best AI app built with
        Cloudflare at{" "}
        <span className="inline-block">
          <Image
            src="/projects/hackwestern_logo.jpg"
            className="inline align-middle mx-1 rounded-xs"
            alt=""
            width={14}
            height={14}
          />
          Hack Western 2025.
        </span>
      </span>
    ),
    image: "/projects/auralis.png",
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
      <span>
        Leave persistent 3D notes in the real world via Snap Spectacles.
        Semi-finalist at{" "}
        <span className="inline-block">
          <Image
            src="/projects/htn_logo.jpg"
            className="inline align-middle mx-1 rounded-xs"
            alt=""
            width={14}
            height={14}
          />
          Hack the North 2025.
        </span>
      </span>
    ),
    image: "/projects/post-it.jpg",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/post-it",
      },
    ],
  },
  {
    title: "Nebula",
    description:
      "Mobile notes app with camera import via OCR, semantic search, and LLM chat.",
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
    title: "FitSage",
    description:
      "Fitness tracker that turns messy diary entries into structured workout data, with AI workout curation.",
    image: "/projects/fitsage.png",
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
