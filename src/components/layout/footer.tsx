import { externalLinks } from "@/data/links";
import IconDevpost from "@/components/ui/icon-devpost";
import IconRepo from "@/components/ui/icon-repo";
import WebringSwitcher from "@/components/ui/webring-switcher";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconMail,
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";

interface WebringMember {
  name: string;
  website: string;
}

async function getWaterlooMembers(): Promise<WebringMember[]> {
  try {
    const res = await fetch('https://www.uwaterloo.network/api/webring?user=ricky-tang', { 
      next: { revalidate: 3600 } // cache for 1 hour
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.members || [];
  } catch (error) {
    return [];
  }
}

export default async function Footer() {
  const waterlooMembers = await getWaterlooMembers();

  return (
    <footer className="w-full bg-sidebar border-t-2 border-sidebar-border text-foreground mt-auto relative z-10">
      <div className="max-w-2xl mx-auto py-3 xl:py-5 flex flex-col items-center md:items-start md:flex-row md:justify-between gap-4">
        {/* col 1: name top, links bottom */}
        <div className="w-full flex flex-col items-center md:justify-between md:items-start gap-4">
          <p className="text-base lg:text-lg text-center lg:text-left p-2">
            Ricky Tang <span className="text-lg font-black">·</span> {new Date().getFullYear()}
          </p>
          <div className="flex gap-2 min-[370px]:gap-3 min-[420px]:gap-4 items-center justify-center lg:justify-start p-2">
            {/* this svg is slightly too big 😫 */}
            <a
              href={externalLinks.websiteRepo}
              target="_blank"
              rel="noopener noreferrer"
              title="source"
              className="flex items-center hover:text-primary transition-colors duration-200"
            >
              <IconRepo className="w-[1.375rem] h-[1.375rem]" />
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
              href={externalLinks.devpost}
              target="_blank"
              rel="noopener noreferrer"
              title="devpost"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconDevpost className="w-6 h-6" />
            </a>
            <a
              href={externalLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              title="youtube"
              className="flex items-center hover:text-primary active:text-primary focus:text-primary"
            >
              <IconBrandYoutubeFilled className="w-6 h-6" />
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
          </div>
        </div>

        {/* col 2: webring switcher */}
        <WebringSwitcher waterlooMembers={waterlooMembers} />
      </div>
    </footer>
  );
}
