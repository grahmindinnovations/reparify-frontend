import Link from "next/link";
import { getShopByBikeHref, shopByBikeGroups } from "@/lib/shop-by-bike-data";

export default function ShopByBikePage() {
  return (
    <section className="bg-zinc-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">Shop By Bike</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Choose your bike model to view category-specific products and filters.
        </p>

        <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {shopByBikeGroups.map((group) => (
            <div key={group.brand} className="rounded-md bg-white p-3 ring-1 ring-zinc-200">
              <h2 className="text-xs font-bold tracking-wide text-zinc-900">{group.brand}</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                {(group.models.length ? group.models : [group.brand]).map((model) => (
                  <li key={model}>
                    <Link href={getShopByBikeHref(group.brand, model)} className="hover:text-orange-500">
                      {model}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
