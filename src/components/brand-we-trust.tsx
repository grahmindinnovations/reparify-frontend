import Link from "next/link";

const trustedBrands = [
  { name: "BAJAJ", logo: "https://dummyimage.com/260x140/ffffff/0d47a1&text=BAJAJ" },
  { name: "KTM", logo: "https://dummyimage.com/260x140/ffffff/f57c00&text=KTM" },
  { name: "ROYAL ENFIELD", logo: "https://dummyimage.com/260x140/ffffff/b71c1c&text=ROYAL+ENFIELD" },
  { name: "BENELLI", logo: "https://dummyimage.com/260x140/ffffff/1b5e20&text=Benelli" },
  { name: "BMW", logo: "https://dummyimage.com/260x140/ffffff/263238&text=BMW" },
  { name: "TVS", logo: "https://dummyimage.com/260x140/ffffff/1565c0&text=TVS" },
];

export default function BrandWeTrust() {
  return (
    <section className="bg-zinc-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-semibold tracking-tight text-zinc-900">Brand We Trust</h3>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustedBrands.map((brand) => (
            <Link key={brand.name} href="#" className="block">
              <div className="flex h-44 items-center justify-center bg-white p-4 shadow-sm ring-1 ring-black/5">
                <img src={brand.logo} alt={brand.name} className="h-24 w-full object-contain" loading="lazy" />
              </div>
              <p className="mt-3 text-center text-base font-bold tracking-wide text-zinc-900">{brand.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
