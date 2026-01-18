import React from "react";
import Link from "@/components/ui/link";
import Image from "next/image";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Quota",
    stack: [
      "VS Code API",
      "LangChain",
      "Next.js",
      "FastAPI",
      "MongoDB",
      "Gemini",
      "GCP",
    ],
    description: [
      <>
        VS Code extension with real-time financial intelligence. Maximize cost efficiency before you even git commit: inline cost annotations, scale stimulations, and optimization suggestions for APIs, DB queries, and cloud/infra. Plus a web sandbox to plan architecture with LLM considering budget/scale. 🥇 Won 1st place overall at {" "}
        <span className="inline-block">
          <Image src="/projects/deltahacks_logo.svg" className="inline align-middle mx-1" alt="" width={20} height={20} />
          <Link href="https://deltahacks.com/">DeltaHacks 2026.</Link>
        </span>
      </>,
    ],
    images: [
      "/projects/quota1.png",
      "/projects/quota2.png",
      "/projects/quota3.png",
      "/projects/quota4.png",
      "/projects/quota5.png",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/dwseoh/Quota",
      },
    ],
  },
  {
    title: "Sneuz",
    stack: [
      "Swift",
      "SwiftUI",
      "Supabase",
      "Apple HealthKit",
      "Apple WidgetKit",
      "Next.js",
    ],
    description: [
      <>
        An iOS app that brings back automatic sleep tracking, which Apple removed in iOS 18+. It uses{" "}
        <span className="inline-block">
          <Image src="/projects/shortcuts_logo.png" className="inline align-middle mx-1" alt="" width={20} height={20} />
          <Link href="https://apps.apple.com/us/app/shortcuts/id915249334">Apple Shortcuts</Link>
        </span>{" "}
        automation to log sleep/wake times hands-free, visualizes detailed analysis on web dashboard, and exports to{" "}
        <span className="inline-block">
          <Image src="/projects/apple_health_logo.png" className="inline align-middle mx-1" alt="" width={20} height={20} />
          <Link href="https://www.apple.com/health/">Apple Health</Link>
        </span>{" "}
        in one tap. Set up once, never need to touch it again.
      </>,
    ],
    images: [
      "/projects/sneuz1.png",
      "/projects/sneuz2.png",
      "/projects/sneuz3.png",
    ],
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
    stack: [
      "Next.js",
      "FastAPI",
      "SciPy",
      "Leaflet",
      "NumPy",
      "Tailwind CSS",
    ],
    description: [
      <>
        Google Earth for game devs. Converts ANY real-world location into game-ready 3D meshes in seconds. Pulls elevation data and satellite imagery from {" "}
        <span className="inline-block">
          <Image src="/projects/mapbox_logo.png" className="inline align-middle mx-1" alt="" width={20} height={20} />
          <Link href="https://mapbox.com/">Mapbox</Link>
        </span>
        {" "}
        and
        {" "}
        <span className="inline-block">
          <Image src="/projects/osm_logo.png" className="inline align-middle mx-1" alt="" width={20} height={20} />
          <Link href="https://openstreetmap.org/">OpenStreetMap</Link>
        </span>
        , then generates textured .obj files for Unity/Blender/Unreal.
      </>,
    ],
    images: [
      "/projects/tark1.png",
      "/projects/tark2.png",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/tark",
      },
    ],
  },
  {
    title: "Auralis",
    stack: [
      "Next.js",
      "FastAPI",
      "Cloudflare",
      "Three.js",
      "Railway",
      "Blender",
      "Tailwind CSS",
    ],
    description: [
      <>
        AI doctor with a 3D avatar that adapts to your facial expressions during consultations. Uses Three.js for rendering, ElevenLabs and Gemini for conversations and summaries. 🏆 Won Best AI Application Built with Cloudflare at {" "}
        <span className="inline-block">
          <Image src="/projects/hackwestern_logo.jpg" className="inline align-middle mx-1" alt="" width={20} height={20} />
          <Link href="https://hackwestern.com/">Hack Western 2025.</Link>
        </span>
      </>,
    ],
    images: [
      "/projects/auralis1.jpeg",
      "/projects/auralis2.jpeg",
      "/projects/auralis3.jpeg",
      "/projects/auralis4.jpeg",
    ],
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
    stack: [
      "TypeScript",
      "Lens Studio",
      "Snap Spectacles",
    ],
    description: [
      <>
        AR social experience for{" "}
        <span className="inline-block">
          <Image src="/projects/snap_logo.png" alt="" className="inline align-middle mx-1" width={20} height={20} />
          <Link href="https://spectacles.com/">Snap Spectacles</Link>
        </span> where you
        leave persistent 3D notes in the real world. Includes spatial mapping
        and voice controls so you can discover hidden messages from others.
        Built in 32 hours; semi-finalist at{" "}
        <span className="inline-block">
          <Image src="/projects/htn_logo.jpg" alt="" className="inline align-middle mx-1" width={20} height={20} />
          <Link href="https://hackthenorth.com/">Hack the North 2025.</Link>
        </span>
      </>,
    ],
    images: [
      "/projects/post1.jpg",
      "/projects/post2.jpg",
      "/projects/post3.jpg",
      "/projects/post4.jpg",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/post-it",
      },
    ],
  },
  {
    title: "Nebula",
    stack: [
      "React Native",
      "FastAPI",
      "Supabase",
      "PGVector",
      "Mistral OCR",
      "GCP",
      "Gemini",
    ],
    description: [
      <>
        A mobile notes app that lets you import notes from camera via <span className="inline-block">
          <Image src="/projects/mistral_logo.png" alt="" className="inline align-middle mx-1" width={20} height={20} />
          <Link href="https://gemini.google.com/">Mistral OCR</Link>
        </span>, search your notes by semantic meaning, and chat with LLM about the notes. Supports rich text editing with markdown, retaining all math equations formatting.
      </>,
    ],
    images: [
      "/projects/nebula.png",
    ],
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
    stack: [
      "Next.js",
      "FastAPI",
      "Firebase",
      "GCP",
      "Gemini",
      "Tailwind CSS",
    ],
    description: [
      <>
        Transforms PDFs into interactive knowledge networks. Click nodes for explanations or listen to auto-generated audio summaries. Uses multiple LLMs to extract concepts and map connections.
      </>,
    ],
    images: [
      "/projects/brain1.png",
      "/projects/brain2.png",
      "/projects/brain3.png",
      "/projects/brain4.png",
      "/projects/brain5.png",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/brainlattice",
      },
      {
        name: "Website",
        url: "https://www.brainlattice.study/",
      },
    ],
  },
  {
    title: "FitSage",
    stack: [
      "Next.js",
      "Supabase",
      "Gemini",
      "HuggingFace",
      "Tailwind CSS",
    ],
    description: [
      <>
        Fitness tracker that turns messy diary entries into structured workout data. Recognizes 40+ activities automatically—no dropdowns needed.
      </>,
    ],
    images: [
      "/projects/fit1.png",
      "/projects/fit2.png",
      "/projects/fit3.png",
      "/projects/fit4.png",
    ],
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
  {
    title: "CheFlow",
    stack: ["Processing"],
    description: [
      <>
        Recipe manager that suggests meals based on what&apos;s expiring in your fridge. Tracks cooking habits with heatmaps to reduce food waste.
      </>,
    ],
    images: [
      "/projects/chef1.png",
      "/projects/chef2.png",
    ],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/cheflow",
      },
    ],
  },
  {
    title: "EcoHub",
    stack: ["PostgreSQL", "Express", "Node.js", "React", "Tailwind CSS"],
    description: [
      <>
        Gamified tracker that rewards eco-friendly actions with points and users can redeem prizes. Inspired
        by <Link href="https://hackclub.com/">Hack Club</Link>, it makes
        sustainability fun by letting you log activities and earn actual prizes.
        Focuses on keeping motivation high.
      </>,
    ],
    images: ["/projects/eco1.png"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/ecohub",
      },
    ],
  },
  {
    title: "Vanilla Flashcards",
    stack: ["HTML", "CSS", "JavaScript"],
    description: [
      <>
        Keyboard-first flashcard app for rapid study. Uses a merit-based grading
        system to show you the concepts you struggle with more often. Fully
        responsive and browser-based for quick practice sessions.
      </>,
    ],
    images: ["/projects/van1.png", "/projects/van2.png"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/vanilla-flashcards",
      },
      {
        name: "Website",
        url: "https://vanilla-flashcards.vercel.app/",
      },
    ],
  },
  {
    title: "SwiftNotes",
    stack: ["Processing"],
    description: [
      <>
        Local-first desktop notes app focused on speed and privacy. Saves
        everything in real-time with optional encryption and supports full
        theming. Includes a small gamification system to help you stay
        productive.
      </>,
    ],
    images: ["/projects/swift1.png"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/swiftnotes",
      },
    ],
  },
  {
    title: "2-Player Tank Battle Game",
    stack: ["Python"],
    description: [
      <>
        Zero-dependency multiplayer tank game built from scratch with Python Tkinter (no
        game engines). Features custom physics for collisions and ballistics. A
        fun project to learn event-driven architecture and OOP.
      </>,
    ],
    images: ["/projects/tank1.png"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/2p-tank-battle",
      },
    ],
  },
  {
    title: "Movie Review Station",
    stack: ["Node.js", "Express", "MongoDB"],
    description: [
      <>
        Movie discovery site powered by the{" "}
        <Link href="https://www.themoviedb.org/">TMDB API</Link>. Browses
        trending films, filters search results, and lets users leave ratings and
        reviews. A simple place to find what to watch next.
      </>,
    ],
    images: ["/projects/movie1.png"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/movie-review-website",
      },
      {
        name: "Website",
        url: "https://movie-review-website-plum.vercel.app/",
      },
    ],
  },
  {
    title: "World Championship 100m Sim",
    stack: ["Processing"],
    description: [
      <>
        100m sprint simulator based on{" "}
        <Link href="https://jmureika.lmu.build/track/index.html">
          Dr. Jonas Mureika&apos;s
        </Link>{" "}
        physics models. Accounts for wind, altitude, humidity, and reaction times with realistic animations.
      </>,
    ],
    images: ["/projects/sim1.png"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/rickytang666/world-championship-100m-sim",
      },
    ],
  },
];

