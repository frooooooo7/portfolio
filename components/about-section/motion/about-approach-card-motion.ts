import type { Transition } from "framer-motion";

export function getAboutApproachCardTransition(
  prefersReducedMotion: boolean,
): Transition {
  return prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 };
}