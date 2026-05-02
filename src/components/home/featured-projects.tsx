import NextLink from "next/link";
import { preload } from "react-dom";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import { IconArrowRight } from "@tabler/icons-react";

const featured = projects.slice(0, 2);

export default function FeaturedProjects() {
  const firstImage = featured[0].image;
  const widths = [384, 640, 750, 828, 1080, 1200, 1920];
  preload(`/_next/image?url=${encodeURIComponent(firstImage)}&w=828&q=75`, {
    as: "image",
    imageSrcSet: widths
      .map(
        (w) =>
          `/_next/image?url=${encodeURIComponent(firstImage)}&w=${w}&q=75 ${w}w`,
      )
      .join(", "),
    imageSizes: "(min-width: 640px) 45vw, 100vw",
    fetchPriority: "high",
  });

  return (
    <section className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-gaegu text-2xl sm:text-3xl font-bold text-foreground/70 uppercase tracking-wider">
          Projects
        </h2>
        <NextLink
          href="/projects"
          className="flex items-center gap-1 text-base font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
        >
          <span>View more</span>
          <IconArrowRight stroke={2} className="w-5 h-5" />
        </NextLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} priority />
        ))}
      </div>
    </section>
  );
}
