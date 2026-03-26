import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      <Image
        src="/hero.jpg"
        alt="Tlo hero"
        fill
        priority
        className="object-cover object-center opacity-30"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(81,164,255,0.32),transparent_52%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,10,24,0.22),rgba(2,10,24,0.92)_48%,rgba(2,10,24,1))]" />

      <div className="absolute left-8 top-20 h-24 w-1 bg-primary md:left-14 md:h-32" />
      <div className="absolute bottom-14 right-8 h-24 w-1 bg-primary/70 md:right-14 md:h-32" />
    </>
  );
}
