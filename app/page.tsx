import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-page/hero-section";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
    </div>
  );
}
