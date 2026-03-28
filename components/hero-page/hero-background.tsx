"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroBackgroundProps = {
  prefersReducedMotion: boolean;
};

export function HeroBackground({ prefersReducedMotion }: HeroBackgroundProps) {
  return (
    <>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: prefersReducedMotion ? 1 : 1.08, opacity: 0.2 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }
        }
      >
        <Image
          src="/hero.jpg"
          alt="Tlo hero"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(81,164,255,0.32),transparent_52%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1, ease: "easeOut", delay: 0.15 }
        }
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,24,0.22),rgba(2,10,24,0.92)_48%,rgba(2,10,24,1))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 1.1, ease: "easeOut", delay: 0.25 }
        }
      />

      <motion.div
        className="absolute left-8 top-20 h-24 w-1 origin-top bg-primary md:left-14 md:h-32"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }
        }
      />
      <motion.div
        className="absolute bottom-14 right-8 h-24 w-1 origin-bottom bg-primary/70 md:right-14 md:h-32"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }
        }
      />
    </>
  );
}
