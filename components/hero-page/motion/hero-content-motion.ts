"use client";

import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionStyle,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from "framer-motion";
import { type MouseEventHandler, useEffect, useState } from "react";

export const FIRST_NAME = "Damian";
export const LAST_NAME = "Barzyk";

type HeroContentMotion = {
  contentStyle: MotionStyle | undefined;
  glowStyle: MotionStyle | undefined;
  headingStagger: Variants;
  letterReveal: Variants;
  avatarHover: TargetAndTransition | undefined;
  avatarTransition: Transition;
  handleMouseMove: MouseEventHandler<HTMLDivElement>;
  handleMouseLeave: () => void;
};

export function useHeroContentMotion(
  prefersReducedMotion: boolean,
): HeroContentMotion {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  const disabled = prefersReducedMotion || isMobile;

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

  const contentStyle: MotionStyle | undefined = disabled
    ? undefined
    : { x: contentX, y: contentY };

  const glowStyle: MotionStyle | undefined = disabled
    ? undefined
    : { x: glowX, y: glowY };

  const avatarHover: TargetAndTransition | undefined = disabled
    ? undefined
    : { y: -4, scale: 1.02, rotate: 0.8 };

  const avatarTransition: Transition = disabled
    ? { duration: 0 }
    : { duration: 0.35, ease: "easeOut" };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (disabled) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - bounds.left) / bounds.width;
    const ny = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((nx - 0.5) * 2);
    pointerY.set((ny - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return {
    contentStyle,
    glowStyle,
    headingStagger,
    letterReveal,
    avatarHover,
    avatarTransition,
    handleMouseMove,
    handleMouseLeave,
  };
}