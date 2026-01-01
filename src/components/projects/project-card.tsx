"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Inline } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IconArrowLeft, IconArrowRight, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  imgIdx: number;
  containerHeight?: number;
}

export default function ProjectCard({
  project,
  imgIdx,
  containerHeight = 400,
}: ProjectCardProps) {
  const [naturalMap, setNaturalMap] = useState<
    Record<string, { width: number; height: number }>
  >({});
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // update container width on resize
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // for vertical centering
  const getImgStyle = (
    imgNatural: { width: number; height: number } | undefined
  ) => {
    if (imgNatural && containerWidth) {
      const scaledHeight =
        containerWidth * (imgNatural.height / imgNatural.width);
      if (scaledHeight < containerHeight) {
        return { top: `calc(50% - ${scaledHeight / 2}px)` };
      }
    }
    return { top: 0 };
  };

  // carousel track style
  const wrapperStyle: React.CSSProperties = {
    height: containerHeight,
  };

  const currentImg = project.images[imgIdx];
  const getNatural = (src: string) => naturalMap[src];

  // on image load, cache its natural size
  const handleImgLoad = (src: string) => (img: HTMLImageElement) => {
    setNaturalMap((prev) => {
      if (prev[src]) return prev;
      return {
        ...prev,
        [src]: { width: img.naturalWidth, height: img.naturalHeight },
      };
    });
  };

  // prepare slides for inline carousel
  const slides = project.images.map((src) => ({ src }));

  return (
    <div className="card bg-card transition-all duration-200 w-full rounded-xl border-[1.5px] border-border hover:border-primary group">
      <div
        ref={containerRef}
        className="p-3 overflow-hidden"
      >
        {project.images.length > 1 ? (
          /* inline carousel for multiple images */
          <div className="w-full aspect-[16/11] relative p-2 bg-black rounded-xl flex items-center justify-center overflow-hidden">
            <Lightbox
              slides={slides}
              index={imgIdx}
              plugins={[Inline]}
              inline={{
                style: {
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                },
              }}
              carousel={{
                finite: false,
                preload: 1,
              }}
              animation={{
                fade: 300,
                swipe: 300,
              }}
              render={{
                iconNext: () => (
                  <span className="text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center absolute right-1 top-1/2 transform -translate-y-1/2 z-10">
                    <IconArrowRight
                      stroke={2}
                      className="w-5 h-5 text-teal-300"
                    />
                  </span>
                ),
                iconPrev: () => (
                  <span className="text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center absolute left-1 top-1/2 transform -translate-y-1/2 z-10">
                    <IconArrowLeft
                      stroke={2}
                      className="w-5 h-5 text-teal-300"
                    />
                  </span>
                ),
              }}
            />
          </div>
        ) : (
          /* simple image for single */
          <div className="w-full aspect-[16/11] relative p-2 bg-black rounded-xl flex items-center justify-center">
            <Image
              src={currentImg}
              alt={project.title}
              fill
              style={{
                objectFit: "contain",
              }}
              unoptimized
              onLoadingComplete={handleImgLoad(currentImg)}
            />
          </div>
        )}
      </div>

      <div className="card-body px-4 sm:px-8 py-6 flex flex-col">
        <h3 className="card-title text-xl mb-2 text-card-foreground group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <div className="flex-grow">
          {project.description.map((para, idx) => (
            <div
              key={idx}
              className="text-sm mb-2 leading-relaxed text-card-foreground"
            >
              {para}
            </div>
          ))}
        </div>
        {/* tech stacks */}
        <div className="flex flex-wrap gap-2 mb-4 align-middle">
          {project.stack.map((item, index) => (
            <div
              key={index}
              className="px-2 py-1 rounded-xl text-xs font-medium border-[1.5px] border-border hover:border-primary/50 bg-primary/25 hover:text-primary transition-colors duration-200"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="card-actions flex gap-4 mt-auto items-center justify-end pr-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm sm:text-base font-semibold rounded-lg text-card-foreground hover:text-primary transition-colors duration-200"
          >
            <span>
              <IconBrandGithub stroke={2} className="w-5 h-5" />
            </span>
            <span>source</span>
          </a>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm sm:text-base font-semibold rounded-lg text-card-foreground hover:text-accent transition-colors duration-200"
            >
              <span>
                <IconExternalLink stroke={2} className="w-5 h-5" />
              </span>
              <span>live demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
