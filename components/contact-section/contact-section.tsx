"use client";

import { ContactForm } from "@/components/contact-section/contact-form";
import { ContactHeader } from "@/components/contact-section/contact-header";
import { ContactInfoPanel } from "@/components/contact-section/contact-info-panel";
import { contactItems } from "@/components/contact-section/contact-data";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const baseTransition: Transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  const revealUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: baseTransition },
  };

  const staggerGroup: Variants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  return (
    <motion.section
      id="contact"
      className="relative isolate overflow-hidden px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerGroup}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_20%,rgba(81,164,255,0.2),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(103,232,249,0.16),transparent_44%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <ContactHeader revealUp={revealUp} />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ContactInfoPanel
            items={contactItems}
            revealUp={revealUp}
            staggerGroup={staggerGroup}
          />

          <ContactForm revealUp={revealUp} />
        </div>
      </div>
    </motion.section>
  );
}
