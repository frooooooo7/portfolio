import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

type FeaturedProjectGalleryProps = {
  title: string;
  galleryImages: string[];
  featured: boolean;
};

export function FeaturedProjectGallery({
  title,
  galleryImages,
  featured,
}: FeaturedProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-primary/35 bg-background/45 ${
        featured ? "h-80 md:h-96" : "h-56 md:h-72"
      }`}
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {galleryImages.map((src, index) => (
            <div className="relative h-full min-w-0 flex-[0_0_100%]" key={src}>
              <Image
                src={src}
                alt={`${title} screenshot ${index + 1}`}
                fill
                loading="lazy"
                quality={90}
                className="object-contain object-center"
                sizes="(min-width: 1024px) 80vw, (min-width: 768px) 70vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-3 pb-3">
        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/35 px-2 py-1 backdrop-blur-sm">
          {galleryImages.map((src, index) => (
            <button
              key={`${src}-dot`}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className="h-1.5 w-1.5 rounded-full bg-white/70 transition hover:bg-white"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-white/35 bg-black/35 p-1 backdrop-blur-sm">
          <button
            type="button"
            onClick={scrollPrev}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/90 transition hover:bg-white/15"
            aria-label="Next image"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
