"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

// Icons
import { IconFolders } from "@tabler/icons-react";

export default function ProjectsClient() {
  return (
    <div className="container max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-foreground">
        <IconFolders
          stroke={2}
          className="w-8 h-8 sm:w-10 sm:h-10 text-primary"
        />
        My Projects
      </h1>
      <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} project={project} imgIdx={0} />
        ))}
      </div>
    </div>
  );
}
