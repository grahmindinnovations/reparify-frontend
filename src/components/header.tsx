"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/all-collections", label: "All Collections" },
  { href: "/shop-by-bike", label: "Shop By Bike" },
  { href: "/shop-by-spares", label: "Shop By Spares" },
  { href: "/shop-by-accessories", label: "Shop By Accessories" },
  { href: "/wholesale-price", label: "Wholesale Price" },
  { href: "/track-order", label: "Track Order" },
  { href: "/faq", label: "Faq" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/return-and-replacement", label: "Return And Replacement" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-300/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-3xl font-black tracking-tight text-orange-500">
          sparify
        </Link>

        <div className="relative flex-1">
          <input
            type="search"
            placeholder="Search products, brands and bike parts"
            className="h-11 w-full rounded-full border border-zinc-300 bg-white px-5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
          />
        </div>

        <div className="hidden items-center gap-5 text-sm font-medium text-zinc-700 sm:flex">
          <Link href="/login" className="transition hover:text-zinc-900">
            Login
          </Link>
          <button className="transition hover:text-zinc-900" type="button">
            Cart
          </button>
        </div>
      </div>

      <nav className="border-t border-zinc-200 bg-white" aria-label="Main">
        <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 py-3 text-sm font-medium text-zinc-700 sm:px-6 lg:px-8">
          {menuItems.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={label}
                href={href}
                className={`whitespace-nowrap transition ${
                  isActive ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
