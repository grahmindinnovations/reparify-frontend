export type ShopBySparesGroup = {
  category: string;
  items: string[];
};

export type ShopBySparesItem = {
  category: string;
  name: string;
  slug: string;
  searchTerm: string;
};

export type ShopBySparesFilters = {
  productCount: number;
  highestPrice: number;
  availability: {
    inStock: number;
    outOfStock: number;
  };
  categories: { label: string; count: number }[];
  vehicleConfigs: { label: string; count: number }[];
};

export const shopBySparesGroups: ShopBySparesGroup[] = [
  { category: "Service parts", items: ["Air filter", "Oil filter", "Spark plug", "Damper rubber", "Chain lube"] },
  {
    category: "Brake system",
    items: ["Brake pad", "Brake shoe", "Brake pedal", "Disc plate", "Master cylinder", "Brake housing", "Brake cable"],
  },
  { category: "Chain Sprocket", items: ["Brass chain sprocket", "Regular chain sprocket", "Chain maintenance"] },
  { category: "Electrical parts", items: ["Stator coil", "Regulator rectifier", "Speedometer"] },
  { category: "Fuel system", items: ["Fuel pump motor", "Fuel pump assembly", "Fuel cock"] },
  { category: "Clutch parts", items: ["Clutch cable", "Clutch plate", "Clutch assembly", "Clutch shoe", "CVT belt"] },
  { category: "Body parts", items: ["Visor", "Front shield"] },
  { category: "Gear system", items: ["Gear pedal"] },
  { category: "Fork parts", items: ["Fork oil seal", "Shock absorber"] },
  { category: "Lighting", items: ["Headlamp", "Indicators"] },
  { category: "Control switch", items: [] },
  { category: "Lock Sets", items: [] },
  { category: "Mirror", items: [] },
  { category: "Foot control", items: ["Footrest", "Footrest bracket"] },
  { category: "Swingarm parts", items: ["Swingarm bush kit"] },
  { category: "Silencer", items: [] },
  { category: "Sticker kits", items: [] },
];

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const shopBySparesItems: ShopBySparesItem[] = shopBySparesGroups.flatMap((group) => {
  const entries = group.items.length ? group.items : [group.category];
  return entries.map((name) => ({
    category: group.category,
    name,
    slug: toSlug(`${group.category}-${name}`),
    searchTerm: name,
  }));
});

export function getShopBySparesItemBySlug(slug: string) {
  return shopBySparesItems.find((item) => item.slug === slug);
}

export function getShopBySparesHref(category: string, item: string) {
  return `/shop-by-spares/${toSlug(`${category}-${item}`)}`;
}

function parseFacetSection(html: string, label: "Availability" | "Category" | "Vehicle Config") {
  const sectionMatch = html.match(
    new RegExp(
      `aria-label=\\\"${label}[^\\\"]*\\\"[\\s\\S]*?<\\/summary>([\\s\\S]*?)<\\/details>`,
      "i"
    )
  );

  if (!sectionMatch) {
    return [] as { label: string; count: number }[];
  }

  const section = sectionMatch[1];
  const values = [...section.matchAll(/facet-checkbox__text-label\">(.*?)<\/span>\s*\((\d+)\)/gi)];
  const output: { label: string; count: number }[] = [];

  for (const match of values) {
    const rawLabel = match[1];
    const count = Number(match[2]);
    const labelText = rawLabel.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();

    if (!labelText || Number.isNaN(count)) {
      continue;
    }

    if (!output.some((item) => item.label === labelText && item.count === count)) {
      output.push({ label: labelText, count });
    }
  }

  return output;
}

export async function getSparesFiltersFromSparify(searchTerm: string): Promise<ShopBySparesFilters | null> {
  const url = `https://www.sparify.co/search?q=${encodeURIComponent(searchTerm)}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; BikeAccessoriesBot/1.0)",
      },
    });

    if (!response.ok) {
      return null;
    }

    const html = await response.text();

    const productCountMatch = html.match(/ProductCountDesktop\">\s*(\d+)\s*results/i);
    const highestPriceMatch = html.match(/The highest price is\s*INR\.\s*([\d,]+)/i);
    const availability = parseFacetSection(html, "Availability");
    const categories = parseFacetSection(html, "Category");
    const vehicleConfigs = parseFacetSection(html, "Vehicle Config");

    const inStock = availability.find((item) => item.label.toLowerCase() === "in stock")?.count ?? 0;
    const outOfStock = availability.find((item) => item.label.toLowerCase() === "out of stock")?.count ?? 0;

    if (!categories.length && !vehicleConfigs.length && !productCountMatch) {
      return null;
    }

    return {
      productCount: productCountMatch ? Number(productCountMatch[1]) : 0,
      highestPrice: highestPriceMatch ? Number(highestPriceMatch[1].replaceAll(",", "")) : 0,
      availability: { inStock, outOfStock },
      categories,
      vehicleConfigs,
    };
  } catch {
    return null;
  }
}

