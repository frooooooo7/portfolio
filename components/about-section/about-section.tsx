"use client";

import { AboutApproachCard } from "@/components/about-section/about-approach-card";
import { AboutBackground } from "@/components/about-section/about-background";
import { AboutContent } from "@/components/about-section/about-content";
import { principles, quickFacts } from "@/components/about-section/about-data";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  const revealUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: baseTransition },
  };

  const staggerGroup: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  return (
    <motion.section
      id="about"
      className="relative isolate overflow-hidden px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerGroup}
    >
      <AboutBackground prefersReducedMotion={prefersReducedMotion} />

      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <AboutContent
          facts={quickFacts}
          revealUp={revealUp}
          staggerGroup={staggerGroup}
          prefersReducedMotion={prefersReducedMotion}
        />

        <AboutApproachCard
          principles={principles}
          revealUp={revealUp}
          staggerGroup={staggerGroup}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>
    </motion.section>
  );
}
