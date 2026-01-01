import type { Metadata } from "next";
import ProjectsClient from "@/components/projects/projects-client";

// separated this and projects-client to use metadata here

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ricky's projects, from AI-powered fitness companions to sustainable living tools. Leveling up skills, one project at a time.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
