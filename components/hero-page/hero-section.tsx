"use client";

import { HeroBackground } from "@/components/hero-page/hero-background";
import { HeroContent } from "@/components/hero-page/hero-content";
import { HeroScrollIndicator } from "@/components/hero-page/hero-scroll-indicator";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  const sectionFade: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: baseTransition },
  };

  const revealUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: baseTransition },
  };

  const staggerGroup: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.12 },
    },
  };

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
