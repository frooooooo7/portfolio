import { getSkillsCategoryCardMotion } from "@/components/skills-section/motion/skills-category-card-motion";
import { motion, type Variants } from "framer-motion";
import type { Skill } from "./skills-data";
import type { ElementType } from "react";

type SkillsCategoryCardProps = {
  title: string;
  description: string;
  accentClass: string;
  icon: ElementType;
  skills: Skill[];
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function SkillsCategoryCard({
  title,
  description,
  accentClass,
  icon: Icon,
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
          <h3 className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-foreground">
            <Icon className="h-6 w-6 text-foreground" />
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <motion.ul className="flex flex-wrap gap-2 md:gap-3" variants={staggerGroup}>
          {skills.map((skill) => (
            <motion.li key={skill.name} variants={revealUp}>
              <span className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-background/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 transition-colors">
                <skill.icon className={`h-4 w-4 ${skill.color || "text-foreground"}`} />
                {skill.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.article>
  );
}
