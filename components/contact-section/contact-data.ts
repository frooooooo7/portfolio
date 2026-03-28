import { Mail, MapPin, MessageSquare, Phone, type LucideIcon } from "lucide-react";

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "barzyk.damian4@gmail.com",
    href: "mailto:barzyk.damian4@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+48 669085218",
    href: "tel:+48669085218",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Rzeszow, Poland",
    href: "#",
    icon: MapPin,
  },
  {
    label: "Discord",
    value: "fro7777",
    href: "https://discord.com/users/fro7777",
    icon: MessageSquare,
  },
];
