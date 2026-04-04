import { motion, type Variants } from "framer-motion";

type ContactHeaderProps = {
  revealUp: Variants;
};

export function ContactHeader({ revealUp }: ContactHeaderProps) {
  return (
    <motion.div className="mb-10 space-y-4 text-center" variants={revealUp}>
      <p className="inline-flex items-center rounded-full border border-primary/45 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary md:text-sm">
        Contact
      </p>
      <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
        Let&apos;s build something together.
      </h2>
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Have an idea, need a fullstack partner, or want to make a project? Reach
        out and I will get back to you soon.
      </p>
    </motion.div>
  );
}
