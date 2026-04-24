"use client";

import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
  IconBrandBluesky,
} from "@tabler/icons-react";
import IconDevpost from "@/components/ui/icon-devpost";
import IconRepo from "@/components/ui/icon-repo";
import { externalLinks } from "@/data/links";

const icons = [
  {
    href: externalLinks.websiteRepo,
    title: "source",
    icon: <IconRepo className="w-[1.375rem] h-[1.375rem]" />,
  },
  {
    href: externalLinks.email,
    title: "email",
    icon: <IconMail stroke={2} className="w-6.5 h-6.5" />,
  },
  {
    href: externalLinks.github,
    title: "github",
    icon: <IconBrandGithub stroke={2} className="w-6 h-6" />,
  },
  {
    href: externalLinks.linkedin,
    title: "linkedin",
    icon: <IconBrandLinkedin stroke={2} className="w-6 h-6" />,
  },
  {
    href: "/Ricky_Tang_resume.pdf",
    title: "resume",
    icon: <IconFileCv stroke={2} className="w-6 h-6" />,
  },
  {
    href: externalLinks.twitter,
    title: "x",
    icon: <IconBrandX stroke={2} className="w-6 h-6" />,
  },
  {
    href: externalLinks.bluesky,
    title: "bluesky",
    icon: <IconBrandBluesky stroke={2} className="w-6 h-6" />,
  },
  {
    href: externalLinks.devpost,
    title: "devpost",
    icon: <IconDevpost className="w-6 h-6" />,
  },
  {
    href: externalLinks.youtube,
    title: "youtube",
    icon: <IconBrandYoutubeFilled className="w-6 h-6" />,
  },
  {
    href: externalLinks.instagram,
    title: "instagram",
    icon: <IconBrandInstagram stroke={2} className="w-6 h-6" />,
  },
];

const SCROLL_DELAY = 700;
const STAGGER = 120;
const FLASH_DURATION = 300;

export default function FooterIcons() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => {
      icons.forEach((_, i) => {
        setTimeout(() => setActiveIndex(i), SCROLL_DELAY + i * STAGGER);
        setTimeout(
          () => setActiveIndex((prev) => (prev === i ? null : prev)),
          SCROLL_DELAY + i * STAGGER + FLASH_DURATION,
        );
      });
    };
    window.addEventListener("animateFooterIcons", handler);
    return () => window.removeEventListener("animateFooterIcons", handler);
  }, []);

  return (
    <div className="flex gap-2 min-[400px]:gap-3 items-center justify-center lg:justify-start p-2">
      {icons.map(({ href, title, icon }, i) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
          className={`flex items-center transition-all duration-200 hover:text-primary ${
            activeIndex === i
              ? "text-primary drop-shadow-[0_0_4px_color-mix(in_srgb,var(--color-primary)_60%,transparent)]"
              : "text-foreground"
          }`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
