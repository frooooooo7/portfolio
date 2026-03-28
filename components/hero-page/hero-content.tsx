"use client";

import { AVATAR_PARTICLES } from "@/components/hero-page/avatar-particles";
import { HeroSocialLinks } from "@/components/hero-page/hero-social-links";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { type MouseEvent } from "react";

const FIRST_NAME = "Damian";
const LAST_NAME = "Barzyk";

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
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, {
    damping: 22,
    stiffness: 170,
    mass: 0.5,
  });
  const springY = useSpring(pointerY, {
    damping: 22,
    stiffness: 170,
    mass: 0.5,
  });

  const glowX = useTransform(springX, (value) => value * 14);
  const glowY = useTransform(springY, (value) => value * 12);
  const contentX = useTransform(springX, (value) => value * 8);
  const contentY = useTransform(springY, (value) => value * 6);

  const headingStagger: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.032, delayChildren: 0.2 },
    },
  };

  const letterReveal: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      rotateX: prefersReducedMotion ? 0 : -70,
    },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.2, 0.9, 0.2, 1] },
    },
  };

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - bounds.left) / bounds.width;
    const ny = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((nx - 0.5) * 2);
    pointerY.set((ny - 0.5) * 2);
  }

  function handleMouseLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center"
      variants={staggerGroup}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        prefersReducedMotion
          ? undefined
          : {
              x: contentX,
              y: contentY,
            }
      }
    >
      <motion.div
        className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(81,164,255,0.28),transparent_64%)] blur-2xl"
        style={
          prefersReducedMotion
            ? undefined
            : {
                x: glowX,
                y: glowY,
              }
        }
        aria-hidden="true"
      />

      <motion.div
        className="relative size-32 overflow-hidden rounded-full border border-primary/60 bg-background/50 shadow-[0_0_48px_rgba(47,125,230,0.4)] md:size-40"
        variants={revealUp}
        whileHover={
          prefersReducedMotion ? undefined : { y: -4, scale: 1.02, rotate: 0.8 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.35, ease: "easeOut" }
        }
      >
        <Image
          src="/avatar.png"
          alt="Avatar Damian Barzyk"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 10rem, 8rem"
        />
      </motion.div>
      <div className="pointer-events-none absolute -top-4 flex size-44 items-center justify-center md:size-52">
        {AVATAR_PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={`absolute rounded-full bg-primary/70 shadow-[0_0_12px_rgba(81,164,255,0.6)] ${particle.className}`}
            style={{
              animationName: "hero-particle-float",
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              willChange: "transform, opacity",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <motion.div className="flex flex-col gap-4" variants={revealUp}>
        <h1
          className="text-5xl font-bold uppercase md:text-5xl"
          aria-label="Damian Barzyk"
        >
          <span className="sr-only">Damian Barzyk</span>
          <motion.span
            className="text-foreground"
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
            className="text-primary"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo
        debitis corrupti ipsam sit? Architecto voluptate labore suscipit ullam
        cumque.
      </motion.p>

      <HeroSocialLinks
        revealUp={revealUp}
        staggerGroup={staggerGroup}
        prefersReducedMotion={prefersReducedMotion}
      />
    </motion.div>
  );
}
