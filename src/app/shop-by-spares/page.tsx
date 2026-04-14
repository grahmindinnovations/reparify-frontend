import Link from "next/link";
import { getShopBySparesHref, shopBySparesGroups } from "@/lib/shop-by-spares-data";

export default function ShopBySparesPage() {
  return (
    <section className="bg-zinc-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">Shop By Spares</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Choose a spare category to view products and filters fetched from Reparify.
        </p>

        <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {shopBySparesGroups.map((group) => (
            <div key={group.category} className="rounded-md bg-white p-3 ring-1 ring-zinc-200">
              <h2 className="text-xs font-bold tracking-wide text-zinc-900">{group.category}</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                {(group.items.length ? group.items : [group.category]).map((item) => (
                  <li key={item}>
                    <Link href={getShopBySparesHref(group.category, item)} className="hover:text-orange-500">
                      {item}
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
