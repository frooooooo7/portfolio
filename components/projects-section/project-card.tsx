import { Button } from "@/components/ui/button";
import { FeaturedProjectGallery } from "@/components/projects-section/featured-project-gallery";
import { getProjectCardMotion } from "@/components/projects-section/motion/project-card-motion";
import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  impact: string;
  imageSrc?: string;
  galleryImages?: string[];
  liveUrl: string | null;
  githubUrl: string;
  featured?: boolean;
  revealUp: Variants;
  staggerGroup: Variants;
  prefersReducedMotion: boolean;
};

export function ProjectCard({
  title,
  category,
  description,
  tech,
  impact,
  imageSrc,
  galleryImages,
  liveUrl,
  githubUrl,
  featured = false,
  revealUp,
  staggerGroup,
  prefersReducedMotion,
}: ProjectCardProps) {
  const { whileHover, transition } = getProjectCardMotion(prefersReducedMotion);
  const hasGallery = (galleryImages?.length ?? 0) > 0;

  return (
    <motion.article
      variants={revealUp}
      className={`relative overflow-hidden rounded-3xl border p-6 md:p-7 ${
        featured
          ? "border-primary/45 bg-linear-to-br from-primary/25 via-primary/10 to-cyan-300/20 shadow-[0_0_38px_rgba(47,125,230,0.2)] mobile-no-shadow"
          : "border-primary/30 bg-card/75 shadow-[0_0_30px_rgba(47,125,230,0.14)] mobile-no-shadow"
      }`}
      whileHover={whileHover}
      transition={transition}
    >
      <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-primary/20 blur-2xl mobile-no-blur" />

      <div className="relative z-10 space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
            {category}
          </p>
          <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <motion.ul className="flex flex-wrap gap-2" variants={staggerGroup}>
          {tech.map((item) => (
            <motion.li key={item} variants={revealUp}>
              <span className="inline-flex rounded-full border border-primary/35 bg-background/65 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-foreground md:text-sm">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="text-sm font-medium text-primary md:text-base">
          {impact}
        </p>
        {hasGallery && galleryImages ? (
          <FeaturedProjectGallery
            title={title}
            galleryImages={galleryImages}
            featured={featured}
          />
        ) : (
          <div
            className={`relative overflow-hidden rounded-2xl border border-primary/35 bg-background/45 ${
              featured ? "h-72 md:h-80" : "h-52 md:h-60"
            }`}
          >
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${title} preview`}
                fill
                loading="lazy"
                quality={75}
                className="object-contain object-center"
                sizes="(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-4 text-center text-sm font-medium text-muted-foreground md:text-base">
                Preview unavailable for this project.
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          {liveUrl ? (
            <Button
              asChild
              className="h-9 rounded-full border border-primary/35 bg-primary/90 px-4 text-xs uppercase tracking-widest text-primary-foreground"
            >
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Live <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </Button>
          ) : (
            <span className="inline-flex h-9 items-center rounded-full border border-primary/25 bg-background/45 px-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Live soon
            </span>
          )}

          <Button
            asChild
            variant="outline"
            className="h-9 rounded-full border-primary/40 bg-background/55 px-4 text-xs uppercase tracking-widest"
          >
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
              <span
                className="size-3.5 bg-current"
                style={{
                  WebkitMaskImage: "url(/github-142-svgrepo-com.svg)",
                  maskImage: "url(/github-142-svgrepo-com.svg)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
                aria-hidden="true"
              />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
