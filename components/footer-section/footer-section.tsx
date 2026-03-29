"use client";

import {
  footerNavItems,
  footerSocialItems,
} from "@/components/footer-section/footer-data";
import { createFooterSectionMotion } from "@/components/footer-section/motion/footer-section-motion";
import { motion, useReducedMotion } from "framer-motion";

export function FooterSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { revealUp, staggerGroup } =
    createFooterSectionMotion(prefersReducedMotion);
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative isolate overflow-hidden border-t border-primary/25 px-6 py-12"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerGroup}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(81,164,255,0.2),transparent_45%),linear-gradient(180deg,rgba(5,14,30,0.7),rgba(2,9,20,0.95))]" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <motion.div
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          variants={revealUp}
        >
          <div>
            <p className="text-3xl tracking-wider">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">fro</span>
              <span className="text-primary">/&gt;</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Front-end craft focused on speed, clarity, and interaction quality.
            </p>
          </div>

          <motion.nav
            className="flex flex-wrap items-center gap-4 md:gap-5"
            variants={staggerGroup}
            aria-label="Footer navigation"
          >
            {footerNavItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
                variants={revealUp}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>

        <motion.div
          className="flex flex-col items-start justify-between gap-4 border-t border-primary/20 pt-6 sm:flex-row sm:items-center"
          variants={revealUp}
        >
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {currentYear} Damian Barzyk. All rights reserved.
          </p>

          <motion.div className="flex items-center gap-2" variants={staggerGroup}>
            {footerSocialItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                title={item.label}
                aria-label={item.label}
                className="flex size-10 items-center justify-center rounded-full border border-primary/30 bg-background/50 text-primary transition-colors hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                variants={revealUp}
              >
                <span
                  className="size-4 bg-current"
                  style={{
                    WebkitMaskImage: `url(${item.iconSrc})`,
                    maskImage: `url(${item.iconSrc})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                  }}
                  aria-hidden="true"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}