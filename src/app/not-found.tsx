import Link from "next/link";
import { IconDeviceGamepad2 } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main className="w-full max-w-4xl lg:max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-primary mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Page not found 🐒</h1>
      </div>

      <Link
        href="https://www.pubg.com/"
        target="_blank"
        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        <IconDeviceGamepad2 stroke={2} className="w-5 h-5" />
        Play PUBG Instead
      </Link>
    </main>
  );
}
