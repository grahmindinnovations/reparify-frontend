export type ShopByAccessoriesGroup = {
  category: string;
  items: string[];
};

export type ShopByAccessoriesItem = {
  category: string;
  name: string;
  slug: string;
  searchTerm: string;
};

export type ShopByAccessoriesFilters = {
  productCount: number;
  highestPrice: number;
  availability: {
    inStock: number;
    outOfStock: number;
  };
  categories: { label: string; count: number }[];
  vehicleConfigs: { label: string; count: number }[];
};

export const shopByAccessoriesGroups: ShopByAccessoriesGroup[] = [
  {
    category: "Bike protection",
    items: [
      "Radiator grills",
      "Crash guard",
      "Frame sliders",
      "side stand extenders",
      "Headlight grill",
      "Bash plate / Sump guard",
      "Fluid tank cap",
      "Tyre hugger",
      "Screen gaurd",
      "Top rack",
      "Saddle stay",
    ],
  },
  {
    category: "Performance parts",
    items: ["Performance air filter", "Performance Exhaust", "Iridium Spark Plug", "FuelX", "PowerTRONICS"],
  },
  { category: "Luggage", items: ["Hard luggage", "Soft luggage"] },
  { category: "Braking", items: ["Ceramic brake pads", "Sintered brake pads"] },
  {
    category: "Helmet",
    items: ["Motocross helmet", "Flip up helmet", "Full face helmet", "Half face helmet", "Retro Helmet"],
  },
  { category: "Handle parts", items: ["Handlebar", "Handlebar holder", "Handle risers", "lever guard", "Grip set", "Hand guard"] },
  { category: "Bike essentials", items: ["Windshield", "windshield extenders", "Traction pads", "Mobile holder"] },
  { category: "Rider protection", items: ["Gloves", "Goggles", "Riding jacket", "Cap", "Face Mask", "Boots"] },
  { category: "Helmet accessories", items: [] },
  {
    category: "Lights and electronics",
    items: ["LED auxiliary lights", "Hazard flasher", "Fuel X", "Intercom", "GPS tracker", "Dash cam", "Tyre inflator"],
  },
  { category: "Toy", items: ["Miniature helmet", "Scale model motorcycle"] },
  { category: "Apparels", items: ["Jersey Set", "Cap", "Socks"] },
];

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const shopByAccessoriesItems: ShopByAccessoriesItem[] = shopByAccessoriesGroups.flatMap(
  (group) => {
    const entries = group.items.length ? group.items : [group.category];
    return entries.map((name) => ({
      category: group.category,
      name,
      slug: toSlug(`${group.category}-${name}`),
      searchTerm: name,
    }));
  }
);

export function getShopByAccessoriesItemBySlug(slug: string) {
  return shopByAccessoriesItems.find((item) => item.slug === slug);
}

export function getShopByAccessoriesHref(category: string, item: string) {
  return `/shop-by-accessories/${toSlug(`${category}-${item}`)}`;
}

function parseFacetSection(html: string, label: "Availability" | "Category" | "Vehicle Config") {
  const sectionMatch = html.match(
    new RegExp(
      `aria-label=\\\"${label}[^\\\"]*\\\"[\\s\\S]*?<\\/summary>([\\s\\S]*?)<\\/details>`,
      "i"
    )
  );
  if (!sectionMatch) return [] as { label: string; count: number }[];

  const section = sectionMatch[1];
  const values = [...section.matchAll(/facet-checkbox__text-label\">(.*?)<\/span>\s*\((\d+)\)/gi)];
  const output: { label: string; count: number }[] = [];
  for (const match of values) {
    const labelText = match[1].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
    const count = Number(match[2]);
    if (!labelText || Number.isNaN(count)) continue;
    if (!output.some((item) => item.label === labelText && item.count === count)) {
      output.push({ label: labelText, count });
    }
  }
  return output;
}

export async function getAccessoriesFiltersFromSparify(
  searchTerm: string
): Promise<ShopByAccessoriesFilters | null> {
  const url = `https://www.sparify.co/search?q=${encodeURIComponent(searchTerm)}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
      headers: { "user-agent": "Mozilla/5.0 (compatible; BikeAccessoriesBot/1.0)" },
    });
    if (!response.ok) return null;
    const html = await response.text();

    const productCountMatch = html.match(/ProductCountDesktop\">\s*(\d+)\s*results/i);
    const highestPriceMatch = html.match(/The highest price is\s*INR\.\s*([\d,]+)/i);
    const availability = parseFacetSection(html, "Availability");
    const categories = parseFacetSection(html, "Category");
    const vehicleConfigs = parseFacetSection(html, "Vehicle Config");

    const inStock = availability.find((item) => item.label.toLowerCase() === "in stock")?.count ?? 0;
    const outOfStock = availability.find((item) => item.label.toLowerCase() === "out of stock")?.count ?? 0;

    if (!categories.length && !vehicleConfigs.length && !productCountMatch) return null;

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

