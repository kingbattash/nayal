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
  line: string
  price: number
  image: string
  description: string
  features: string[]
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
  fragrance: u("1541643600914-78b084683601"),
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
      "Signature botanical absolute oils, premium perfumes and coastal blends hand-composed in Zanzibar.",
    hero: u("1592945403244-b3fbafd7f539"),
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
    line: "Haute Couture",
    price: 1350,
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
    line: "Tailoring",
    price: 2450,
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
    line: "Beachwear",
    price: 980,
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
    line: "Resort",
    price: 1620,
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
    line: "Tailoring",
    price: 1780,
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
    line: "Beachwear",
    price: 720,
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
    line: "Resort Tailoring",
    price: 1850,
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
    line: "Ready-to-Wear",
    price: 1550,
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
    line: "Resort Tailoring",
    price: 2680,
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
    line: "Shirting",
    price: 640,
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
    line: "Resort Wear",
    price: 720,
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
    line: "Ready-to-Wear",
    price: 590,
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
    line: "Egyptian Cotton",
    price: 1100,
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
    line: "Mulberry Silk",
    price: 1650,
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
    line: "Stonewashed Linen",
    price: 890,
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
    line: "Crisp Percale",
    price: 760,
    image: u("1631049307264-da0ec9d70304"),
    description:
      "A cool, matte percale weave with a crisp hotel finish and hand-stitched cord trim.",
    features: ["400TC crisp percale", "Hand-stitched cord trim", "Matte cool finish"],
  },

  // ── FRAGRANCE ────────────────────────────────────────────
  {
    id: 17,
    slug: "nayal-oud-absolute",
    name: "Nayal Oud Absolute Parfum",
    collection: "fragrance",
    line: "Extrait de Parfum",
    price: 380,
    image: u("1541643600914-78b084683601"),
    description:
      "An intense, mysterious projection of organic oud accented by Damask rose, Zanzibar cloves, saffron and sweet leather.",
    features: ["30% pure concentration", "Gold-capped flacon", "12+ hour longevity"],
    tag: "Signature",
  },
  {
    id: 18,
    slug: "bianco-orris-intense",
    name: "Bianco Orris Intense",
    collection: "fragrance",
    line: "Eau de Parfum",
    price: 320,
    image: u("1592945403244-b3fbafd7f539"),
    description:
      "Delicate yet commanding, built around aged Iris Pallida, soft white suede and Madagascan vanilla.",
    features: ["Botanical selection", "Limited crystal casing", "High-altitude sourcing"],
  },
  {
    id: 19,
    slug: "coastal-neroli-blend",
    name: "Coastal Neroli Blend",
    collection: "fragrance",
    line: "Eau de Toilette",
    price: 240,
    image: u("1615634260167-c8cdede054de"),
    description:
      "A luminous seaside accord of Tunisian neroli, sea salt and sun-warmed bergamot.",
    features: ["Tunisian neroli", "Sea-salt accord", "Fresh coastal projection"],
  },
  {
    id: 20,
    slug: "botanical-absolute-oil",
    name: "Botanical Absolute Oil",
    collection: "fragrance",
    line: "Perfume Oil",
    price: 190,
    image: u("1608528577891-eb055944f2e7"),
    description:
      "A concentrated roll-on absolute oil of jasmine sambac and ylang-ylang, distilled on the archipelago.",
    features: ["Alcohol-free oil base", "Jasmine sambac", "Travel roll-on flacon"],
    tag: "New In",
  },

  // ── HOME SUPPLIES ────────────────────────────────────────
  {
    id: 21,
    slug: "baroque-velvet-drapes",
    name: "Baroque Blackout Velvet Drapes",
    collection: "home-supplies",
    line: "Drapery",
    price: 1400,
    image: u("1513694203232-719a280e022f"),
    description:
      "Masterfully weighted velvet with woven geometric borders and total blackout thermal lining.",
    features: ["450GSM weighted velvet", "Blackout thermal lining", "Weighted fluid hems"],
    tag: "Bestseller",
  },
  {
    id: 22,
    slug: "coastal-sheer-curtains",
    name: "Coastal Sheer Linen Curtains",
    collection: "home-supplies",
    line: "Drapery",
    price: 620,
    image: u("1567016432779-094069958ea5"),
    description:
      "Featherweight sheer linen panels that soften the equatorial light into a warm, diffuse glow.",
    features: ["Sheer washed linen", "Diffuse light filtering", "Rod-pocket heading"],
  },
  {
    id: 23,
    slug: "salon-lounge-throw",
    name: "Salon Cashmere Throw",
    collection: "home-supplies",
    line: "Living",
    price: 540,
    image: u("1600585154340-be6161a56a0c"),
    description:
      "A generously scaled cashmere-blend throw finished with a hand-knotted fringe for the grand salon.",
    features: ["Cashmere-wool blend", "Hand-knotted fringe", "Oversized proportions"],
  },
  {
    id: 24,
    slug: "artisan-scented-candle",
    name: "Artisan Coastal Candle",
    collection: "home-supplies",
    line: "Ambience",
    price: 160,
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
