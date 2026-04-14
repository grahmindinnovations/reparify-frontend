import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAccessoriesFiltersFromSparify,
  getShopByAccessoriesItemBySlug,
  shopByAccessoriesItems,
} from "@/lib/shop-by-accessories-data";
import ExpandableFilterList from "@/components/expandable-filter-list";

type ShopByAccessoriesDetailPageProps = {
  params: Promise<{ accessorySlug: string }>;
};

const productImagePool = [
  "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554223789-0f8d2d4f0f66?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1628996375848-6f8f8fd59bf2?auto=format&fit=crop&w=900&q=80",
];

export function generateStaticParams() {
  return shopByAccessoriesItems.map((item) => ({ accessorySlug: item.slug }));
}

export default async function ShopByAccessoriesDetailPage({ params }: ShopByAccessoriesDetailPageProps) {
  const { accessorySlug } = await params;
  const accessory = getShopByAccessoriesItemBySlug(accessorySlug);

  if (!accessory) {
    notFound();
  }

  const filters = await getAccessoriesFiltersFromSparify(accessory.searchTerm);

  const productCount = filters?.productCount ?? 16;
  const highestPrice = filters?.highestPrice ?? 19999;
  const inStockCount = filters?.availability.inStock ?? 11;
  const outOfStockCount = filters?.availability.outOfStock ?? 5;
  const categories = filters?.categories ?? [];
  const vehicleConfigs = filters?.vehicleConfigs ?? [];

  return (
    <section className="bg-zinc-200 py-8">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit border border-zinc-300 bg-zinc-100 p-4">
          <h2 className="text-sm font-semibold text-zinc-900">Filter:</h2>

          <div className="mt-5 border-b border-zinc-300 pb-4">
            <details open>
              <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
                Availability
              </summary>
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  In stock ({inStockCount})
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Out of stock ({outOfStockCount})
                </label>
              </div>
            </details>
          </div>

          <div className="border-b border-zinc-300 py-4">
            <details open>
              <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
                Price
              </summary>
              <div className="mt-3">
                <p className="text-xs text-zinc-600">
                  The highest price is INR.{highestPrice.toLocaleString("en-IN")}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="From"
                    className="h-8 w-full rounded border border-zinc-300 bg-white px-2 text-xs"
                  />
                  <span className="text-xs text-zinc-500">To</span>
                  <input
                    type="text"
                    placeholder="To"
                    className="h-8 w-full rounded border border-zinc-300 bg-white px-2 text-xs"
                  />
                </div>
              </div>
            </details>
          </div>

          <div className="border-b border-zinc-300 py-4">
            <details open>
              <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
                Category
              </summary>
              <ExpandableFilterList items={categories} initialVisibleCount={10} />
            </details>
          </div>

          {vehicleConfigs.length > 0 ? (
            <div className="border-b border-zinc-300 py-4">
              <details open>
                <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
                  Vehicle Config
                </summary>
                <ExpandableFilterList items={vehicleConfigs} initialVisibleCount={10} />
              </details>
            </div>
          ) : null}
        </aside>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                {accessory.category}
              </p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900">
                {accessory.name}
              </h1>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-700">
              <span className="font-medium text-zinc-800">Sort by:</span>
              <select className="rounded-md border border-zinc-300 bg-white px-3 py-1.5">
                <option>Featured</option>
                <option>Best selling</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
              <span>{productCount} products</span>
            </div>
          </div>

          <div className="grid border border-zinc-300 bg-white sm:grid-cols-2 xl:grid-cols-4">
            {productImagePool.map((image, index) => {
              const price = 1499 + index * 650;
              const compareAtPrice = index % 2 === 0 ? price + 500 : undefined;
              const soldOut = index > 5;
              return (
                <article key={`${accessory.slug}-${index}`} className="relative border-b border-r border-zinc-300 p-2.5">
                  <div className="flex h-48 items-center justify-center">
                    <img src={image} alt={`${accessory.name} product`} className="h-44 w-full object-contain" />
                  </div>

                  <h3 className="line-clamp-2 min-h-[42px] text-base font-semibold text-zinc-900">
                    {accessory.name} Product {index + 1}
                  </h3>
                  <p className="mt-2 text-sm text-red-700">
                    Price : <span className="font-medium">INR.{price.toLocaleString("en-IN")}</span>
                    {compareAtPrice ? (
                      <span className="ml-2 text-zinc-500 line-through">
                        INR.{compareAtPrice.toLocaleString("en-IN")}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">
                    or ₹{Math.round(price / 3)}/Month |{" "}
                    <span className="rounded-sm border border-sky-500 px-1 text-[10px] text-sky-700">
                      Buy on EMI
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-amber-500">★★★★★ {soldOut ? "4.6" : "5.0"}</p>

                  <button
                    type="button"
                    className={`mt-3 h-10 w-full rounded-md text-sm font-semibold ${
                      soldOut
                        ? "bg-zinc-500 text-zinc-100"
                        : "bg-black text-white transition hover:bg-zinc-800"
                    }`}
                  >
                    {soldOut ? "Sold Out" : "Add To Cart"}
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-5">
            <Link href="/shop-by-accessories" className="text-sm font-medium text-zinc-700 hover:underline">
              ← Back to Shop By Accessories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

