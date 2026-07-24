export type Collection =
  | "women"
  | "men"
  | "bedsheets"
  | "fragrance"
  | "home-supplies"

export interface Product {
  id: number
  slug: string
  name: string
  collection: Collection
  /** Maison or partner brand shown on PLP tiles and PDP. */
  brand: string
  line: string
  price: number
  image: string
  description: string
  features: string[]
  concentration: string
  volume: string
  tag?: string
}

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`

/**
 * Guaranteed-valid fallback imagery per collection (used if an Unsplash asset
 * fails to resolve). Kept centralised so the product card can degrade cleanly.
 */
export const collectionFallback: Record<Collection, string> = {
  women: u("1490481651871-ab68de25d43d"),
  men: u("1507679799987-c73779587ccf"),
  bedsheets: u("1505693416388-ac5ce068fe85"),
  fragrance: "/Lattafa_Pride_Ansaam_Gold.jpg",
  "home-supplies": u("1513694203232-719a280e022f"),
}

export const collectionMeta: Record<
  Collection,
  { title: string; kicker: string; blurb: string; hero: string }
> = {
  women: {
    title: "Women",
    kicker: "The Women's Atelier",
    blurb:
      "Haute couture, coastal beachwear and premium tailored dresses cut for the Indian Ocean light.",
    hero: u("1490481651871-ab68de25d43d"),
  },
  men: {
    title: "Men",
    kicker: "The Men's Atelier",
    blurb:
      "Unstructured linen suiting, premium shirting and high-fashion resort wear for the modern gentleman.",
    hero: u("1618886614638-80e3c103d31a"),
  },
  bedsheets: {
    title: "Bed Linen",
    kicker: "Maison Bedding",
    blurb:
      "Lustrous satin bed linens and heavy-thread textiles woven for uncompromising nocturnal indulgence.",
    hero: u("1616594039964-ae9021a400a0"),
  },
  fragrance: {
    title: "Fragrance",
    kicker: "The Atelier Scent",
    blurb:
      "NAYAL collection of fragrances including eau de toilettes and eau de parfums for women and men as well as botanical oils, parfum extracts and more.",
    hero: "/Lattafa_Pride_Ansaam_Gold.jpg",
  },
  "home-supplies": {
    title: "Home Supplies",
    kicker: "Interior Artifacts",
    blurb:
      "Baroque curtains, premium drapes and lifestyle artifacts that carry the maison into your salon.",
    hero: u("1513694203232-719a280e022f"),
  },
}

export const products: Product[] = [
  // ── WOMEN ────────────────────────────────────────────────
  {
    id: 1,
    slug: "la-vacanza-silk-shirt",
    name: "La Vacanza Silk Shirt",
    collection: "women",
    brand: "NAYAL",
    line: "Haute Couture",
    price: 1350,
    concentration: "",
    volume: "",
    image: u("1490481651871-ab68de25d43d"),
    description:
      "Relaxed-fit tailored shirt in pure mulberry silk, detailed with hand-pressed gold signature buttons and tonal prints inspired by Swahili coastal geometry.",
    features: ["100% organic mulberry silk", "Relaxed coastal cut", "Engraved gold hardware"],
    tag: "New In",
  },
  {
    id: 2,
    slug: "atelier-trench-coat",
    name: "Classic Atelier Trench Coat",
    collection: "women",
    brand: "NAYAL",
    line: "Tailoring",
    price: 2450,
    concentration: "",
    volume: "",
    image: u("1525507119028-ed4c629a60a3"),
    description:
      "Double-breasted silhouette crafted from water-repellent cotton gabardine and lined with the signature monogram satin.",
    features: ["Structured gabardine", "Belted leather buckle", "Storm-flap fastening"],
  },
  {
    id: 3,
    slug: "oyster-bay-slip-dress",
    name: "Oyster Bay Slip Dress",
    collection: "women",
    brand: "NAYAL",
    line: "Beachwear",
    price: 980,
    concentration: "",
    volume: "",
    image: u("1539109136881-3be0616acf4b"),
    description:
      "A liquid bias-cut slip in featherweight silk charmeuse, made for languid evenings along the coast.",
    features: ["Bias-cut silk charmeuse", "Adjustable fine straps", "Featherweight drape"],
  },
  {
    id: 4,
    slug: "zanzibar-linen-gown",
    name: "Zanzibar Linen Gown",
    collection: "women",
    brand: "NAYAL",
    line: "Resort",
    price: 1620,
    concentration: "",
    volume: "",
    image: u("1595777457583-95e059d581b8"),
    description:
      "A floor-sweeping column gown in breathable European linen with hand-finished shell buttons.",
    features: ["European heritage linen", "Hand-finished shell buttons", "Full-length column"],
    tag: "New In",
  },
  {
    id: 5,
    slug: "coastal-tailored-blazer",
    name: "Coastal Tailored Blazer",
    collection: "women",
    brand: "NAYAL",
    line: "Tailoring",
    price: 1780,
    concentration: "",
    volume: "",
    image: u("1483985988355-763728e1935b"),
    description:
      "A softly structured blazer with a nipped waist, cut for sharp evening dressing with fluid movement.",
    features: ["Half-canvas construction", "Silk-lined interior", "Signature horn buttons"],
  },
  {
    id: 6,
    slug: "indian-ocean-kaftan",
    name: "Indian Ocean Kaftan",
    collection: "women",
    brand: "NAYAL",
    line: "Beachwear",
    price: 720,
    concentration: "",
    volume: "",
    image: u("1502716119720-b23a93e5fe1b"),
    description:
      "An airy printed kaftan with dropped shoulders and a deep V, engineered for the warmest afternoons.",
    features: ["Sheer cotton voile", "Hand-screened coastal print", "One-size fluid fit"],
  },

  // ── MEN ──────────────────────────────────────────────────
  {
    id: 7,
    slug: "sartorial-linen-blazer",
    name: "Sartorial Linen Blazer",
    collection: "men",
    brand: "NAYAL",
    line: "Resort Tailoring",
    price: 1850,
    concentration: "",
    volume: "",
    image: u("1507679799987-c73779587ccf"),
    description:
      "A deconstructed lightweight blazer for warm coastal escapes, tailored in single-breasted breathable European linen.",
    features: ["100% European linen", "Partial silk lining", "Sleek patch pockets"],
    tag: "New In",
  },
  {
    id: 8,
    slug: "tailored-denim-blouson",
    name: "Tailored Denim Blouson",
    collection: "men",
    brand: "NAYAL",
    line: "Ready-to-Wear",
    price: 1550,
    concentration: "",
    volume: "",
    image: u("1611312449412-6cefac5dc3e4"),
    description:
      "A cropped luxury denim jacket with bespoke heavy-thread contrast stitching and custom metal rivets.",
    features: ["Heavyweight Japanese denim", "Custom metal rivets", "Twin chest pockets"],
  },
  {
    id: 9,
    slug: "unstructured-linen-suit",
    name: "Unstructured Linen Suit",
    collection: "men",
    brand: "NAYAL",
    line: "Resort Tailoring",
    price: 2680,
    concentration: "",
    volume: "",
    image: u("1521341957697-b93449760f30"),
    description:
      "A two-piece unstructured suit in slubbed linen, tailored to move with the ease of the tropics.",
    features: ["Slubbed linen weave", "Unlined breathable jacket", "Drawstring trouser"],
  },
  {
    id: 10,
    slug: "premium-poplin-shirt",
    name: "Premium Poplin Shirt",
    collection: "men",
    brand: "NAYAL",
    line: "Shirting",
    price: 640,
    concentration: "",
    volume: "",
    image: u("1594633312681-425c7b97ccd1"),
    description:
      "A crisp cutaway-collar shirt in two-ply Egyptian cotton poplin with mother-of-pearl buttons.",
    features: ["Two-ply Egyptian cotton", "Mother-of-pearl buttons", "Cutaway collar"],
  },
  {
    id: 11,
    slug: "resort-camp-shirt",
    name: "Resort Camp Shirt",
    collection: "men",
    brand: "NAYAL",
    line: "Resort Wear",
    price: 720,
    concentration: "",
    volume: "",
    image: u("1596755094514-f87e34085b2c"),
    description:
      "A relaxed camp-collar shirt in printed silk twill, cut for effortless dressing from sand to soirée.",
    features: ["Printed silk twill", "Camp collar", "Relaxed vacation fit"],
    tag: "New In",
  },
  {
    id: 12,
    slug: "heritage-chambray-trouser",
    name: "Heritage Chambray Trouser",
    collection: "men",
    brand: "NAYAL",
    line: "Ready-to-Wear",
    price: 590,
    concentration: "",
    volume: "",
    image: u("1473966968600-fa801b869a1a"),
    description:
      "A straight-leg chambray trouser with a clean waistband and refined tonal topstitching.",
    features: ["Soft washed chambray", "Straight leg", "Tonal topstitch"],
  },

  // ── BEDSHEETS ────────────────────────────────────────────
  {
    id: 13,
    slug: "imperial-sateen-bed-set",
    name: "Imperial Sateen Bed Set",
    collection: "bedsheets",
    brand: "NAYAL",
    line: "Egyptian Cotton",
    price: 1100,
    concentration: "",
    volume: "",
    image: u("1505693416388-ac5ce068fe85"),
    description:
      "Woven in 1200 thread-count long-staple Egyptian cotton with geometric borders drawn from coastal architecture.",
    features: ["1200TC long-staple cotton", "Duvet, sheet & 4 cases", "Silky sateen finish"],
    tag: "Bestseller",
  },
  {
    id: 14,
    slug: "satin-silk-duvet-suite",
    name: "Satin Silk Duvet Suite",
    collection: "bedsheets",
    brand: "NAYAL",
    line: "Mulberry Silk",
    price: 1650,
    concentration: "",
    volume: "",
    image: u("1616594039964-ae9021a400a0"),
    description:
      "22-momme pure mulberry silk that regulates temperature and protects skin and hair through the night.",
    features: ["Grade 6A mulberry silk", "Hypoallergenic weave", "Deep luxury pockets"],
  },
  {
    id: 15,
    slug: "stone-town-linen-set",
    name: "Stone Town Linen Set",
    collection: "bedsheets",
    brand: "NAYAL",
    line: "Stonewashed Linen",
    price: 890,
    concentration: "",
    volume: "",
    image: u("1522771739844-6a9f6d5f14af"),
    description:
      "Garment-washed French flax linen with a lived-in softness and a quiet, breathable hand.",
    features: ["French flax linen", "Stonewashed softness", "Breathable all-season weave"],
  },
  {
    id: 16,
    slug: "pemba-percale-collection",
    name: "Pemba Percale Collection",
    collection: "bedsheets",
    brand: "NAYAL",
    line: "Crisp Percale",
    price: 760,
    concentration: "",
    volume: "",
    image: u("1631049307264-da0ec9d70304"),
    description:
      "A cool, matte percale weave with a crisp hotel finish and hand-stitched cord trim.",
    features: ["400TC crisp percale", "Hand-stitched cord trim", "Matte cool finish"],
  },

  // ── FRAGRANCE ────────────────────────────────────────────
  {
    id: 17,
    slug: "lattafa-pride-affection",
    name: "Affection",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 95,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Affection.jpg",
    description:
      "A warm gourmand embrace of vanilla, soft musk and amber wrapped in Lattafa Pride's signature gold-accented presentation.",
    features: ["Natural spray vaporisateur", "100 ml flacon", "Long-lasting sillage"],
    tag: "New In",
  },
  {
    id: 18,
    slug: "lattafa-pride-ansaam-gold",
    name: "Ansaam Gold",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Ansaam_Gold.jpg",
    description:
      "An opulent oriental composition housed in a burgundy and gold flacon with ginkgo-leaf emblem detailing.",
    features: ["Display base included", "100 ml eau de parfum", "Gold emblem cap"],
  },
  {
    id: 19,
    slug: "lattafa-pride-art-of-universe",
    name: "Art of Universe",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 125,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Art_Of_Universe.jpg",
    description:
      "A celestial fougère-aromatic journey with cosmic engravings on a polished chrome and deep blue bottle.",
    features: ["Chrome celestial plate", "100 ml natural spray", "Collector presentation box"],
    tag: "New In",
  },
  {
    id: 20,
    slug: "lattafa-pride-awaan-gold",
    name: "Awaan Gold",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 105,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Awaan_Gold.jpg",
    description:
      "Olive-green matte glass with a pebbled gold emblem — an elegant woody-floral with Arabian character.",
    features: ["Drawer-style gift box", "100 ml vaporisateur", "Gold dome cap"],
  },
  {
    id: 21,
    slug: "lattafa-pride-eternal-oud",
    name: "Eternal Oud",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 145,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Eternal_Oud.jpg",
    description:
      "A sculptural oud composition presented under a glass cloche with a bronze tree stopper and amber juice.",
    features: ["Cloche display pedestal", "100 ml eau de parfum", "Bronze tree cap sculpture"],
    tag: "Signature",
  },
  {
    id: 22,
    slug: "lattafa-pride-ishq-al-shuyukh-silver",
    name: "Ishq Al Shuyukh Silver",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 115,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Ishq_Al_Shuyukh_Silver.jpg",
    description:
      "A bold black and silver flacon featuring a jambiya dagger motif — rich oud, spice and leather intensity.",
    features: ["Acrylic display case", "100 ml natural spray", "Silver crown cap"],
  },
  {
    id: 23,
    slug: "lattafa-pride-nebras",
    name: "Nebras",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 100,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Nebras.jpg",
    description:
      "Sunburst gold medallion on matte black glass — a radiant amber-oud with warm resinous depth.",
    features: ["Hammered gold cap", "100 ml vaporisateur", "Embossed presentation box"],
  },
  {
    id: 24,
    slug: "lattafa-pride-vintage-radio",
    name: "Vintage Radio",
    collection: "fragrance",
    brand: "Lattafa Pride",
    line: "Eau de Parfum",
    price: 98,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Lattafa_Pride_Vintage_Radio.jpg",
    description:
      "Nostalgic mid-century design meets modern perfumery — creamy woods and soft spice on a white lacquer bottle.",
    features: ["Radio illustration flacon", "100 ml eau de parfum", "Gold semi-circle cap"],
    tag: "New In",
  },
  {
    id: 25,
    slug: "ahmed-al-maghribi-blu-oud",
    name: "Blu Oud",
    collection: "fragrance",
    brand: "Ahmed Al Maghribi",
    line: "Eau de Parfum",
    price: 88,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Ahmed_Al_Maghribi_Blu_Oud_Eau_De_Parfum.jpg",
    description:
      "Frosted teal glass with gold filigree — a refined oud blended with fresh aromatic notes and botanical illustration packaging.",
    features: ["Octagonal teal cap", "100 ml natural spray", "Fern-pattern gift box"],
  },
  {
    id: 26,
    slug: "ahmed-al-maghribi-kaaf",
    name: "Kaaf",
    collection: "fragrance",
    brand: "Ahmed Al Maghribi",
    line: "Eau de Parfum",
    price: 82,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Screenshot2024-08-01145642.png",
    description:
      "Clean aquatic freshness in a cylindrical flacon with bold Arabic gold lettering and painterly blue packaging.",
    features: ["Cream matte cap", "100 ml eau de parfum", "Gold Arabic script label"],
  },
  {
    id: 27,
    slug: "ahmed-al-maghribi-tiff-tiff",
    name: "Tiff Tiff",
    collection: "fragrance",
    brand: "Ahmed Al Maghribi",
    line: "Eau de Parfum",
    price: 92,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Screenshot2025-10-03135941.png",
    description:
      "Turquoise ribbed glass with a faceted chrome cap — a bright floral-musky scent in crocodile-textured presentation.",
    features: ["Fluted turquoise glass", "100 ml vaporisateur", "Chrome jewel cap"],
    tag: "New In",
  },

  // ── HOME SUPPLIES ────────────────────────────────────────
  {
    id: 28,
    slug: "baroque-velvet-drapes",
    name: "Baroque Blackout Velvet Drapes",
    collection: "home-supplies",
    brand: "NAYAL",
    line: "Drapery",
    price: 1400,
    concentration: "",
    volume: "",
    image: u("1513694203232-719a280e022f"),
    description:
      "Masterfully weighted velvet with woven geometric borders and total blackout thermal lining.",
    features: ["450GSM weighted velvet", "Blackout thermal lining", "Weighted fluid hems"],
    tag: "Bestseller",
  },
  {
    id: 29,
    slug: "coastal-sheer-curtains",
    name: "Coastal Sheer Linen Curtains",
    collection: "home-supplies",
    brand: "NAYAL",
    line: "Drapery",
    price: 620,
    concentration: "",
    volume: "",
    image: u("1567016432779-094069958ea5"),
    description:
      "Featherweight sheer linen panels that soften the equatorial light into a warm, diffuse glow.",
    features: ["Sheer washed linen", "Diffuse light filtering", "Rod-pocket heading"],
  },
  {
    id: 30,
    slug: "salon-lounge-throw",
    name: "Salon Cashmere Throw",
    collection: "home-supplies",
    brand: "NAYAL",
    line: "Living",
    price: 540,
    concentration: "",
    volume: "",
    image: u("1600585154340-be6161a56a0c"),
    description:
      "A generously scaled cashmere-blend throw finished with a hand-knotted fringe for the grand salon.",
    features: ["Cashmere-wool blend", "Hand-knotted fringe", "Oversized proportions"],
  },
  {
    id: 31,
    slug: "artisan-scented-candle",
    name: "Artisan Coastal Candle",
    collection: "home-supplies",
    brand: "NAYAL",
    line: "Ambience",
    price: 160,
    concentration: "",
    volume: "",
    image: u("1602874801006-e26c4c5b5e8a"),
    description:
      "A hand-poured coconut-wax candle scented with fig leaf, driftwood and warm amber.",
    features: ["Coconut-wax blend", "60-hour burn", "Refillable ceramic vessel"],
    tag: "New In",
  },
]

export function getProductsByCollection(collection: Collection): Product[] {
  return products.filter((p) => p.collection === collection)
}

/**
 * Distinct sub-category "lines" for a collection, preserving first-seen order.
 * Used to build the category tab navigator on each collection page.
 */
export function getCollectionLines(collection: Collection): string[] {
  const seen = new Set<string>()
  for (const p of getProductsByCollection(collection)) {
    if (!seen.has(p.line)) seen.add(p.line)
  }
  return [...seen]
}

export function getFeaturedProducts(count = 6): Product[] {
  return products.filter((p) => p.tag).slice(0, count)
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

const CONCENTRATION_ABBR: Record<string, string> = {
  "Eau de Parfum": "EDP",
  "Eau de Toilette": "EDT",
  "Extrait de Parfum": "Parfum",
  "Perfume Oil": "Oil",
}

/** Versace-style PLP caption, e.g. "Ansaam Gold EDP 100 ml". */
export function formatProductTileLabel(product: Product): string {
  const abbr = CONCENTRATION_ABBR[product.concentration] ?? product.concentration
  if (product.collection === "fragrance" && abbr && product.volume) {
    return `${product.name} ${abbr} ${product.volume}`
  }
  return product.name
}
