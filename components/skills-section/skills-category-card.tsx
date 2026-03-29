import { getSkillsCategoryCardMotion } from "@/components/skills-section/motion/skills-category-card-motion";
import { motion, type Variants } from "framer-motion";

type SkillsCategoryCardProps = {
  title: string;
  description: string;
  accentClass: string;
  skills: string[];
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function SkillsCategoryCard({
  title,
  description,
  accentClass,
  skills,
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: SkillsCategoryCardProps) {
  const { whileHover, transition } =
    getSkillsCategoryCardMotion(prefersReducedMotion);

  return (
    <motion.article
      variants={revealUp}
      className={`relative overflow-hidden rounded-3xl border bg-linear-to-br p-6 shadow-[0_0_32px_rgba(47,125,230,0.16)] mobile-no-shadow md:p-7 ${accentClass}`}
      whileHover={whileHover}
      transition={transition}
    >
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/20 blur-2xl mobile-no-blur" />

      <div className="relative z-10 space-y-5">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <motion.ul className="flex flex-wrap gap-2" variants={staggerGroup}>
          {skills.map((skill) => (
            <motion.li key={skill} variants={revealUp}>
              <span className="inline-flex items-center rounded-full border border-primary/35 bg-background/65 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.09em] text-foreground md:text-sm">
                {skill}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}
