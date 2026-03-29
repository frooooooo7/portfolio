import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020a18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Damian Barzyk — Web Developer",
  description:
    "Front-end developer focused on polished motion, strong performance, and clear UX decisions. Next.js, React, TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
