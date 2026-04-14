import Link from "next/link";
import { notFound } from "next/navigation";
import {
  allCollections,
  getCategoryProducts,
  getCollectionBySlug,
  getCollectionFilters,
  getCollectionFiltersFromSparify,
} from "@/lib/all-collections-data";
import ExpandableFilterList from "@/components/expandable-filter-list";

type CollectionDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allCollections.map((item) => ({ slug: item.slug }));
}

export default async function CollectionDetailsPage({ params }: CollectionDetailsPageProps) {
  const { slug } = await params;
  const item = getCollectionBySlug(slug);

  if (!item) {
    notFound();
  }

  const products = getCategoryProducts(item);
  const filters =
    (await getCollectionFiltersFromSparify(item.slug)) ?? getCollectionFilters(item.slug);
  const inStockCount = filters.availability.inStock;
  const outOfStockCount = filters.availability.outOfStock;
  const highestPrice = filters.highestPrice ?? Math.max(...products.map((product) => product.price));
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
              <ExpandableFilterList items={filters.categories} initialVisibleCount={8} />
            </details>
          </div>

          {filters.vehicleConfigs.length > 0 ? (
            <div className="border-b border-zinc-300 py-4">
              <details open>
                <summary className="cursor-pointer list-none text-sm font-medium text-zinc-800">
                  Vehicle Config
                </summary>
                <ExpandableFilterList items={filters.vehicleConfigs} initialVisibleCount={8} />
              </details>
            </div>
          ) : null}
        </aside>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{item.name}</h1>
              <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-700">
              <span className="font-medium text-zinc-800">Sort by:</span>
              <select className="rounded-md border border-zinc-300 bg-white px-3 py-1.5">
                <option>Featured</option>
                <option>Best selling</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
              <span>{filters.productCount ?? products.length} products</span>
            </div>
          </div>

          <div className="grid border border-zinc-300 bg-white sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article key={product.id} className="relative border-b border-r border-zinc-300 p-2.5">
                {product.badge ? (
                  <span className="absolute left-2 top-2 rounded-full bg-zinc-900 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    {product.badge}
                  </span>
                ) : null}

                <div className="flex h-48 items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="line-clamp-2 min-h-[42px] text-base font-semibold text-zinc-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-red-700">
                  Price : <span className="font-medium">INR.{product.price.toLocaleString("en-IN")}</span>
                  {product.compareAtPrice ? (
                    <span className="ml-2 text-zinc-500 line-through">
                      INR.{product.compareAtPrice.toLocaleString("en-IN")}
                    </span>
                  ) : null}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  or ₹{product.emi}/Month |{" "}
                  <span className="rounded-sm border border-sky-500 px-1 text-[10px] text-sky-700">
                    Buy on EMI
                  </span>
                </p>
                {product.rating ? <p className="mt-1 text-sm text-amber-500">★★★★★ {product.rating}</p> : null}

                <button
                  type="button"
                  className={`mt-3 h-10 w-full rounded-md text-sm font-semibold ${
                    product.soldOut
                      ? "bg-zinc-500 text-zinc-100"
                      : "bg-black text-white transition hover:bg-zinc-800"
                  }`}
                >
                  {product.soldOut ? "Sold Out" : "Add To Cart"}
                </button>
              </article>
            ))}
          </div>

          <div className="mt-5">
            <Link href="/all-collections" className="text-sm font-medium text-zinc-700 hover:underline">
              ← Back to all collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
