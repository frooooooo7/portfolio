"use client";

import { createHeroBackgroundMotion } from "@/components/hero-page/motion/hero-background-motion";
import { motion } from "framer-motion";
import Image from "next/image";

type HeroBackgroundProps = {
  prefersReducedMotion: boolean;
};

export function HeroBackground({ prefersReducedMotion }: HeroBackgroundProps) {
  const {
    imageInitial,
    imageAnimate,
    imageTransition,
    radialTransition,
    linearTransition,
    leftAccentTransition,
    rightAccentTransition,
  } = createHeroBackgroundMotion(prefersReducedMotion);

  return (
    <>
      <motion.div
        className="absolute inset-0"
        initial={imageInitial}
        animate={imageAnimate}
        transition={imageTransition}
      >
        <Image
          src="/hero.jpg"
          alt="Tlo hero"
          fill
          priority
          quality={60}
          className="object-cover object-center opacity-30"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGESExQVFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoGZcSurO9t4baeSOJoVYqjFQW3OeOaKA/9k="
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(81,164,255,0.32),transparent_52%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={radialTransition}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,24,0.22),rgba(2,10,24,0.92)_48%,rgba(2,10,24,1))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={linearTransition}
      />

      <motion.div
        className="absolute left-8 top-20 h-24 w-1 origin-top bg-primary md:left-14 md:h-32"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={leftAccentTransition}
      />
      <motion.div
        className="absolute bottom-14 right-8 h-24 w-1 origin-bottom bg-primary/70 md:right-14 md:h-32"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={rightAccentTransition}
      />
    </>
  );
}
