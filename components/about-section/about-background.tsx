import { getAboutBackgroundMotion } from "@/components/about-section/motion/about-background-motion";
import { motion } from "framer-motion";

type AboutBackgroundProps = {
  prefersReducedMotion: boolean;
};

export function AboutBackground({
  prefersReducedMotion,
}: AboutBackgroundProps) {
  const { leftAnimate, leftTransition, rightAnimate, rightTransition } =
    getAboutBackgroundMotion(prefersReducedMotion);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute -left-14 top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl"
        animate={leftAnimate}
        transition={leftTransition}
      />
      <motion.div
        className="absolute -right-14 bottom-10 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl"
        animate={rightAnimate}
        transition={rightTransition}
      />
    </div>
  );
}
