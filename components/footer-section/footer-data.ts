import { SOCIAL_LINKS } from "@/components/hero-page/social-links-data";

export type FooterNavItem = {
  label: string;
  href: string;
};

export const footerNavItems: FooterNavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Reuse SOCIAL_LINKS from hero section
export const footerSocialItems = SOCIAL_LINKS;
