import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export const metadata: Metadata = {
  description:
    "Explore Ricky's projects, from AI-powered fitness companions to sustainable living tools. Leveling up skills, one project at a time.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid gap-10 sm:gap-x-10 sm:gap-y-12 grid-cols-1 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
