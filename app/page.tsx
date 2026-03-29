
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-page/hero-section";
import { AboutSection } from "@/components/about-section/about-section";
import { SkillsSection } from "@/components/skills-section/skills-section";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { ContactSection } from "@/components/contact-section/contact-section";
import { FooterSection } from "@/components/footer-section/footer-section";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
