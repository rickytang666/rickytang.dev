import React from "react";
import Image from "next/image";
import {
  IconBrandGithub,
  IconExternalLink,
  IconBrandAppstore,
} from "@tabler/icons-react";
import { Project } from "@/types";

const getLinkIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "github":
      return IconBrandGithub;
    case "testflight":
      return IconBrandAppstore;
    default:
      return IconExternalLink;
  }
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full aspect-video overflow-hidden bg-black">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <div className="flex items-center gap-3">
          {project.links.map((link) => {
            const Icon = getLinkIcon(link.name);
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                <Icon stroke={2} className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="text-sm text-foreground/80 leading-relaxed">
        {project.description}
      </div>
    </div>
  );
}
