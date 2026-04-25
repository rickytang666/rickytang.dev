import HeroSection from "@/components/home/hero-section";
import FeaturedProjects from "@/components/home/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Meet Ricky Tang, an aspiring software engineer.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ricky Tang",
  url: "https://www.rickytang.dev",
  jobTitle: "Software Engineering Student",
  affiliation: { "@type": "Organization", name: "University of Waterloo" },
  sameAs: [
    "https://github.com/rickytang666",
    "https://www.linkedin.com/in/ricky-tang-dev/",
    "https://x.com/_rickytang",
    "https://bsky.app/profile/rickytang.dev",
    "https://devpost.com/rickytang",
    "https://www.youtube.com/@rickytangdev",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col gap-20 lg:gap-25">
        <HeroSection />
        <FeaturedProjects />
      </main>
    </>
  );
}
