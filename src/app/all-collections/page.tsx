import Link from "next/link";
import { allCollections } from "@/lib/all-collections-data";

export default function AllCollectionsPage() {
  return (
    <section className="bg-zinc-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">Collections</h1>

        <div className="mt-5 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {allCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/all-collections/${collection.slug}`}
              className="group block bg-white"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <p className="px-2 py-2 text-center text-sm font-medium text-zinc-900">{collection.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
