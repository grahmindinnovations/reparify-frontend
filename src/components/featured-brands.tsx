"use client";

import { useEffect, useRef } from "react";

const brands = [
  { name: "EBC Brakes", logo: "https://dummyimage.com/240x120/ffffff/1f3b8f&text=EBC+BRAKES" },
  { name: "JB Racing", logo: "https://dummyimage.com/240x120/ffffff/111111&text=JB+RACING" },
  { name: "BSDDP", logo: "https://dummyimage.com/240x120/ffffff/c2185b&text=BSDDP" },
  { name: "Race Dynamics", logo: "https://dummyimage.com/240x120/ffffff/222222&text=RACE+DYNAMICS" },
  { name: "5M Autocare", logo: "https://dummyimage.com/240x120/8bc34a/111111&text=5M+AUTOCARE" },
  { name: "BluArmor", logo: "https://dummyimage.com/240x120/ffffff/0d47a1&text=bluarmor" },
  { name: "Motul", logo: "https://dummyimage.com/240x120/ffffff/e53935&text=MOTUL" },
  { name: "Brembo", logo: "https://dummyimage.com/240x120/ffffff/d32f2f&text=BREMBO" },
];

const CARD_WIDTH = 172;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;

export default function FeaturedBrands() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (direction: 1 | -1) => {
    const container = scrollerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction * STEP,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollerRef.current;
    if (!container) return;

    const timer = window.setInterval(() => {
      const maxLeft = container.scrollWidth - container.clientWidth;
      const nextLeft = container.scrollLeft + STEP;

      if (nextLeft >= maxLeft - 4) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      container.scrollBy({ left: STEP, behavior: "smooth" });
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-zinc-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-zinc-900">Featured Brands</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByStep(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              aria-label="Scroll featured brands left"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => scrollByStep(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 bg-white text-lg font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              aria-label="Scroll featured brands right"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="flex h-44 min-w-[172px] items-center justify-center rounded-sm bg-white p-3 shadow-sm ring-1 ring-black/5"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-24 w-full object-contain"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
