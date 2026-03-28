import type { TargetAndTransition, Transition } from "framer-motion";

type AboutGlowMotion = {
  leftAnimate: TargetAndTransition;
  leftTransition: Transition;
  rightAnimate: TargetAndTransition;
  rightTransition: Transition;
};

export function getAboutBackgroundMotion(
  prefersReducedMotion: boolean,
): AboutGlowMotion {
  return {
    leftAnimate: prefersReducedMotion
      ? { opacity: 0.65 }
      : {
          x: [0, 20, 0],
          y: [0, -16, 0],
          scale: [0.95, 1.06, 0.95],
        },
    leftTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 16, ease: "easeInOut", repeat: Infinity },
    rightAnimate: prefersReducedMotion
      ? { opacity: 0.6 }
      : {
          x: [0, -22, 0],
          y: [0, 14, 0],
          scale: [1.04, 0.96, 1.04],
        },
    rightTransition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 18, ease: "easeInOut", repeat: Infinity },
  };
}