import { getAboutApproachCardTransition } from "@/components/about-section/motion/about-approach-card-motion";
import { motion, type Variants } from "framer-motion";

type AboutApproachCardProps = {
  principles: string[];
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function AboutApproachCard({
  principles,
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: AboutApproachCardProps) {
  const transition = getAboutApproachCardTransition(prefersReducedMotion);

  return (
    <motion.aside
      className="relative rounded-3xl border border-primary/35 bg-card/70 p-6 shadow-[0_0_42px_rgba(47,125,230,0.22)] mobile-no-shadow md:p-8"
      variants={revealUp}
      transition={transition}
    >
      <span className="absolute right-6 top-6 text-xs uppercase tracking-[0.22em] text-primary/85">
        My approach
      </span>

      <motion.div className="space-y-5 pt-8" variants={staggerGroup}>
        {principles.map((item, index) => (
          <motion.div
            key={item}
            className="flex items-start gap-4"
            variants={revealUp}
          >
            <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {item}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 rounded-2xl border border-primary/35 bg-background/70 p-4"
        variants={revealUp}
      >
        <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Current direction
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
          Building portfolio-driven experiences with Next.js 16 and motion
          systems that stay lightweight on mobile.
        </p>
      </motion.div>
    </motion.aside>
  );
}
