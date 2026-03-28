export type FooterNavItem = {
  label: string;
  href: string;
};

export type FooterSocialItem = {
  label: string;
  href: string;
  iconSrc: string;
};

export const footerNavItems: FooterNavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const footerSocialItems: FooterSocialItem[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    iconSrc: "/github-142-svgrepo-com.svg",
  },
  {
    label: "Discord",
    href: "https://discord.com/users/fro7777",
    iconSrc: "/discord-svgrepo-com.svg",
  },
  {
    label: "Website",
    href: "#home",
    iconSrc: "/globe.svg",
  },
];