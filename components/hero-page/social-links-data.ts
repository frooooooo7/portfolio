import { FileText, Mail, type LucideIcon } from "lucide-react";

export type SocialLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
  iconSrc?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/frooooooo7",
    label: "GitHub",
    iconSrc: "/github-142-svgrepo-com.svg",
  },
  {
    href: "https://discord.com/users/fro7777",
    label: "Discord (fro7777)",
    iconSrc: "/discord-svgrepo-com.svg",
  },
  { href: "mailto:barzyk.damian4@gmail.com", label: "Email", icon: Mail },
  { href: "/cv.pdf", label: "CV", icon: FileText },
];
