"use client";

import { AboutApproachCard } from "@/components/about-section/about-approach-card";
import { AboutBackground } from "@/components/about-section/about-background";
import { AboutContent } from "@/components/about-section/about-content";
import { principles, quickFacts } from "@/components/about-section/about-data";
import { createAboutSectionMotion } from "@/components/about-section/motion/about-section-motion";
import { motion, useReducedMotion } from "framer-motion";

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { revealUp, staggerGroup } =
    createAboutSectionMotion(prefersReducedMotion);

  return (
    <motion.section
      id="about"
      className="relative isolate overflow-hidden px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
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
