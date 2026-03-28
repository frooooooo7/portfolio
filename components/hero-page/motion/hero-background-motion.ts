import type { TargetAndTransition, Transition } from "framer-motion";

type HeroBackgroundMotion = {
  imageInitial: TargetAndTransition;
  imageAnimate: TargetAndTransition;
  imageTransition: Transition;
  radialTransition: Transition;
  linearTransition: Transition;
  leftAccentTransition: Transition;
  rightAccentTransition: Transition;
};

export function createHeroBackgroundMotion(
  prefersReducedMotion: boolean,
): HeroBackgroundMotion {
  return {
    imageInitial: {
      scale: prefersReducedMotion ? 1 : 1.08,
      opacity: 0.2,
    },
    imageAnimate: { scale: 1, opacity: 1 },
    imageTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
    radialTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 1, ease: "easeOut", delay: 0.15 },
    linearTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 1.1, ease: "easeOut", delay: 0.25 },
    leftAccentTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 },
    rightAccentTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
  };
}