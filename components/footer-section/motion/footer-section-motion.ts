import type { Transition, Variants } from "framer-motion";

type FooterSectionMotion = {
  revealUp: Variants;
  staggerGroup: Variants;
};

export function createFooterSectionMotion(
  prefersReducedMotion: boolean,
): FooterSectionMotion {
  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.65, ease: [0.22, 1, 0.36, 1] };

  return {
    revealUp: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
      show: { opacity: 1, y: 0, transition: baseTransition },
    },
    staggerGroup: {
      hidden: {},
      show: {
        transition: prefersReducedMotion
          ? { duration: 0 }
          : { staggerChildren: 0.06, delayChildren: 0.05 },
      },
    },
  };
}