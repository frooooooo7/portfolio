"use client";

import { ProjectCard } from "@/components/projects-section/project-card";
import { createProjectsSectionMotion } from "@/components/projects-section/motion/projects-section-motion";
import { projects } from "@/components/projects-section/projects-data";
import { motion, useReducedMotion } from "framer-motion";

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { revealUp, staggerGroup } =
    createProjectsSectionMotion(prefersReducedMotion);

  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <motion.section
      id="projects"
      className="relative isolate overflow-hidden px-6 py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerGroup}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_20%,rgba(81,164,255,0.2),transparent_44%),radial-gradient(circle_at_86%_76%,rgba(103,232,249,0.16),transparent_46%)]" />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div className="mb-10 space-y-4 text-center" variants={revealUp}>
          <p className="inline-flex items-center rounded-full border border-primary/45 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary md:text-sm">
            Projects
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            My 5 highlighted projects.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Selected work across product design, engineering, and delivery, with
            a focus on measurable business impact.
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={staggerGroup}>
          {featuredProject ? (
            <ProjectCard
              key={featuredProject.id}
              title={featuredProject.title}
              category={featuredProject.category}
              description={featuredProject.description}
              tech={featuredProject.tech}
              impact={featuredProject.impact}
              imageSrc={featuredProject.imageSrc}
              galleryImages={featuredProject.galleryImages}
              liveUrl={featuredProject.liveUrl}
              githubUrl={featuredProject.githubUrl}
              featured={featuredProject.featured}
              revealUp={revealUp}
              staggerGroup={staggerGroup}
              prefersReducedMotion={prefersReducedMotion}
            />
          ) : null}

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={staggerGroup}
          >
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                tech={project.tech}
                impact={project.impact}
                imageSrc={project.imageSrc}
                galleryImages={project.galleryImages}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                revealUp={revealUp}
                staggerGroup={staggerGroup}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
