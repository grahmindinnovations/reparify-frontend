"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getShopByBikeHref, shopByBikeGroups } from "@/lib/shop-by-bike-data";
import { getShopBySparesHref, shopBySparesGroups } from "@/lib/shop-by-spares-data";
import { getShopByAccessoriesHref, shopByAccessoriesGroups } from "@/lib/shop-by-accessories-data";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/all-collections", label: "All Collections" },
  { href: "/shop-by-bike", label: "Shop By Bike", hasDropdown: true },
  { href: "/shop-by-spares", label: "Shop By Spares", hasDropdown: true },
  { href: "/shop-by-accessories", label: "Shop By Accessories", hasDropdown: true },
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-4 py-3 text-sm font-medium text-zinc-700 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8">
          {menuItems.map(({ href, label, hasDropdown }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            return (
              <div key={label} className="relative">
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === label ? null : label))
                    }
                    className={`inline-flex items-center gap-1 whitespace-nowrap transition ${
                      isActive ? "text-orange-500" : "hover:text-orange-500"
                    }`}
                  >
                    {label}
                    <span className="text-xs text-zinc-500">⌄</span>
                  </button>
                ) : (
                  <Link
                    href={href}
                    className={`inline-flex items-center gap-1 whitespace-nowrap transition ${
                      isActive ? "text-orange-500" : "hover:text-orange-500"
                    }`}
                  >
                    {label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {openDropdown === "Shop By Bike" ? (
          <div className="border-t border-zinc-200 bg-zinc-100 py-5">
            <div className="mx-auto max-h-[420px] max-w-7xl overflow-y-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {shopByBikeGroups.map((group) => (
                  <div key={group.brand}>
                    <h4 className="text-xs font-bold tracking-wide text-zinc-900">{group.brand}</h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                      {(group.models.length ? group.models : [group.brand]).map((model) => (
                        <li key={model}>
                          <Link
                            href={getShopByBikeHref(group.brand, model)}
                            onClick={() => setOpenDropdown(null)}
                            className="hover:text-orange-500"
                          >
                            {model}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {openDropdown === "Shop By Spares" ? (
          <div className="border-t border-zinc-200 bg-zinc-100 py-5">
            <div className="mx-auto max-h-[420px] max-w-7xl overflow-y-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {shopBySparesGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-xs font-bold tracking-wide text-zinc-900">{group.category}</h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                      {(group.items.length ? group.items : [group.category]).map((item) => (
                        <li key={item}>
                          <Link
                            href={getShopBySparesHref(group.category, item)}
                            onClick={() => setOpenDropdown(null)}
                            className="hover:text-orange-500"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {openDropdown === "Shop By Accessories" ? (
          <div className="border-t border-zinc-200 bg-zinc-100 py-5">
            <div className="mx-auto max-h-[420px] max-w-7xl overflow-y-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {shopByAccessoriesGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-xs font-bold tracking-wide text-zinc-900">{group.category}</h4>
                    <ul className="mt-2 space-y-1.5 text-sm text-zinc-700">
                      {(group.items.length ? group.items : [group.category]).map((item) => (
                        <li key={item}>
                          <Link
                            href={getShopByAccessoriesHref(group.category, item)}
                            onClick={() => setOpenDropdown(null)}
                            className="hover:text-orange-500"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
