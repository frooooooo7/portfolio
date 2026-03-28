import type { TargetAndTransition, Transition } from "framer-motion";

type AboutQuickFactCardMotion = {
  whileHover: TargetAndTransition | undefined;
  transition: Transition;
};

export function getAboutQuickFactCardMotion(
  prefersReducedMotion: boolean,
): AboutQuickFactCardMotion {
  return {
    whileHover: prefersReducedMotion
      ? undefined
      : { y: -4, boxShadow: "0 12px 30px rgba(47,125,230,0.18)" },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  };
}