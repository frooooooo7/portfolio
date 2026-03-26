export function HeroScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex h-12 w-7 justify-center rounded-full border border-primary/70">
        <span
          className="mt-2 block size-2 rounded-full bg-primary"
          style={{ animation: "hero-scroll-dot 3s ease-in-out infinite" }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
