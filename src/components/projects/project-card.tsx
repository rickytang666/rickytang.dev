import React from "react";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Project } from "@/types";

const getLinkIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "github":
      return IconBrandGithub;
    default:
      return IconExternalLink;
  }
};

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full aspect-[16/10] overflow-hidden bg-black">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          sizes="(min-width: 640px) 45vw, 100vw"
          className="w-full h-full object-cover"
          priority={priority}
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-medium">{project.title}</h3>
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
