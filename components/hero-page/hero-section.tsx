"use client";

import { HeroBackground } from "@/components/hero-page/hero-background";
import { HeroContent } from "@/components/hero-page/hero-content";
import { createHeroSectionMotion } from "@/components/hero-page/motion/hero-section-motion";
import { HeroScrollIndicator } from "@/components/hero-page/hero-scroll-indicator";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { sectionFade, revealUp, staggerGroup } =
    createHeroSectionMotion(prefersReducedMotion);

  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
      initial="hidden"
      animate="show"
      variants={sectionFade}
    >
      <HeroBackground prefersReducedMotion={prefersReducedMotion} />
      <HeroContent
        revealUp={revealUp}
        staggerGroup={staggerGroup}
        prefersReducedMotion={prefersReducedMotion}
      />
      <HeroScrollIndicator
        revealUp={revealUp}
        prefersReducedMotion={prefersReducedMotion}
      />
    </motion.section>
  );
}
