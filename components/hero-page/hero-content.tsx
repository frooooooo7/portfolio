"use client";

import { AVATAR_PARTICLES } from "@/components/hero-page/avatar-particles";
import {
  FIRST_NAME,
  LAST_NAME,
  useHeroContentMotion,
} from "@/components/hero-page/motion/hero-content-motion";
import { HeroSocialLinks } from "@/components/hero-page/hero-social-links";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

type HeroContentProps = {
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function HeroContent({
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: HeroContentProps) {
  const {
    contentStyle,
    glowStyle,
    headingStagger,
    letterReveal,
    avatarHover,
    avatarTransition,
    handleMouseMove,
    handleMouseLeave,
  } = useHeroContentMotion(prefersReducedMotion);

  return (
    <motion.div
      className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center"
      variants={staggerGroup}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={contentStyle}
    >
      <motion.div
        className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(81,164,255,0.28),transparent_64%)] blur-2xl mobile-no-blur"
        style={glowStyle}
        aria-hidden="true"
      />

      <motion.div
        className="relative size-32 overflow-hidden rounded-full border border-primary/60 bg-background/50 shadow-[0_0_48px_rgba(47,125,230,0.4)] mobile-no-shadow md:size-40"
        variants={revealUp}
        whileHover={avatarHover}
        transition={avatarTransition}
      >
        <Image
          src="/avatar.jpg"
          alt="Avatar Damian Barzyk"
          fill
          loading="eager"
          className="object-cover object-[center_25%]"
          sizes="(min-width: 768px) 10rem, 8rem"
          quality={75}
        />
      </motion.div>
      <div className="pointer-events-none absolute -top-4 flex size-44 items-center justify-center md:size-52">
        {AVATAR_PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={`absolute rounded-full bg-primary/70 shadow-[0_0_12px_rgba(81,164,255,0.6)] mobile-no-shadow mobile-no-animate ${particle.className}`}
            style={{
              animationName: "hero-particle-float",
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <motion.div className="flex flex-col gap-4" variants={revealUp}>
        <h1
          className="flex flex-wrap justify-center gap-x-3 text-4xl font-bold uppercase leading-tight sm:text-5xl"
          aria-label="Damian Barzyk"
        >
          <span className="sr-only">Damian Barzyk</span>
          <motion.span
            className="whitespace-nowrap text-foreground"
            variants={headingStagger}
            initial="hidden"
            animate="show"
            aria-hidden="true"
          >
            {Array.from(FIRST_NAME).map((letter, index) => (
              <motion.span
                key={`first-${letter}-${index}`}
                className="inline-block"
                variants={letterReveal}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>{" "}
          <motion.span
            className="whitespace-nowrap text-primary"
            variants={headingStagger}
            initial="hidden"
            animate="show"
            aria-hidden="true"
          >
            {Array.from(LAST_NAME).map((letter, index) => (
              <motion.span
                key={`last-${letter}-${index}`}
                className="inline-block"
                variants={letterReveal}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground md:text-xl">
          Web Developer
        </p>
      </motion.div>

      <motion.p
        className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-primary md:text-sm"
        variants={revealUp}
      >
        <span
          className="size-2 rounded-full bg-emerald-400"
          aria-hidden="true"
        />
        Available for work
      </motion.p>

      <motion.p
        className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-xl"
        variants={revealUp}
      >
        I write code for the web. Good code. The kind you don't have to fix
        later.
      </motion.p>

      <HeroSocialLinks
        revealUp={revealUp}
        staggerGroup={staggerGroup}
        prefersReducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}
