import BrandWeTrust from "@/components/brand-we-trust";
import Link from "next/link";
import FeaturedBrands from "@/components/featured-brands";
import HelmetProductsSection from "@/components/helmet-products-section";
import HomeLowerSections from "@/components/home-lower-sections";
import ProductShowcaseSections from "@/components/product-showcase-sections";
import ShopDiscoverySections from "@/components/shop-discovery-sections";

const heroHighlights = ["Free shipping above Rs. 999", "100% genuine parts", "7-day easy returns"];
const shopCategories = [
  {
    name: "Performance parts",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Brake System",
    image:
      "https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Helmets",
    image:
      "https://images.unsplash.com/photo-1665948836459-95f47c57ec37?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Luggage",
    image:
      "https://images.unsplash.com/photo-1623408457618-7f7886f4ea5f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lights & electronics",
    image:
      "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rider Protection",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-zinc-900 via-zinc-900/70 to-zinc-800" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.25),transparent_45%)]" />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl content-center gap-8 px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
              Performance Parts Store
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Ride Better with Premium Bike Accessories
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-200 sm:text-lg">
              Explore helmets, riding gear, maintenance tools, and genuine spare parts for every
              ride. Built for riders who want quality, fit, and fast delivery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-orange-500 px-7 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/40 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Collections
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2 text-xs font-medium text-zinc-200 sm:gap-3 sm:text-sm">
              {heroHighlights.map((item) => (
                <li key={item} className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-200 py-12 sm:py-14">
        <div className="absolute left-0 top-0 h-24 w-24 bg-zinc-950 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        <div className="absolute left-0 top-0 h-16 w-16 bg-orange-500 [clip-path:polygon(0_0,100%_0,0_100%)]" />
        <div className="absolute bottom-0 right-0 h-24 w-24 bg-zinc-950 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
        <div className="absolute bottom-0 right-0 h-16 w-16 bg-orange-500 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-zinc-900 sm:text-3xl">
            What Are You Looking For Today?
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {shopCategories.map((category) => (
              <Link
                key={category.name}
                href="#"
                className="group relative block h-44 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent transition group-hover:from-black/75" />
                <span className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedBrands />
      <ShopDiscoverySections />
      <HelmetProductsSection />
      <ProductShowcaseSections />
      <BrandWeTrust />
      <HomeLowerSections />
    </div>
  );
}
