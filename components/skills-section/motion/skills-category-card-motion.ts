import type { TargetAndTransition, Transition } from "framer-motion";

type SkillsCategoryCardMotion = {
  whileHover: TargetAndTransition | undefined;
  transition: Transition;
};

export function getSkillsCategoryCardMotion(
  prefersReducedMotion: boolean,
): SkillsCategoryCardMotion {
  return {
    whileHover: prefersReducedMotion
      ? undefined
      : { y: -6, boxShadow: "0 16px 40px rgba(47,125,230,0.24)" },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  };
}