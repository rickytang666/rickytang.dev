import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/ui/link";

export const metadata: Metadata = {
  description:
    "learn more about ricky tangs, a full stack developer with a habit of curiosity and consistently building. improvement is a precious power, even if it's small, and he is here to chase it.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <div className="container mx-auto max-w-3xl lg:max-w-4xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="mx-auto lg:mx-0 lg:flex-shrink w-[280px] sm:w-[330px] lg:w-[390px] lg:min-w-[260px] overflow-hidden">
            <Image
              src="/about/myself.jpg"
              alt="Ricky Tang"
              width={500}
              height={500}
              sizes="(min-width: 1024px) 390px, (min-width: 640px) 330px, 280px"
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="space-y-5 leading-relaxed">
              <p className="text-foreground">
                My name is Ricky Tang. I study Software Engineering at the
                University of Waterloo.
              </p>

              <p className="text-foreground">
                I build tools because I want them to exist in my own life. As my
                own most demanding user, I&apos;m obsessed with engineering a
                slow process down to seconds. Learning new tech is just a means
                to that end; it forces me to learn fast and keep moving.
                That&apos;s also why I love hackathons: perfect chance to get
                into flow state and ship complex systems under pressure.
              </p>

              <p className="text-foreground">
                Recently, I&apos;ve focused on AI Agents and backend
                infrastructure: building RAG systems that clear high legal bars
                for accuracy, and pipelines orchestrating agents for both speed
                and scalability.
              </p>

              <div className="text-foreground">
                <p className="mb-2">
                  Outside of school/coding, you can find me:
                </p>
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
                    (the GOAT usain bolt)
                  </li>
                  <li>
                    <span className="italic font-serif">
                      &apos;doomscrolling&apos;
                    </span>{" "}
                    <span className="inline-block">
                      <Image
                        src="/about/github_logo.png"
                        alt="💻"
                        width={20}
                        height={20}
                        className="inline align-middle mx-1 rounded-sm"
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
          </div>
        </div>
      </div>
    </div>
  );
}
