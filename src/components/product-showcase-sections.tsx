"use client";

import { useRef } from "react";
import Link from "next/link";

type ProductItem = {
  name: string;
  price: string;
  oldPrice?: string;
  emi: string;
  cta: string;
  image: string;
};

type ProductSection = {
  title: string;
  items: ProductItem[];
};

const CARD_WIDTH = 185;
const STEP = CARD_WIDTH;

const sections: ProductSection[] = [
  {
    title: "Combo Offers",
    items: [
      { name: "RE Continental GT 650 Performance Combo", price: "INR.25,789", emi: "or 8595/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/5d4037&text=Combo+1" },
      { name: "Red Rooster Performance Exhaust Kit", price: "INR.35,350", emi: "or 11782/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/455a64&text=Combo+2" },
      { name: "Honda CB Ceramic Brake Set", price: "INR.3,500", emi: "or 1167/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/616161&text=Combo+3" },
      { name: "NGK Iridium Plug Pack", price: "INR.27,779", emi: "or 9259/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/1a237e&text=Combo+4" },
      { name: "RE Hunter 350 New Classic Combo", price: "INR.12,930", emi: "or 4310/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/37474f&text=Combo+5" },
      { name: "Yamaha R15 V4 Ceramic Brake Pack", price: "INR.3,500", emi: "or 1167/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/263238&text=Combo+6" },
    ],
  },
  {
    title: "Auxiliary Lights",
    items: [
      { name: "Maddog Scout X Auxiliary Lights", price: "INR.9,547", emi: "or 3182/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/212121&text=Light+1" },
      { name: "DK 350 Mercedes Ultra Wide Light", price: "INR.4,599", emi: "or 1533/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/424242&text=Light+2" },
      { name: "HJG 7 LED Round Lamp Pair", price: "INR.8,990", oldPrice: "INR.12,500", emi: "or 2996/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/f9a825&text=Light+3" },
      { name: "DK 40 Spotlight White Yellow", price: "INR.5,999", emi: "or 1999/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/455a64&text=Light+4" },
      { name: "MK07 LCP Waterproof Pair", price: "INR.7,999", oldPrice: "INR.9,200", emi: "or 2666/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/263238&text=Light+5" },
      { name: "HJG Minus Headlight LED 7 inch", price: "INR.3,500", oldPrice: "INR.5,500", emi: "or 1167/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/6d4c41&text=Light+6" },
    ],
  },
  {
    title: "Adventure Awaits",
    items: [
      { name: "Motowolf Convertible Expansion Bag", price: "INR.6,450", oldPrice: "INR.10,000", emi: "or 2150/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/37474f&text=Adventure+1" },
      { name: "Motowolf Waterproof Mesh Body Protector", price: "INR.6,450", oldPrice: "INR.9,500", emi: "or 2150/Month", cta: "Choose Options", image: "https://dummyimage.com/340x220/ffffff/212121&text=Adventure+2" },
      { name: "Motocross Mountain Riding Goggles", price: "INR.1,490", oldPrice: "INR.2,000", emi: "or 497/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/1565c0&text=Adventure+3" },
      { name: "Motocross Yellow Blue Goggles", price: "INR.1,490", oldPrice: "INR.2,000", emi: "or 497/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/283593&text=Adventure+4" },
      { name: "Motocross Pink Black Goggles", price: "INR.1,490", oldPrice: "INR.2,000", emi: "or 497/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/8e24aa&text=Adventure+5" },
      { name: "Motocross Purple Lens Goggles", price: "INR.1,490", oldPrice: "INR.2,000", emi: "or 497/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/5e35b1&text=Adventure+6" },
    ],
  },
  {
    title: "Clearance Sale",
    items: [
      { name: "KTM Duke Meter Shell Upper Cover", price: "INR.529", oldPrice: "INR.999", emi: "or 176/Month", cta: "Choose Options", image: "https://dummyimage.com/340x220/ffffff/455a64&text=Clearance+1" },
      { name: "KTM 390 Adventure Side Stand Extender", price: "INR.1,150", oldPrice: "INR.1,999", emi: "or 383/Month", cta: "Choose Options", image: "https://dummyimage.com/340x220/ffffff/f57c00&text=Clearance+2" },
      { name: "Yamaha R15 V3 Radiator Grill", price: "INR.699", oldPrice: "INR.1,999", emi: "or 233/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/263238&text=Clearance+3" },
      { name: "Honda CBR Front Fork Oil Seal", price: "INR.1,599", oldPrice: "INR.1,999", emi: "or 533/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/111111&text=Clearance+4" },
      { name: "Ninja 650 Ring Brass Chain Set", price: "INR.15,591", oldPrice: "INR.16,912", emi: "or 5196/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/5d4037&text=Clearance+5" },
      { name: "Universal Side Stand Sensor", price: "INR.799", oldPrice: "INR.1,299", emi: "or 266/Month", cta: "Add To Cart", image: "https://dummyimage.com/340x220/ffffff/37474f&text=Clearance+6" },
    ],
  },
];

function ProductRow({ title, items }: ProductSection) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollByStep = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * STEP, behavior: "smooth" });
  };

  return (
    <section className="bg-zinc-200 py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-4xl font-semibold tracking-tight text-zinc-900">{title}</h3>
          <Link href="#" className="text-sm font-medium text-zinc-900 hover:text-zinc-700">
            View all
          </Link>
        </div>

        <div className="relative">
          <div
            ref={rowRef}
            className="flex overflow-x-auto border border-zinc-300 bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => (
              <article key={item.name} className="min-w-[185px] border-r border-zinc-200 p-2.5">
                <div className="flex h-36 items-center justify-center">
                  <img src={item.image} alt={item.name} className="h-28 w-full object-contain" loading="lazy" />
                </div>
                <h4 className="line-clamp-2 min-h-[38px] text-sm font-medium text-zinc-900">{item.name}</h4>
                <p className="mt-2 text-sm text-red-700">
                  Price : <span className="font-medium">{item.price}</span>
                  {item.oldPrice ? <span className="ml-2 text-zinc-400 line-through">{item.oldPrice}</span> : null}
                </p>
                <p className="mt-1 text-[11px] text-zinc-500">or {item.emi} | Buy on EMI</p>
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
            aria-label={`Scroll ${title} left`}
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            className="absolute -right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 shadow-sm transition hover:border-zinc-400 hover:text-zinc-900"
            aria-label={`Scroll ${title} right`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ProductShowcaseSections() {
  return (
    <>
      {sections.map((section) => (
        <ProductRow key={section.title} title={section.title} items={section.items} />
      ))}
    </>
  );
}
