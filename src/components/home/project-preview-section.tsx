"use client";
import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import ViewMoreButton from "@/components/ui/view-more-button";

// Icons
import { IconFolders } from "@tabler/icons-react";

export default function ProjectPreviewSection() {
  const previewProjects = projects.slice(0, 2);

  return (
    <section className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 text-foreground">
        <IconFolders stroke={2} className="w-8 h-8 text-primary" />
        Featured Projects
      </h2>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mb-6 sm:mb-8 md:mb-10">
        {previewProjects.map((project, idx) => (
          <ProjectCard key={project.title + idx} project={project} imgIdx={0} />
        ))}
      </div>
      <div className="flex justify-center">
        <ViewMoreButton href="/projects">View more projects</ViewMoreButton>
      </div>
    </section>
  );
}
