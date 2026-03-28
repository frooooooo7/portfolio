import type { Transition, Variants } from "framer-motion";

type ProjectsSectionMotion = {
  revealUp: Variants;
  staggerGroup: Variants;
};

export function createProjectsSectionMotion(
  prefersReducedMotion: boolean,
): ProjectsSectionMotion {
  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  return {
    revealUp: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
      show: { opacity: 1, y: 0, transition: baseTransition },
    },
    staggerGroup: {
      hidden: {},
      show: {
        transition: prefersReducedMotion
          ? { duration: 0 }
          : { staggerChildren: 0.08, delayChildren: 0.08 },
      },
    },
  };
}