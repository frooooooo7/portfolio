"use client";

import { getAboutApproachCardTransition } from "@/components/about-section/motion/about-approach-card-motion";
import { educationItems } from "@/components/about-section/about-data";
import { motion, type Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

type AboutEducationTimelineProps = {
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function AboutEducationTimeline({
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: AboutEducationTimelineProps) {
  const transition = getAboutApproachCardTransition(prefersReducedMotion);

  return (
    <motion.aside
      className="relative rounded-3xl border border-primary/35 bg-card/70 p-6 shadow-[0_0_42px_rgba(47,125,230,0.22)] mobile-no-shadow md:p-8"
      variants={revealUp}
      transition={transition}
    >
      {/* Header */}
      <div className="mb-7 flex items-center gap-2.5">
        <span className="inline-flex size-7 items-center justify-center rounded-full border border-primary/45 bg-primary/10">
          <GraduationCap className="size-3.5 text-primary" aria-hidden="true" />
        </span>
        <span className="text-xs uppercase tracking-[0.22em] text-primary/85">
          Education
        </span>
      </div>

      {/* Timeline */}
      <motion.ol
        className="relative space-y-0"
        variants={staggerGroup}
        aria-label="Education timeline"
      >
        {/* Vertical line */}
        <span
          className="absolute left-[9px] top-2 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
          aria-hidden="true"
        />

        {educationItems.map((item, index) => (
          <motion.li
            key={item.institution + item.period}
            className="relative pb-8 pl-8 last:pb-0"
            variants={revealUp}
          >
            {/* Dot */}
            <span
              className="absolute left-0 top-1.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background"
              aria-hidden="true"
            >
              <span className="size-[7px] rounded-full bg-primary shadow-[0_0_8px_rgba(47,125,230,0.7)]" />
            </span>

            {/* Period badge */}
            <span className="mb-1.5 inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
              {item.period}
            </span>

            {/* Degree / Field */}
            <p className="text-sm font-semibold leading-snug text-foreground md:text-base">
              {item.degree}
            </p>

            {/* Institution */}
            <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {item.institution}
            </p>

            {/* Optional description */}
            {item.description && (
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground/70 md:text-xs">
                {item.description}
              </p>
            )}

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] text-primary/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </motion.aside>
  );
}
