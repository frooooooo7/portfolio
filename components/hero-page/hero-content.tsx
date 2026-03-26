import { AVATAR_PARTICLES } from "@/components/hero-page/avatar-particles";
import { HeroSocialLinks } from "@/components/hero-page/hero-social-links";
import Image from "next/image";

export function HeroContent() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center">
      <div className="relative size-32 overflow-hidden rounded-full border border-primary/60 bg-background/50 shadow-[0_0_48px_rgba(47,125,230,0.4)] md:size-40">
        <Image
          src="/avatar.png"
          alt="Avatar Damian Barzyk"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 10rem, 8rem"
        />
      </div>
      <div className="pointer-events-none absolute -top-4 flex size-44 items-center justify-center md:size-52">
        {AVATAR_PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={`absolute rounded-full bg-primary/70 shadow-[0_0_12px_rgba(81,164,255,0.6)] ${particle.className}`}
            style={{
              animationName: "hero-particle-float",
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              willChange: "transform, opacity",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold uppercase md:text-5xl">
          <span className="text-foreground">Damian</span>{" "}
          <span className="text-primary">Barzyk</span>
        </h1>
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground md:text-xl">
          Web Developer
        </p>
      </div>

      <p className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-primary md:text-sm">
        <span
          className="size-2 rounded-full bg-emerald-400"
          aria-hidden="true"
        />
        Available for work
      </p>

      <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo
        debitis corrupti ipsam sit? Architecto voluptate labore suscipit ullam
        cumque.
      </p>

      <HeroSocialLinks />
    </div>
  );
}
