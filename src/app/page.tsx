import ProjectPreviewSection from "@/components/home/project-preview-section";
import HeroSection from "@/components/home/hero-section";
import SkillsSection from "@/components/home/skills-section";
import AwardsSection from "@/components/home/awards-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Ricky Tang",
  description: "Meet Ricky Tang, an aspiring software engineer.",
};

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-16">
      <HeroSection />
      <ProjectPreviewSection />
      <SkillsSection />
      <AwardsSection />
    </main>
  );
}
