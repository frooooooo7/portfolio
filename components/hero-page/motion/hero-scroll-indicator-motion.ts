import type { TargetAndTransition, Transition } from "framer-motion";

type ScrollDotMotion = {
  animate: TargetAndTransition | undefined;
  transition: Transition;
};

export function getHeroScrollDotMotion(
  prefersReducedMotion: boolean,
): ScrollDotMotion {
  return {
    animate: prefersReducedMotion
      ? undefined
      : { y: [0, 16, 0], opacity: [1, 0.65, 1] },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 2.2, ease: "easeInOut", repeat: Infinity },
  };
}