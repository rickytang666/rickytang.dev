import { redirect } from "next/navigation";
import { externalLinks } from "@/data/links";

export default function XRedirect() {
  redirect(externalLinks.twitter);
}
