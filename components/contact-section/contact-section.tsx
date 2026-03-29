"use client";

import { ContactForm } from "@/components/contact-section/contact-form";
import { ContactHeader } from "@/components/contact-section/contact-header";
import { ContactInfoPanel } from "@/components/contact-section/contact-info-panel";
import { contactItems } from "@/components/contact-section/contact-data";
import { createContactSectionMotion } from "@/components/contact-section/motion/contact-section-motion";
import { motion, useReducedMotion } from "framer-motion";

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { revealUp, staggerGroup } =
    createContactSectionMotion(prefersReducedMotion);

  return (
    <motion.section
      id="contact"
      className="relative isolate overflow-hidden px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
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
