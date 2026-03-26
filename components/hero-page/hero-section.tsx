import { HeroBackground } from "@/components/hero-page/hero-background";
import { HeroContent } from "@/components/hero-page/hero-content";
import { HeroScrollIndicator } from "@/components/hero-page/hero-scroll-indicator";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >
      <HeroBackground />
      <HeroContent />
      <HeroScrollIndicator />
    </section>
  );
}
