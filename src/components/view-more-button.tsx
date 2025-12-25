import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

interface ViewMoreButtonProps {
  href: string;
  children?: React.ReactNode;
}

export default function ViewMoreButton({
  href,
  children = "View more",
}: ViewMoreButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 btn btn-outline border-foreground bg-background group rounded-full relative border-2 view-more-btn"
    >
      <span className="font-medium">{children}</span>
      <IconArrowRight
        className="w-5 h-5 absolute right-2 transform view-more-arrow"
        stroke={2}
      />
    </Link>
  );
}
