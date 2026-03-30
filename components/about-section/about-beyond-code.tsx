"use client";

import { beyondCodeItems } from "@/components/about-section/about-data";
import { motion, type Variants } from "framer-motion";
import {
  Gamepad2,
  Dumbbell,
  Network,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "gamepad-2": Gamepad2,
  dumbbell: Dumbbell,
  network: Network,
};

type AboutBeyondCodeProps = {
  revealUp: Variants;
  staggerGroup: Variants;
};

export function AboutBeyondCode({
  revealUp,
  staggerGroup,
}: AboutBeyondCodeProps) {
  return (
    <motion.div className="mt-4 space-y-5" variants={revealUp}>
      {/* Section label */}
      <motion.p
        className="text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground/60"
        variants={revealUp}
      >
        Beyond the code
      </motion.p>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 gap-3"
        variants={staggerGroup}
      >
        {beyondCodeItems.map((item) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <motion.div
              key={item.title}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-primary/20 bg-card/50 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/45 hover:bg-card/70 mobile-no-backdrop"
              variants={revealUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Glow on hover */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_28px_rgba(47,125,230,0.12)] transition-opacity duration-300 group-hover:opacity-100 mobile-no-shadow"
                aria-hidden="true"
              />

              {/* Icon */}
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
                {Icon && (
                  <Icon className="size-4 text-primary" aria-hidden="true" />
                )}
              </span>

              {/* Text */}
              <div>
                <p className="mb-1 text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
