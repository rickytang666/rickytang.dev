import React from "react";
import Link from "@/components/ui/link";
import Image from "next/image";
import { Project } from "@/types";

export const projects: Project[] = [
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
          <Image src="/projects/mapbox_logo.png" className="inline align-middle mx-1" alt="mapbox logo" width={20} height={20} />
          <Link href="https://mapbox.com/">Mapbox</Link>
        </span>
        {" "}
        and
        {" "}
        <span className="inline-block">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Openstreetmap_logo.svg/960px-Openstreetmap_logo.svg.png?20220919103849" className="inline align-middle mx-1" alt="osm logo" width={20} height={20} />
          <Link href="https://openstreetmap.org/">OpenStreetMap</Link>
        </span>
        , then generates textured .obj files for Unity/Blender/Unreal.
      </>,
    ],
    images: [
      "/projects/tark1.png",
      "/projects/tark2.png",
    ],
    github: "https://github.com/rickytang666/tark",
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
          <Image src="/projects/hackwestern_logo.jpg" className="inline align-middle mx-1" alt="hackwestern logo" width={20} height={20} />
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
    github: "https://github.com/rickytang666/auralis",
    website: "https://stop-googling-symptoms.tech/",
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
          <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/960px-Snapchat_logo.svg.png?20190813231721" alt="Snap Logo" className="inline align-middle mx-1" width={20} height={20} />
          <Link href="https://spectacles.com/">Snap Spectacles</Link>
        </span> where you
        leave persistent 3D notes in the real world. Includes spatial mapping
        and voice controls so you can discover hidden messages from others.
        Built in 32 hours; semi-finalist at{" "}
        <span className="inline-block">
          <Image src="/projects/htn_logo.jpg" alt="HTN Logo" className="inline align-middle mx-1" width={20} height={20} />
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
    github: "https://github.com/rickytang666/post-it",
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
    github: "https://github.com/rickytang666/brainlattice",
    website: "https://www.brainlattice.study/",
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
    github: "https://github.com/rickytang666/fitsage",
    website: "https://www.fitsage.tech/",
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
    github: "https://github.com/rickytang666/cheflow",
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
    github: "https://github.com/rickytang666/ecohub",
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
    github: "https://github.com/rickytang666/vanilla-flashcards",
    website: "https://vanilla-flashcards.vercel.app/",
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
    github: "https://github.com/rickytang666/swiftnotes",
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
    github: "https://github.com/rickytang666/2p-tank-battle",
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
    github: "https://github.com/rickytang666/movie-review-website",
    website: "https://movie-review-website-plum.vercel.app/",
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
    github: "https://github.com/rickytang666/world-championship-100m-sim",
  },
];
