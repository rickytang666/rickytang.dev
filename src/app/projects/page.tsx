import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export const metadata: Metadata = {
  description:
    "explore ricky tang's projects, from tools converting text to obsidian vaults to wispr flow for excalidraw and discord bots finding sponsors.",
  alternates: { canonical: "/projects" },
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
