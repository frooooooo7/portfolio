import { AboutSection } from "@/components/about-section";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-page/hero-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
