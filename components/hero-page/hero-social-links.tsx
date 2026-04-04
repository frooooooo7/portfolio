import { getHeroSocialLinkMotion } from "@/components/hero-page/motion/hero-social-links-motion";
import { SOCIAL_LINKS } from "./social-links-data";
import { motion, type Variants } from "framer-motion";

type HeroSocialLinksProps = {
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function HeroSocialLinks({
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: HeroSocialLinksProps) {
  const { whileHover, whileTap } =
    getHeroSocialLinkMotion(prefersReducedMotion);

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 pt-2 md:gap-4"
      variants={staggerGroup}
    >
      {SOCIAL_LINKS.map(({ href, label, icon: Icon, iconSrc }) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          title={label}
          className="flex size-12 items-center justify-center border border-primary/50 bg-background/45 text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
          aria-label={label}
          variants={revealUp}
          whileHover={whileHover}
          whileTap={whileTap}
        >
          {iconSrc ? (
            <span
              className="size-5 bg-current"
              style={{
                WebkitMaskImage: `url(${iconSrc})`,
                maskImage: `url(${iconSrc})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
              aria-hidden="true"
            />
          ) : Icon ? (
            <Icon className="size-5" />
          ) : null}
        </motion.a>
      ))}
    </motion.div>
  );
}
