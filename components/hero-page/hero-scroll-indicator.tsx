import { getHeroScrollDotMotion } from "@/components/hero-page/motion/hero-scroll-indicator-motion";
import { motion, type Variants } from "framer-motion";

type HeroScrollIndicatorProps = {
  revealUp: Variants;
  prefersReducedMotion: boolean;
};

export function HeroScrollIndicator({
  revealUp,
  prefersReducedMotion,
}: HeroScrollIndicatorProps) {
  const { animate, transition } = getHeroScrollDotMotion(prefersReducedMotion);

  return (
    <motion.div
      className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
      variants={revealUp}
    >
      <div className="flex h-12 w-7 justify-center rounded-full border border-primary/70">
        <motion.span
          className="mt-2 block size-2 rounded-full bg-primary"
          animate={animate}
          transition={transition}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
