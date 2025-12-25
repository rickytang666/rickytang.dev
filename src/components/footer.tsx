import { externalLinks } from "../data/links";
import Image from "next/image";
import SeWebringLogo from "./se-webring-logo";

// icons
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconBrandX,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-sidebar border-t-2 border-sidebar-border text-foreground mt-auto relative z-10">
      <div className="max-w-2xl mx-auto py-3 xl:py-5 flex flex-col gap-5">
        {/* first row: name (left) and webring (right) */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-base lg:text-lg text-center lg:text-left">
            Ricky Tang <span className="text-lg font-black">·</span> {new Date().getFullYear()}
          </p>

          {/* SE Webring */}
          <div className="flex items-center justify-center gap-1">
            {/* previous site */}
            <a
              href="https://archangelinux.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="previous"
              className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
            >
              <IconArrowLeft stroke={2} className="w-5 h-5" />
            </a>

            {/* se webring logo */}
            <a
              href="https://se-webring.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              title="SE Webring"
              className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
            >
              <SeWebringLogo width={38} height={38} />
            </a>

            {/* next site */}
            <a
              href="https://davidhua.ca/"
              target="_blank"
              rel="noopener noreferrer"
              title="next"
              className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
            >
              <IconArrowRight stroke={2} className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* second row: social icons (left) and made with (right) */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-2 min-[370px]:gap-3 min-[420px]:gap-4 items-center justify-center lg:justify-start">
            {/* this svg is slightly too big 😫 */}
            <a
              href={externalLinks.websiteRepo}
              target="_blank"
              rel="noopener noreferrer"
              title="source"
              className="flex items-center hover:text-primary transition-colors duration-200"
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-[1.375rem] h-[1.375rem]"
              >
                <g fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3.25 0A2.25 2.25 0 001 2.25v10.5A2.25 2.25 0 003.25 15h.25a.75.75 0 000-1.5h-.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75H13.5v3h-3a.75.75 0 000 1.5h3.25c.69 0 1.25-.56 1.25-1.25V1.25C15 .56 14.44 0 13.75 0H3.25zM13.5 9V1.5H3.25a.75.75 0 00-.75.75v6.878c.235-.083.487-.128.75-.128H13.5z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M5.5 12a.5.5 0 00-.5.5v3a.5.5 0 00.777.416L7 15.101l1.223.815A.5.5 0 009 15.5v-3a.5.5 0 00-.5-.5h-3z"></path>
                </g>
              </svg>
            </a>
            <a
              href={externalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              title="github"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandGithub stroke={2} className="w-6 h-6" />
            </a>
            <a
              href={externalLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandLinkedin stroke={2} className="w-6 h-6" />
            </a>
            <a
              href="/Ricky_Tang_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="resume"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconFileCv stroke={2} className="w-6 h-6" />
            </a>
            <a
              href={externalLinks.email}
              target="_blank"
              rel="noopener noreferrer"
              title="email"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconMail stroke={2} className="w-6 h-6" />
            </a>
            <a
              href={externalLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="x (twitter)"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandX stroke={2} className="w-6 h-6" />
            </a>
            <a
              href={externalLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="instagram"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandInstagram stroke={2} className="w-6 h-6" />
            </a>
            <a
              href={externalLinks.devpost}
              target="_blank"
              rel="noopener noreferrer"
              title="devpost"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href={externalLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="leetcode"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandLeetcode stroke={2} className="w-6 h-6" />
            </a>
          </div>

          {/* Made With */}
          <div className="text-base flex items-center justify-center md:justify-end gap-1">
            <p>Made with</p>
            <div className="flex items-center gap-1">
              <Image
                title="Next.js"
                width={24}
                height={24}
                src="https://go-skill-icons.vercel.app/api/icons?i=nextjs&theme=dark"
                alt="nextjs"
              />
              <Image
                title="Tailwind CSS"
                width={24}
                height={24}
                src="https://go-skill-icons.vercel.app/api/icons?i=tailwind&theme=dark"
                alt="tailwind"
              />
              <Image
                title="shadcn/ui"
                width={24}
                height={24}
                src="https://go-skill-icons.vercel.app/api/icons?i=shadcn&theme=dark"
                alt="shadcn"
              />
              <Image
                title="daisyUI"
                width={24}
                height={24}
                src="https://go-skill-icons.vercel.app/api/icons?i=daisyui&theme=dark"
                alt="daisyui"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
