import type { TargetAndTransition } from "framer-motion";

type SocialLinkMotion = {
  whileHover: TargetAndTransition | undefined;
  whileTap: TargetAndTransition | undefined;
};

export function getHeroSocialLinkMotion(
  prefersReducedMotion: boolean,
): SocialLinkMotion {
  return {
    whileHover: prefersReducedMotion
      ? undefined
      : {
          y: -4,
          scale: 1.04,
          rotate: 1.5,
          transition: { duration: 0.2 },
        },
    whileTap: prefersReducedMotion ? undefined : { scale: 0.96 },
  };
}