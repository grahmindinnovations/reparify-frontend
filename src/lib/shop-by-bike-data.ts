export type ShopByBikeGroup = {
  brand: string;
  models: string[];
};

export type ShopByBikeItem = {
  brand: string;
  model: string;
  slug: string;
  searchTerm: string;
};

export type ShopByBikeFilters = {
  productCount: number;
  highestPrice: number;
  availability: {
    inStock: number;
    outOfStock: number;
  };
  categories: { label: string; count: number }[];
  vehicleConfigs: { label: string; count: number }[];
};

export const shopByBikeGroups: ShopByBikeGroup[] = [
  {
    brand: "ROYAL ENFIELD",
    models: [
      "Classic 350",
      "Classic 500",
      "Meteor 350",
      "Himalayan 450",
      "Guerrilla 450",
      "Super Meteor 650",
      "Himalayan 411",
      "Scram 411",
      "Interceptor 650",
      "Continental GT 650",
      "Hunter 350",
      "Thunderbird 350",
      "Thunderbird 500",
      "Classic reborn 350",
    ],
  },
  {
    brand: "TVS",
    models: ["Apachr RTX 300", "Apache RR 310", "Apache RTR 310", "Apache RTR 200", "Apache 160"],
  },
  { brand: "BMW", models: ["GS 310", "310 R", "S 1000 RR"] },
  {
    brand: "KTM",
    models: [
      "Duke 125",
      "Duke 200",
      "Duke 250",
      "Duke 390",
      "RC 125",
      "RC 200",
      "RC 390",
      "Adventure 250",
      "Adventure 390",
      "Adventure 390 (2025)",
      "DUKE 250 (GEN 3)",
    ],
  },
  {
    brand: "YAMAHA",
    models: [
      "XSR 155",
      "Aerox",
      "R15 V1",
      "R15 V2",
      "R15 V3",
      "R15 V4",
      "MT 15",
      "MT 09",
      "FZ 16",
      "FZ-X",
      "FZ 250",
      "FZ V2",
      "YZF-R1M",
      "YZF-R1",
      "YZF-R3",
    ],
  },
  { brand: "HUSQVARNA", models: ["Svartpilen 401", "Vitpilen 401"] },
  {
    brand: "BAJAJ",
    models: [
      "Pulsar NS 200",
      "Pulsar RS 200",
      "Pulsar NS 160",
      "Dominar 400",
      "Dominar 250",
      "Pulsar 220F",
      "Pulsar NS 400",
      "Pulsar N160",
    ],
  },
  {
    brand: "KAWASAKI",
    models: [
      "Ninja 650",
      "Ninja 400",
      "Ninja ZX-14R",
      "Ninja ZX-10R",
      "Ninja ZX-6R",
      "Ninja H2R",
      "Vulcan S",
      "Vulcan 900 Classic",
      "Versys 650",
      "Versys 1000",
      "Z400",
      "Z650",
      "Z800",
      "Z900",
      "Z1000",
    ],
  },
  { brand: "BENELLI", models: ["TNT 300", "TNT 600i", "TNT 899", "TRK 502", "TRK 502X", "Imperiale 400"] },
  {
    brand: "PIAGGIO",
    models: [
      "Aprilia SR 125",
      "Aprilia SR 150",
      "Aprilia SR 160",
      "Aprilia SXR",
      "Aprilia storm 125",
      "Aprilia Storm 150",
      "Aprilia Storm 160",
      "Vespa SXL 125",
      "Vespa VXL 125",
      "Aprilia RS 457",
    ],
  },
  { brand: "HERO", models: ["Xpulse 200", "Xpulse 210"] },
  { brand: "DUCATI", models: ["Paningale", "Scrambler 800", "Monster", "Multistrada", "Diavel 1260"] },
  { brand: "HONDA", models: ["H'ness 350", "CBR 150", "CBR 250", "CBR 650", "CB 350RS", "CB 300", "CBR 1000 RR"] },
  { brand: "OLA", models: [] },
  { brand: "Harley davidson", models: [] },
  { brand: "Suzuki", models: ["V strom SX 250", "Gixxer SF 250", "Burgman"] },
  { brand: "Triumph", models: ["Speed 400", "Scrambler 400X"] },
  { brand: "Ather", models: [] },
  { brand: "Jawa", models: ["JAWA 42", "Jawa bobber"] },
];

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const shopByBikeItems: ShopByBikeItem[] = shopByBikeGroups.flatMap((group) => {
  const entries = group.models.length ? group.models : [group.brand];
  return entries.map((model) => ({
    brand: group.brand,
    model,
    slug: toSlug(`${group.brand}-${model}`),
    searchTerm: model,
  }));
});

export function getShopByBikeItemBySlug(slug: string) {
  return shopByBikeItems.find((item) => item.slug === slug);
}

export function getShopByBikeHref(brand: string, model: string) {
  return `/shop-by-bike/${toSlug(`${brand}-${model}`)}`;
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

export async function getBikeFiltersFromSparify(searchTerm: string): Promise<ShopByBikeFilters | null> {
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

