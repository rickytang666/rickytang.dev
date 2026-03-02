import { redirect } from "next/navigation";
import { externalLinks } from "@/data/links";

export default function BlueskyRedirect() {
  redirect(externalLinks.bluesky);
}