import { motion, type Variants } from "framer-motion";

type Fact = {
  label: string;
  value: string;
};

type AboutQuickFactsProps = {
  facts: Fact[];
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function AboutQuickFacts({
  facts,
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: AboutQuickFactsProps) {
  return (
    <motion.div className="grid gap-4 sm:grid-cols-3" variants={staggerGroup}>
      {facts.map((fact) => (
        <motion.article
          key={fact.label}
          className="rounded-2xl border border-primary/30 bg-card/75 p-4 backdrop-blur-sm"
          variants={revealUp}
          whileHover={
            prefersReducedMotion
              ? undefined
              : { y: -4, boxShadow: "0 12px 30px rgba(47,125,230,0.18)" }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <p className="text-2xl font-semibold text-foreground">{fact.value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {fact.label}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
