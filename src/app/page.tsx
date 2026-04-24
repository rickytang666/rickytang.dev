import HeroSection from "@/components/home/hero-section";
import FeaturedProjects from "@/components/home/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Meet Ricky Tang, an aspiring software engineer.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
}
