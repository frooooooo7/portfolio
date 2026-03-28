import { motion } from "framer-motion";

type AboutBackgroundProps = {
  prefersReducedMotion: boolean;
};

export function AboutBackground({
  prefersReducedMotion,
}: AboutBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute -left-14 top-16 h-52 w-52 rounded-full bg-primary/25 blur-3xl"
        animate={
          prefersReducedMotion
            ? { opacity: 0.65 }
            : {
                x: [0, 20, 0],
                y: [0, -16, 0],
                scale: [0.95, 1.06, 0.95],
              }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 16, ease: "easeInOut", repeat: Infinity }
        }
      />
      <motion.div
        className="absolute -right-14 bottom-10 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl"
        animate={
          prefersReducedMotion
            ? { opacity: 0.6 }
            : {
                x: [0, -22, 0],
                y: [0, 14, 0],
                scale: [1.04, 0.96, 1.04],
              }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 18, ease: "easeInOut", repeat: Infinity }
        }
      />
    </div>
  );
}
