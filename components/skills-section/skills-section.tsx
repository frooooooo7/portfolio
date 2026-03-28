"use client";

import { SkillsCategoryCard } from "@/components/skills-section/skills-category-card";
import { createSkillsSectionMotion } from "@/components/skills-section/motion/skills-section-motion";
import { skillCategories } from "@/components/skills-section/skills-data";
import { motion, useReducedMotion } from "framer-motion";

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { revealUp, staggerGroup } =
    createSkillsSectionMotion(prefersReducedMotion);

  return (
    <motion.section
      id="skills"
      className="relative isolate overflow-hidden px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={staggerGroup}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_16%,rgba(81,164,255,0.2),transparent_45%),radial-gradient(circle_at_85%_74%,rgba(103,232,249,0.18),transparent_44%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div className="mb-10 space-y-4 text-center" variants={revealUp}>
          <p className="inline-flex items-center rounded-full border border-primary/45 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary md:text-sm">
            Skills
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            A technology stack grouped by what actually ships the product.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Frontend, backend, and tools I use daily to build applications from
            first idea to production.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          variants={staggerGroup}
        >
          {skillCategories.map((category) => (
            <SkillsCategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              accentClass={category.accentClass}
              skills={category.skills}
              revealUp={revealUp}
              staggerGroup={staggerGroup}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
