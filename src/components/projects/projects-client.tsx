"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function ProjectsClient() {
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
