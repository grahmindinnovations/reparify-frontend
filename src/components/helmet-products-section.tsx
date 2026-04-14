"use client";

import { useRef } from "react";
import Link from "next/link";

type HelmetItem = {
  name: string;
  price: string;
  emi: string;
  cta: string;
  image: string;
};

const helmets: HelmetItem[] = [
  {
    name: "SMK Allterra Fulmine Off-Road Helmet",
    price: "INR.5,900",
    emi: "or 1966/Month",
    cta: "Choose Options",
    image: "https://dummyimage.com/300x220/ffffff/ff6f00&text=SMK+Helmet+1",
  },
  {
    name: "SMK Allterra Unicolour Off Road Helmet",
    price: "INR.5,600",
    emi: "or 1866/Month",
    cta: "Choose Options",
    image: "https://dummyimage.com/300x220/ffffff/8bc34a&text=SMK+Helmet+2",
  },
  {
    name: "SMK Allterra X-Aces Motocross Helmet",
    price: "INR.5,900",
    emi: "or 1966/Month",
    cta: "Add To Cart",
    image: "https://dummyimage.com/300x220/ffffff/c0ca33&text=SMK+Helmet+3",
  },
  {
    name: "SMK Allterra X-THROTTLE Off Road Helmet",
    price: "INR.5,900",
    emi: "or 1966/Month",
    cta: "Choose Options",
    image: "https://dummyimage.com/300x220/ffffff/aeea00&text=SMK+Helmet+4",
  },
  {
    name: "SMK Full FACE Retro Style Helmet",
    price: "INR.6,000",
    emi: "or 2000/Month",
    cta: "Choose Options",
    image: "https://dummyimage.com/300x220/ffffff/4fc3f7&text=SMK+Helmet+5",
  },
  {
    name: "SMK GTJ Escape Open Face Helmet",
    price: "INR.3,800",
    emi: "or 1267/Month",
    cta: "Choose Options",
    image: "https://dummyimage.com/300x220/ffffff/1976d2&text=SMK+Helmet+6",
  },
  {
    name: "SMK Stellar Sports Helmet",
    price: "INR.4,700",
    emi: "or 1567/Month",
    cta: "Choose Options",
    image: "https://dummyimage.com/300x220/ffffff/43a047&text=SMK+Helmet+7",
  },
];

const CARD_WIDTH = 154;
const CARD_GAP = 0;
const STEP = CARD_WIDTH + CARD_GAP;

export default function HelmetProductsSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * STEP, behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-4xl font-semibold tracking-tight text-zinc-900">Helmets</h3>
          <Link href="#" className="text-sm font-medium text-zinc-900 hover:text-zinc-700">
            View all
          </Link>
        </div>

        <div className="relative">
          <div
            ref={rowRef}
            className="flex overflow-x-auto border border-zinc-300 bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {helmets.map((item) => (
              <article key={item.name} className="min-w-[154px] border-r border-zinc-200 p-2">
                <div className="flex h-40 items-center justify-center">
                  <img src={item.image} alt={item.name} className="h-32 w-full object-contain" loading="lazy" />
                </div>
                <h4 className="line-clamp-2 min-h-[36px] text-sm font-medium text-zinc-900">{item.name}</h4>
                <p className="mt-2 text-sm font-medium text-zinc-900">{item.price}</p>
                <p className="mt-1 text-[11px] text-zinc-500">{item.emi}</p>
                <button
                  type="button"
                  className="mt-3 h-9 w-full rounded-md bg-black text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800"
                >
                  {item.cta}
                </button>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            className="absolute -left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:text-zinc-900"
            aria-label="Scroll helmets left"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            className="absolute -right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:text-zinc-900"
            aria-label="Scroll helmets right"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
