"use client";

import { Button } from "@/components/ui/button";
import { AboutBeyondCode } from "@/components/about-section/about-beyond-code";
import { motion, type Variants } from "framer-motion";

type AboutContentProps = {
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function AboutContent({
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: AboutContentProps) {
  return (
    <motion.div className="space-y-8" variants={revealUp}>
      <motion.p
        className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary md:text-sm"
        variants={revealUp}
      >
        About me
      </motion.p>

      <motion.div className="space-y-5" variants={revealUp}>
        <motion.h2
          className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl"
          variants={revealUp}
        >
          I&apos;m a fullstack developer.
        </motion.h2>
        <motion.p
          className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          variants={revealUp}
        >
          I am a computer science student at Rzeszów University of Technology
          with a passion for creating websites and working in the IT. I work
          across the entire stack — from database queries to UI interactions.
        </motion.p>
      </motion.div>

      <AboutBeyondCode revealUp={revealUp} staggerGroup={staggerGroup} />

      <motion.div className="flex flex-wrap gap-3 pt-2" variants={revealUp}>
        <Button
          asChild
          className="h-10 rounded-full border border-primary/35 bg-primary/90 px-5 text-sm uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary"
        >
          <a href="#projects">View projects</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-10 rounded-full border-primary/40 bg-background/55 px-5 text-sm uppercase tracking-[0.12em]"
        >
          <a href="#contact">Let&apos;s talk</a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
