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
import IconCalcom from "@/components/ui/icon-calcom";
import { externalLinks } from "@/data/links";

const baseIconSize = "w-5 h-5 sm:w-6 sm:h-6";
const adjustedIconSize = "w-5.5 h-5.5 sm:w-6.5 sm:h-6.5";

const icons = [
  {
    href: externalLinks.websiteRepo,
    title: "source",
    icon: <IconRepo className={baseIconSize} />,
  },
  {
    href: externalLinks.email,
    title: "email",
    icon: <IconMail stroke={2} className={adjustedIconSize} />,
  },
  {
    href: externalLinks.github,
    title: "github",
    icon: <IconBrandGithub stroke={2} className={baseIconSize} />,
  },
  {
    href: externalLinks.linkedin,
    title: "linkedin",
    icon: <IconBrandLinkedin stroke={2} className={baseIconSize} />,
  },
  {
    href: "/Ricky_Tang_resume.pdf",
    title: "resume",
    icon: <IconFileCv stroke={2} className={baseIconSize} />,
  },
  {
    href: externalLinks.twitter,
    title: "x",
    icon: <IconBrandX stroke={2} className={baseIconSize} />,
  },
  {
    href: externalLinks.calcom,
    title: "book a call",
    icon: <IconCalcom className="w-6 h-4 sm:w-7 sm:h-5" />,
  },
  {
    href: externalLinks.bluesky,
    title: "bluesky",
    icon: <IconBrandBluesky stroke={2} className={baseIconSize} />,
  },
  {
    href: externalLinks.devpost,
    title: "devpost",
    icon: <IconDevpost className={baseIconSize} />,
  },
  {
    href: externalLinks.youtube,
    title: "youtube",
    icon: <IconBrandYoutubeFilled className={baseIconSize} />,
  },
  {
    href: externalLinks.instagram,
    title: "instagram",
    icon: <IconBrandInstagram stroke={2} className={adjustedIconSize} />,
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
    <div className="flex gap-2.5 min-[400px]:gap-3 items-center justify-center lg:justify-start p-2">
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
