import HeroSection from "@/components/home/hero-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Ricky Tang",
  description: "Meet Ricky Tang, an aspiring software engineer.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
