import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/ui/link";

// Icons
import {
  IconUser,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
} from "@tabler/icons-react";

import { externalLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "About",
  description:
    "learn more about ricky tangs, a full stack developer with a habit of curiosity and consistently building. improvement is a precious power, even if it's small, and he is here to chase it.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-foreground">
        <IconUser
          stroke={2.5}
          className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
        />
        About Me
      </h1>

      <div className="flex flex-col items-center [@media(min-width:1160px)]:flex-row [@media(min-width:1160px)]:items-start gap-8">
        {/* Image Section */}
        <div className="w-full [@media(min-width:1160px)]:w-auto [@media(min-width:1160px)]:flex-shrink-0">
          <div className="relative w-full aspect-square max-w-[300px] [@media(min-width:500px)]:max-w-[400px] md:max-w-[500px] [@media(min-width:1160px)]:w-[550px] [@media(min-width:1160px)]:h-[550px] mx-auto [@media(min-width:1160px)]:mx-0 overflow-hidden">
            <Image
              src="/about/myself.jpg"
              alt="Ricky Tang"
              fill
              className="object-contain transition-all duration-300"
              priority
            />
          </div>
        </div>

        {/* Content and Links Section */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="space-y-5">
            <p className="leading-relaxed text-foreground">
              My name is Ricky Tang, a Software Engineering student at the
              University of Waterloo.
            </p>

            <p className="leading-relaxed text-foreground">
              I build tools because I want them to exist in my own life. When I once crammed for an exam, I built a study tool to extract the concept networks from course notes. I&apos;m my own most demanding user, so taking a slow process and engineering it down to seconds is the exact kind of problem I obsess over.
            </p>

            <p className="leading-relaxed text-foreground">
              A tech stack is just a means to an end. Picking up new stuff forces me to learn fast and keeps me moving quickly. That&apos;s also why I love hackathons: a perfect excuse to get into flow state and rapidly ship complex systems under pressure.
            </p>

            <p className="leading-relaxed text-foreground">
              Recently, my work centers around AI Agents and backend infrastructure: building RAG systems that clear high legal bars for accuracy, and pipelines orchestrating agents to boost both speed and scalability.
            </p>

            <div className="leading-relaxed text-foreground">
              <p className="mb-2">Outside of school/coding, you can find me:</p>
              <ul className="list-disc list-outside space-y-1 ml-6">
                <li>🏓 playing & watching table tennis</li>
                <li>
                  tweaking{" "}
                  <Image
                    src="/about/obsidian_logo.png"
                    alt="⚒️"
                    width={20}
                    height={20}
                    className="inline align-middle mx-1"
                  />
                  <Link href="https://obsidian.md">Obsidian plugins</Link>
                </li>
                <li>
                  watching{" "}
                  <Image
                    src="/about/diamond_league_logo.png"
                    alt="🏃"
                    width={20}
                    height={20}
                    className="inline align-middle mx-1"
                  />
                  <Link href="https://worldathletics.org/records/all-time-toplists/sprints/100-metres/all/men/senior?regionType=world&timing=electronic&windReading=regular&page=1&bestResultsOnly=false&firstDay=1899-12-31&lastDay=2025-11-13&maxResultsByCountry=all&eventId=10229630&ageCategory=senior">
                    track meets
                  </Link>{" "}
                  & collecting split times data (the GOAT usain bolt)
                </li>
                <li>
                  <span className="italic font-serif">
                    &apos;doomscrolling&apos;
                  </span>{" "}
                  <span className="inline-block">
                    <Image
                      src="/about/github_logo.png"
                      alt="💻"
                      width={18}
                      height={18}
                      className="inline align-middle mx-1"
                    />
                    <Link href="https://github.com">
                      inspirational projects
                    </Link>
                  </span>{" "}
                  online
                </li>
              </ul>
            </div>
          </div>

          {/* Links Section - Independent */}
          <div className="flex flex-wrap mt-4 font-semibold items-center gap-4 sm:gap-7 justify-center sm:justify-start">
            <a
              href={externalLinks.github}
              target="_blank"
              className="flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandGithub stroke={2} className="w-5 h-5" />
              GitHub
            </a>
            <a
              href={externalLinks.linkedin}
              target="_blank"
              className="flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandLinkedin stroke={2} className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="/Ricky_Tang_resume.pdf"
              target="_blank"
              className="flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconFileCv stroke={2} className="w-5 h-5" />
              Resume
            </a>
            <a
              href={`mailto:${externalLinks.email}`}
              target="_blank"
              className="flex items-center gap-1 text-foreground hover:text-primary active:text-primary focus:text-primary"
            >
              <IconMail stroke={2} className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
