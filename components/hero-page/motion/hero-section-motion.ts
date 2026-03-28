import type { Transition, Variants } from "framer-motion";

type HeroSectionMotion = {
  sectionFade: Variants;
  revealUp: Variants;
  staggerGroup: Variants;
};

export function createHeroSectionMotion(
  prefersReducedMotion: boolean,
): HeroSectionMotion {
  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  return {
    sectionFade: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: baseTransition },
    },
    revealUp: {
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
      show: { opacity: 1, y: 0, transition: baseTransition },
    },
    staggerGroup: {
      hidden: {},
      show: {
        transition: prefersReducedMotion
          ? { duration: 0 }
          : { staggerChildren: 0.1, delayChildren: 0.12 },
      },
    },
  };
}