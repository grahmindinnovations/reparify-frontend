"use client";

import { useRef } from "react";

type SectionItem = {
  name: string;
  image: string;
};

type SectionData = {
  title: string;
  items: SectionItem[];
};

const SECTION_CARD_WIDTH = 160;
const SECTION_GAP = 16;
const SECTION_STEP = SECTION_CARD_WIDTH + SECTION_GAP;

const sections: SectionData[] = [
  {
    title: "Shop By Bike",
    items: [
      { name: "KTM", image: "https://dummyimage.com/280x180/ffffff/f57c00&text=KTM" },
      { name: "KAWASAKI", image: "https://dummyimage.com/280x180/ffffff/2e7d32&text=KAWASAKI" },
      { name: "PIAGGIO", image: "https://dummyimage.com/280x180/ffffff/1565c0&text=PIAGGIO" },
      { name: "TVS", image: "https://dummyimage.com/280x180/ffffff/1976d2&text=TVS" },
      { name: "BAJAJ", image: "https://dummyimage.com/280x180/ffffff/1e88e5&text=BAJAJ" },
      { name: "BENELLI", image: "https://dummyimage.com/280x180/ffffff/37474f&text=BENELLI" },
      { name: "YAMAHA", image: "https://dummyimage.com/280x180/ffffff/0d47a1&text=YAMAHA" },
      { name: "HONDA", image: "https://dummyimage.com/280x180/ffffff/d32f2f&text=HONDA" },
    ],
  },
  {
    title: "Shop By Bike Accessories",
    items: [
      { name: "BIKE PROTECTION", image: "https://dummyimage.com/280x180/ffffff/00838f&text=Bike+Protection" },
      { name: "HANDLE PARTS", image: "https://dummyimage.com/280x180/ffffff/455a64&text=Handle+Parts" },
      { name: "BIKE ESSENTIALS", image: "https://dummyimage.com/280x180/ffffff/546e7a&text=Bike+Essentials" },
      { name: "RIDER PROTECTION", image: "https://dummyimage.com/280x180/ffffff/5d4037&text=Rider+Protection" },
      { name: "TOURING ACCESSORIES", image: "https://dummyimage.com/280x180/ffffff/6d4c41&text=Touring+Accessories" },
      { name: "LIGHTS AND ELECTRONICS", image: "https://dummyimage.com/280x180/ffffff/1a237e&text=Lights+%26+Electronics" },
      { name: "PHONE MOUNTS", image: "https://dummyimage.com/280x180/ffffff/4e342e&text=Phone+Mounts" },
      { name: "LUGGAGE BAGS", image: "https://dummyimage.com/280x180/ffffff/263238&text=Luggage+Bags" },
    ],
  },
  {
    title: "Shop By Bike Spare Parts",
    items: [
      { name: "SERVICE PARTS", image: "https://dummyimage.com/280x180/ffffff/ef6c00&text=Service+Parts" },
      { name: "CHAIN SPROCKET", image: "https://dummyimage.com/280x180/ffffff/5d4037&text=Chain+Sprocket" },
      { name: "ELECTRICAL PARTS", image: "https://dummyimage.com/280x180/ffffff/283593&text=Electrical+Parts" },
      { name: "ENGINE SYSTEM", image: "https://dummyimage.com/280x180/ffffff/424242&text=Engine+System" },
      { name: "FUEL SYSTEM", image: "https://dummyimage.com/280x180/ffffff/00695c&text=Fuel+System" },
      { name: "CLUTCH PARTS", image: "https://dummyimage.com/280x180/ffffff/6d4c41&text=Clutch+Parts" },
      { name: "AIR FILTERS", image: "https://dummyimage.com/280x180/ffffff/455a64&text=Air+Filters" },
      { name: "BRAKE PADS", image: "https://dummyimage.com/280x180/ffffff/b71c1c&text=Brake+Pads" },
    ],
  },
];

function ScrollRow({ title, items }: SectionData) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;

    row.scrollBy({ left: direction * SECTION_STEP, behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-4xl font-semibold tracking-tight text-zinc-900">{title}</h3>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByStep(-1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              aria-label={`Scroll ${title} left`}
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => scrollByStep(1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
              aria-label={`Scroll ${title} right`}
            >
              &rarr;
            </button>
          </div>
        </div>

        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <article key={item.name} className="min-w-[160px]">
              <div className="flex h-36 items-center justify-center bg-white p-3 shadow-sm ring-1 ring-black/5">
                <img src={item.image} alt={item.name} className="h-24 w-full object-contain" loading="lazy" />
              </div>
              <p className="mt-3 text-center text-xs font-bold tracking-wide text-zinc-900">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ShopDiscoverySections() {
  return (
    <>
      {sections.map((section) => (
        <ScrollRow key={section.title} title={section.title} items={section.items} />
      ))}
    </>
  );
}
