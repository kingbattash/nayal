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
  gender?: "men" | "women" | "unisex"
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
  {
    id: 32,
    slug: "lattafa-khamrah-waha",
    name: "Khamrah Waha",
    collection: "fragrance",
    brand: "Lattafa",
    line: "Eau de Parfum",
    price: 95,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Waha-Packshot1.jpg",
    description: "A fresh and vibrant blue aromatic rendition of the classic Khamrah, blending refreshing citrus and sea notes with a warm spice base.",
    features: ["Natural spray vaporisateur", "100 ml flacon", "Exceptional longevity"],
    gender: "men"
  },
  {
    id: 33,
    slug: "ralph-lauren-safari",
    name: "Safari for Men",
    collection: "fragrance",
    brand: "Ralph Lauren",
    line: "Eau de Toilette",
    price: 110,
    concentration: "Eau de Toilette",
    volume: "125 ml",
    image: "/safari.jpg",
    description: "A classic leather-woody fragrance for men, capturing the spirit of adventure with warm spices, rich woods, and leather notes.",
    features: ["Vintage presentation", "125 ml natural spray", "Timeless masculine scent"],
    gender: "men"
  },
  {
    id: 34,
    slug: "lattafa-khamrah",
    name: "Khamrah",
    collection: "fragrance",
    brand: "Lattafa",
    line: "Eau de Parfum",
    price: 90,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/1-60.jpg",
    description: "A luxurious and warm gourmand oriental fragrance with rich notes of dates, praline, cinnamon, and warm amber.",
    features: ["Glass decanter style bottle", "100 ml spray", "Long-lasting sweet sillage"],
    gender: "unisex"
  },
  {
    id: 35,
    slug: "emporio-armani-stronger-with-you-intensely",
    name: "Stronger With You Intensely",
    collection: "fragrance",
    brand: "Emporio Armani",
    line: "Eau de Parfum",
    price: 120,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/01026220002-2.jpg",
    description: "An addictive amber-fougere fragrance for men featuring warm notes of pink pepper, vanilla, and amber woods.",
    features: ["Signature twisted cap bottle", "100 ml vaporisateur", "Warm amber character"],
    gender: "men"
  },
  {
    id: 36,
    slug: "versace-eros-flame",
    name: "Eros Flame",
    collection: "fragrance",
    brand: "Versace",
    line: "Eau de Parfum",
    price: 105,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/versvfldedp.jpg",
    description: "A fiery red bottle containing a vibrant contrast of cold and warm, sweet and spicy notes including chinotto, black pepper, rosemary, and vanilla.",
    features: ["Medusa head red bottle", "100 ml spray", "High impact sillage"],
    gender: "men"
  },
  {
    id: 37,
    slug: "chanel-bleu-de-chanel",
    name: "Bleu de Chanel",
    collection: "fragrance",
    brand: "Chanel",
    line: "Eau de Parfum",
    price: 145,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Screenshot2023-10-25144758bdc.jpg",
    description: "An elegant, woody-aromatic fragrance that combines citrus freshness with the dry warmth of cedar and sandalwood.",
    features: ["Magnetic cap blue bottle", "100 ml vaporisateur", "Timeless elegance"],
    gender: "men"
  },
  {
    id: 38,
    slug: "carolina-herrera-very-good-girl-elixir",
    name: "Very Good Girl Elixir",
    collection: "fragrance",
    brand: "Carolina Herrera",
    line: "Eau de Parfum",
    price: 135,
    concentration: "Eau de Parfum",
    volume: "80 ml",
    image: "/rn-image_picker_lib_temp_07ccfab9-16c5-47d9-98cc-a91a34fc3d7f.jpg",
    description: "An alluring elixir of red currant, exotic rose, and warm vanilla housed in the iconic stiletto flacon with a black-to-red degrade finish.",
    features: ["Iconic stiletto flacon", "80 ml natural spray", "Rich floral gourmand"],
    gender: "women"
  },
  {
    id: 39,
    slug: "afnan-9-pm",
    name: "9 PM",
    collection: "fragrance",
    brand: "Afnan",
    line: "Eau de Parfum",
    price: 75,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_2d729681-0f83-496b-a9a7-b711ad1a53fe.jpg",
    description: "An energetic and sweet amber-fougère fragrance for men, blending apple, lavender, cinnamon, and warm vanilla.",
    features: ["Sleek ribbed black box", "100 ml bottle", "Excellent projection"],
    gender: "men"
  },
  {
    id: 40,
    slug: "rasasi-hawas-elixir",
    name: "Hawas Elixir",
    collection: "fragrance",
    brand: "Rasasi",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_3d902b2c-d9fa-48c1-a139-1ca37ce54f73.jpg",
    description: "A highly concentrated, golden elixir version of the popular Hawas, offering enhanced woody-spicy complexity and exceptional longevity.",
    features: ["Golden snake-embellished cap", "100 ml spray", "Powerful aquatic-spicy performance"],
    gender: "men"
  },
  {
    id: 41,
    slug: "rasasi-hawas-black",
    name: "Hawas Black",
    collection: "fragrance",
    brand: "Rasasi",
    line: "Eau de Parfum",
    price: 100,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_3f02199a-1916-4014-82e4-375f61beac1f.jpg",
    description: "A darker, more mysterious interpretation of Hawas for Him, combining fresh citrus with deep amber, leather, and woody notes.",
    features: ["Black textured bottle", "100 ml vaporisateur", "Sophisticated masculine profile"],
    gender: "men"
  },
  {
    id: 42,
    slug: "matiere-premiere-radical-rose",
    name: "Radical Rose",
    collection: "fragrance",
    brand: "Matiere Premiere",
    line: "Eau de Parfum",
    price: 220,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_4db8a53c-1284-4fa1-8b33-e115d39c9c06.jpg",
    description: "An overdose of Rose Centifolia absolute, contrasted with saffron, pepper, and dark patchouli for a bold, unisex floral statement.",
    features: ["Minimalist luxury bottle", "100 ml natural spray", "High concentration rose absolute"],
    gender: "unisex"
  },
  {
    id: 43,
    slug: "giorgio-armani-si-passione-red-musk",
    name: "Sì Passione Red Musk",
    collection: "fragrance",
    brand: "Giorgio Armani",
    line: "Eau de Parfum",
    price: 125,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_5cfa450f-a164-4773-a399-7589cc8c54d0.jpg",
    description: "A passionate and vibrant blend of red musk, blackcurrant nectar, and jasmine, housed in the signature fiery red flacon.",
    features: ["Vibrant red lacquered bottle", "100 ml spray", "Sensual musky sillage"],
    gender: "women"
  },
  {
    id: 44,
    slug: "roja-parfums-elysium",
    name: "Elysium Pour Homme",
    collection: "fragrance",
    brand: "Roja Parfums",
    line: "Eau de Parfum",
    price: 245,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_53fa977c-fa4c-46bf-937d-9c44b4fad3d2.jpg",
    description: "An ultra-premium fresh woody-aromatic scent with notes of grapefruit, lime, cedarwood, and ambergris.",
    features: ["Faceted gold-capped blue bottle", "100 ml vaporisateur", "Elite British perfumery"],
    gender: "men"
  },
  {
    id: 45,
    slug: "afnan-9-pm-elixir",
    name: "9 PM Elixir",
    collection: "fragrance",
    brand: "Afnan",
    line: "Eau de Parfum",
    price: 85,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_371a588b-9128-49fd-93f0-3c992dabf3ea.jpg",
    description: "An intense elixir concentration of the beloved 9 PM, featuring richer notes of amber, leather, and spices.",
    features: ["Intense elixir presentation", "100 ml natural spray", "Extreme longevity"],
    gender: "men"
  },
  {
    id: 46,
    slug: "parfums-de-marly-althair",
    name: "Althair",
    collection: "fragrance",
    brand: "Parfums de Marly",
    line: "Eau de Parfum",
    price: 230,
    concentration: "Eau de Parfum",
    volume: "125 ml",
    image: "/rn-image_picker_lib_temp_3720b549-e0ed-4beb-8e41-229a7dfdbc5a.jpg",
    description: "A warm, elegant Bourbon vanilla fragrance highlighted by orange blossom, amber, musk, and guaiac wood.",
    features: ["Matte orange sculptural bottle", "125 ml spray", "Premium niche quality"],
    gender: "men"
  },
  {
    id: 47,
    slug: "versace-bright-crystal",
    name: "Bright Crystal",
    collection: "fragrance",
    brand: "Versace",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "90 ml",
    image: "/rn-image_picker_lib_temp_6267accb-4ee3-4c9e-aa23-dd0804cf70dc.jpg",
    description: "A captivating and voluptuous fragrance, featuring fresh notes of pomegranate, yuzu, peony, magnolia, and lotus flower.",
    features: ["Faceted jewel cap bottle", "90 ml natural spray", "Fresh floral profile"],
    gender: "women"
  },
  {
    id: 48,
    slug: "hugo-boss-bottled-absolu",
    name: "Boss Bottled Absolu",
    collection: "fragrance",
    brand: "Hugo Boss",
    line: "Eau de Parfum",
    price: 115,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_754116d7-c950-48e7-b24a-0289875c9348.jpg",
    description: "An intense, premium addition to the Boss Bottled family, with deep notes of leather, patchouli, and warm amber.",
    features: ["Gold and black bottle", "100 ml vaporisateur", "Deep masculine warmth"],
    gender: "men"
  },
  {
    id: 49,
    slug: "giorgio-armani-my-way-ylang",
    name: "My Way Ylang",
    collection: "fragrance",
    brand: "Giorgio Armani",
    line: "Eau de Parfum",
    price: 120,
    concentration: "Eau de Parfum",
    volume: "90 ml",
    image: "/rn-image_picker_lib_temp_71527fa0-7974-4c29-883c-8026ce16a736.jpg",
    description: "A bright floral bouquet of tuberose, orange blossom, and exotic ylang-ylang, captured in a lovely pink flacon with a blue jewel cap.",
    features: ["Pink glass with blue stone cap", "90 ml spray", "Bright radiant floral"],
    gender: "women"
  },
  {
    id: 50,
    slug: "kayali-eden-sweet-peach-35",
    name: "Eden Sweet Peach | 35",
    collection: "fragrance",
    brand: "Kayali",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_e8c817ed-b947-4f87-b037-1910c4fe613b.jpg",
    description: "A sweet, playful cocktail of juicy peach, red apple, wild berries, and warm vanilla.",
    features: ["Translucent orange flacon", "100 ml natural spray", "Playful gourmand fruitiness"],
    gender: "women"
  },
  {
    id: 51,
    slug: "versace-yellow-diamond",
    name: "Yellow Diamond",
    collection: "fragrance",
    brand: "Versace",
    line: "Eau de Toilette",
    price: 100,
    concentration: "Eau de Toilette",
    volume: "90 ml",
    image: "/rn-image_picker_lib_temp_42500526-99c9-4725-9408-f929cc2cd64e.jpeg",
    description: "A bright, clean floral fragrance featuring notes of pear sorbet, citron, orange blossom, freesia, and mimosa.",
    features: ["Sunlight yellow crystal cap", "90 ml spray", "Sparkling fresh scent"],
    gender: "women"
  },
  {
    id: 52,
    slug: "lattafa-maahir-legacy",
    name: "Maahir Legacy",
    collection: "fragrance",
    brand: "Lattafa",
    line: "Eau de Parfum",
    price: 95,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/d7d2da31-fa0e-49b2-86c2-c255bcf212b7_size3840x3840_cropCenter.jpg",
    description: "A crisp and uplifting citrus-aromatic scent for men, with a majestic silver horse head flacon design.",
    features: ["Majestic horse head bottle", "100 ml spray", "Clean woody-minty scent"],
    gender: "men"
  },
  {
    id: 53,
    slug: "lattafa-khamrah-qahwa",
    name: "Khamrah Qahwa",
    collection: "fragrance",
    brand: "Lattafa",
    line: "Eau de Parfum",
    price: 100,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Khamrah-Qahwa-2_18e1e5f1-4f51-4325-83af-2d625beb976a.png",
    description: "A delicious twist on the classic Khamrah, adding roasted coffee notes to the warm, spicy gourmand base.",
    features: ["Coffee-infused gourmand", "100 ml spray", "Incredibly rich sillage"],
    gender: "unisex"
  },
  {
    id: 54,
    slug: "kayali-fleur-majesty-rose-royale-set",
    name: "Fleur Majesty Rose Royale Set",
    collection: "fragrance",
    brand: "Kayali",
    line: "Eau de Parfum",
    price: 150,
    concentration: "Eau de Parfum",
    volume: "Set",
    image: "/rn-image_picker_lib_temp_b3e9000d-3fe0-489b-965e-4df90f72ef9f.jpg",
    description: "A royal celebration of Rose Royale 31, presenting fresh damask rose, warm amber, and soft musky undertones.",
    features: ["Collector's rose-pink gift box", "Dual bottle configuration", "Sensual majestic floral"],
    gender: "women"
  },
  {
    id: 55,
    slug: "jean-paul-gaultier-le-male-elixir-absolu",
    name: "Le Male Elixir Absolu",
    collection: "fragrance",
    brand: "Jean Paul Gaultier",
    line: "Eau de Parfum",
    price: 130,
    concentration: "Eau de Parfum",
    volume: "125 ml",
    image: "/rn-image_picker_lib_temp_b9607bbb-bb3d-4fe0-96e8-efbabcf5bfd0.jpeg",
    description: "A deep, golden elixir of mint, lavender, warm benzoin, vanilla, and honeyed tobacco, housed in the iconic golden torso bottle.",
    features: ["Golden ribbed canister packaging", "125 ml sculptural torso flacon", "Rich oriental-fougère juice"],
    gender: "men"
  },
  {
    id: 56,
    slug: "kenzo-homme-eau-de-parfum",
    name: "Kenzo Homme",
    collection: "fragrance",
    brand: "Kenzo",
    line: "Eau de Parfum",
    price: 95,
    concentration: "Eau de Parfum",
    volume: "60 ml",
    image: "/rn-image_picker_lib_temp_c5cbd676-339d-4c73-ba62-1e890088f20a.jpg",
    description: "A marine-woody fragrance inspired by the strength of bamboo, blending salty sea notes with warm leather and patchouli.",
    features: ["Sculpted blue bamboo bottle", "60 ml natural spray", "Aromatic coastal freshness"],
    gender: "men"
  },
  {
    id: 57,
    slug: "french-avenue-liquid-brun",
    name: "Liquid Brun",
    collection: "fragrance",
    brand: "French Avenue",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_d51d2fa7-ac1e-4a36-b543-e79384759a2c.png",
    description: "A rich and delicious amber gourmand scent, featuring notes of sweet vanilla, warm cinnamon, amber, and woods.",
    features: ["Faceted brown glass bottle", "100 ml vaporisateur", "Rich amber spice profile"],
    gender: "unisex"
  },
  {
    id: 58,
    slug: "amouage-purpose-50",
    name: "Purpose 50",
    collection: "fragrance",
    brand: "Amouage",
    line: "Eau de Parfum",
    price: 260,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_d9b67076-8bc6-47ed-90d4-a77f144573b7.jpg",
    description: "A deeply spiritual, woody-spicy fragrance with vetiver, frankincense, sandalwood, and spices.",
    features: ["Opaline green bottle with white cap", "100 ml spray", "Artisanal niche complexity"],
    gender: "men"
  },
  {
    id: 59,
    slug: "maison-crivelli-oud-stallion",
    name: "Oud Stallion",
    collection: "fragrance",
    brand: "Maison Crivelli",
    line: "Extrait de Parfum",
    price: 280,
    concentration: "Extrait de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_dbc00294-77e8-45ed-83e9-46ebeb024d0f.png",
    description: "A powerful, premium oud fragrance layered with leather, warm spices, and saffron.",
    features: ["Premium brass cap", "100 ml Extrait concentration", "Rich sillage"],
    gender: "unisex"
  },
  {
    id: 60,
    slug: "afnan-supremacy-collectors-edition",
    name: "Supremacy Collector's Edition",
    collection: "fragrance",
    brand: "Afnan",
    line: "Eau de Parfum",
    price: 90,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_e2880d52-504c-4169-aaef-07733c07d92a.jpg",
    description: "A collector's edition of Supremacy, offering a refined, long-lasting blend of fresh citrus, woods, and musk.",
    features: ["Textured silver speckled bottle", "100 ml natural spray", "Limited edition presentation"],
    gender: "men"
  },
  {
    id: 61,
    slug: "armaf-club-de-nuit-lionheart-man",
    name: "Club de Nuit Lionheart Man",
    collection: "fragrance",
    brand: "Armaf",
    line: "Eau de Parfum",
    price: 80,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_e6a8aebe-31bf-4ab6-bd16-322e1c74695f.jpg",
    description: "A bold, masculine fragrance featuring citrus, deep spices, and rich leather, embellished with a golden lion medallion.",
    features: ["Embellished lion medallion bottle", "100 ml natural spray", "Strong masculine presence"],
    gender: "men"
  },
  {
    id: 62,
    slug: "jimmy-choo-i-want-choo-with-love",
    name: "I Want Choo With Love",
    collection: "fragrance",
    brand: "Jimmy Choo",
    line: "Eau de Parfum",
    price: 115,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_eecb7c0b-da32-4757-b3c6-815fb3fa3c9b.jpg",
    description: "A glamorous amber-floral fragrance blending peach, red spider lily, jasmine, and warm vanilla.",
    features: ["Gold JC logo bottle", "100 ml spray", "Sparkling feminine allure"],
    gender: "women",
    tag: "New In"
  },
  {
    id: 63,
    slug: "prada-paradigme",
    name: "Prada Paradigme",
    collection: "fragrance",
    brand: "Prada",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "50 ml",
    image: "/rn-image_picker_lib_temp_f1a2c436-fba5-4821-a0b8-d4860e2d9c29.jpg",
    description: "A sophisticated woody green fragrance featuring fresh cardamon, iris, vetiver, and leather.",
    features: ["Sleek green Prada bottle", "50 ml natural spray", "Refined office scent"],
    gender: "men"
  },
  {
    id: 64,
    slug: "ex-nihilo-blue-talisman",
    name: "Blue Talisman",
    collection: "fragrance",
    brand: "Ex Nihilo",
    line: "Eau de Parfum",
    price: 240,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_fa316fbe-02b8-4a31-a91c-0e3ed9d21854.jpg",
    description: "A sparkling, modern extract blending fresh pear, bergamot, abstract musk, and cedarwood.",
    features: ["Artistic blue-to-clear gradient bottle", "100 ml spray", "Ultra-modern niche profile"],
    gender: "unisex"
  },
  {
    id: 65,
    slug: "gucci-guilty-pour-homme",
    name: "Gucci Guilty Pour Homme",
    collection: "fragrance",
    brand: "Gucci",
    line: "Parfum",
    price: 105,
    concentration: "Parfum",
    volume: "50 ml",
    image: "/rn-image_picker_lib_temp_fb9a3a4a-2856-460d-931a-00bc1b73dcd4.jpg",
    description: "A woody aromatic scent with French lavender, lemon, orange blossom, cedarwood, and patchouli.",
    features: ["Sleek black metal-coated bottle", "50 ml spray", "Intense masculine signature"],
    gender: "men"
  },
  {
    id: 66,
    slug: "rasasi-hawas-tropical",
    name: "Hawas Tropical",
    collection: "fragrance",
    brand: "Rasasi",
    line: "Eau de Parfum",
    price: 90,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/rn-image_picker_lib_temp_fbd50c2c-5d89-4439-8530-f37ee812f223.jpg",
    description: "A vibrant tropical edition of Hawas, layering pineapple, melon, refreshing mint, and warm amber.",
    features: ["Fresh green tropical bottle", "100 ml spray", "Perfect summer scent"],
    gender: "men"
  },
  {
    id: 67,
    slug: "afnan-supremacy-not-only-intense",
    name: "Supremacy Not Only Intense",
    collection: "fragrance",
    brand: "Afnan",
    line: "Extrait de Parfum",
    price: 100,
    concentration: "Extrait de Parfum",
    volume: "150 ml",
    image: "/rn-image_picker_lib_temp_5bf10046-27eb-4769-be33-3141ab81edbf.jpg",
    description: "A highly concentrated extrait version of Supremacy, offering extreme performance with dark fruity-woody musk sillage.",
    features: ["Metallic grey flacon", "150 ml large volume", "Rich fruity-oakmoss projection"],
    gender: "men"
  },
  {
    id: 68,
    slug: "paris-corner-taskeen-caramel-cascade",
    name: "Taskeen Caramel Cascade",
    collection: "fragrance",
    brand: "Paris Corner",
    line: "Eau de Parfum",
    price: 85,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/Paris-Corner-Taskeen-Caramel-Cascade-Ireland.webp",
    description: "Decadent caramel-vanilla gourmand fragrance with milk, caramel, and honey notes.",
    features: ["Lovely presentation bottle", "100 ml spray", "Delectable sweet sillage"],
    gender: "women"
  },
  {
    id: 69,
    slug: "versace-dylan-blue-pour-homme",
    name: "Dylan Blue Pour Homme",
    collection: "fragrance",
    brand: "Versace",
    line: "Eau de Toilette",
    price: 95,
    concentration: "Eau de Toilette",
    volume: "100 ml",
    image: "/dylan-blu-pour-homme-edtv-100ml-versace-800x800.jpg",
    description: "A modern fougere fragrance blending fresh citrus, aquatic notes, violet leaves, patchouli, and incense.",
    features: ["Deep blue bottle with gold Medusa", "100 ml natural spray", "Aromatic freshness"],
    gender: "men"
  },
  {
    id: 70,
    slug: "lancome-la-vie-est-belle",
    name: "La Vie Est Belle",
    collection: "fragrance",
    brand: "Lancôme",
    line: "Eau de Parfum",
    price: 110,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/eau-de-parfum-lancome-la-vie-est-belle-100ml-d7d.jpg",
    description: "The iconic sweet iris fragrance, layered with patchouli, spun sugar, and warm vanilla.",
    features: ["Classic smile glass bottle", "100 ml spray", "Legendary feminine trail"],
    gender: "women"
  },
  {
    id: 71,
    slug: "dior-sauvage",
    name: "Dior Sauvage",
    collection: "fragrance",
    brand: "Dior",
    line: "Eau de Parfum",
    price: 125,
    concentration: "Eau de Parfum",
    volume: "100 ml",
    image: "/dior-sauvage-parfum-eau-de-parfum.jpg",
    description: "A powerfully fresh and noble composition combining juicy calabrian bergamot with warm Papua New Guinean vanilla.",
    features: ["Magnetic dark glass bottle", "100 ml spray", "Legendary masculine signature"],
    gender: "men"
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
