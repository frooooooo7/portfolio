import { getAboutQuickFactCardMotion } from "@/components/about-section/motion/about-quick-facts-motion";
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
  const { whileHover, transition } =
    getAboutQuickFactCardMotion(prefersReducedMotion);

  return (
    <motion.div className="grid gap-4 sm:grid-cols-3" variants={staggerGroup}>
      {facts.map((fact) => (
        <motion.article
          key={fact.label}
          className="rounded-2xl border border-primary/30 bg-card/75 p-4 backdrop-blur-sm"
          variants={revealUp}
          whileHover={whileHover}
          transition={transition}
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
