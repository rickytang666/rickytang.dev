import WebringSwitcher from "@/components/ui/webring-switcher";
import FooterIcons from "@/components/layout/footer-icons";

interface WebringMember {
  name: string;
  website: string;
}

async function getWaterlooMembers(): Promise<WebringMember[]> {
  try {
    const res = await fetch(
      "https://www.uwaterloo.network/api/webring?user=ricky-tang",
      {
        next: { revalidate: 3600 }, // cache for 1 hour
      },
    );
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
    <footer className="w-full text-foreground mt-auto relative z-10">
      <div className="max-w-3xl mx-auto py-3 xl:py-5 flex flex-col items-center md:items-start md:flex-row md:justify-between gap-4">
        {/* col 1: name top, links bottom */}
        <div className="w-full flex flex-col items-center md:justify-between md:items-start gap-4">
          <p className="text-base lg:text-lg text-center lg:text-left p-2">
            Ricky Tang <span className="text-lg font-black">·</span>{" "}
            {new Date().getFullYear()}
          </p>
          <FooterIcons />
        </div>

        {/* col 2: webring switcher */}
        <WebringSwitcher waterlooMembers={waterlooMembers} />
      </div>
    </footer>
  );
}
