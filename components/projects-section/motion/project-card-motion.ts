import type { TargetAndTransition, Transition } from "framer-motion";

type ProjectCardMotion = {
  whileHover: TargetAndTransition | undefined;
  transition: Transition;
};

export function getProjectCardMotion(
  prefersReducedMotion: boolean,
): ProjectCardMotion {
  return {
    whileHover: prefersReducedMotion
      ? undefined
      : { y: -6, boxShadow: "0 16px 44px rgba(47,125,230,0.22)" },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  };
}