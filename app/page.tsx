import Link from "next/link"
import { RefreshCw, ShieldCheck, Truck } from "lucide-react"
import { ProductGrid } from "@/components/product-grid"
import {
  collectionMeta,
  getFeaturedProducts,
  type Collection,
} from "@/lib/products"
import { container, section } from "@/app/styles/tokens/layout"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=80"

const COLLECTION_ORDER: Collection[] = [
  "women",
  "men",
  "bedsheets",
  "fragrance",
  "home-supplies",
]

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Authentic Origin",
    copy: "Every linen order and tailored piece is designed at our Dar es Salaam atelier with proof of artisanal heritage.",
  },
  {
    icon: Truck,
    title: "White-Glove Courier",
    copy: "Global delivery by our private estate fleet, arriving in protective canvas cases directly to your wardrobe.",
  },
  {
    icon: RefreshCw,
    title: "Atelier Care Guild",
    copy: "Complimentary tailoring consultation and fitting advice post-purchase for a flawless signature appearance.",
  },
]

export default function HomePage() {
  const featured = getFeaturedProducts(6)

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[82vh] min-h-[520px] items-center justify-center overflow-hidden bg-surface">
        <img
          src={HERO_IMAGE || "/placeholder.svg"}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-ink/25" />
        <div className="relative z-10 max-w-3xl space-y-8 px-6 text-center text-canvas">
          <span className="inline-block rounded-full bg-ink/45 px-4 py-1.5 text-[10px] uppercase tracking-[0.5em] backdrop-blur-sm">
            Nayal High Summer 2026
          </span>
          <h1 className="font-serif text-5xl font-light uppercase leading-tight tracking-[0.1em] text-balance drop-shadow sm:text-7xl">
            La Vacanza 2026
          </h1>
          <div className="flex flex-col items-center justify-center gap-6 pt-2 sm:flex-row">
            <Link
              href="/women"
              className="min-w-[150px] border-b border-canvas pb-1.5 font-serif text-sm italic tracking-widest text-canvas transition-opacity hover:opacity-70"
            >
              Shop Women&apos;s
            </Link>
            <Link
              href="/men"
              className="min-w-[150px] border-b border-canvas pb-1.5 font-serif text-sm italic tracking-widest text-canvas transition-opacity hover:opacity-70"
            >
              Shop Men&apos;s
            </Link>
          </div>
        </div>
      </section>

      {/* Collection navigation */}
      <section className={`${container.base} ${section.lg}`}>
        <div className="mb-12 space-y-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-subtle">Maison Dar es Salaam Curations</p>
          <h2 className="font-serif text-2xl font-light uppercase tracking-[0.12em] sm:text-3xl">
            The House of Nayal
          </h2>
          <div className="mx-auto h-px w-12 bg-ink" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {COLLECTION_ORDER.map((key) => {
            const meta = collectionMeta[key]
            return (
              <Link
                key={key}
                href={`/${key}`}
                className="group relative flex aspect-[3/4] items-end overflow-hidden border border-line bg-surface"
              >
                <img
                  src={meta.hero || "/placeholder.svg"}
                  alt={meta.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="relative z-10 w-full p-4 text-center text-[11px] uppercase tracking-[0.3em] text-canvas">
                  {meta.title}
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured pieces */}
      <section className="border-t border-line bg-surface">
        <div className={`${container.base} ${section.lg}`}>
          <div className="mb-12 space-y-3 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-subtle">Selected Masterpieces</p>
            <h2 className="font-serif text-2xl font-light uppercase tracking-[0.12em] sm:text-3xl">
              New In This Season
            </h2>
            <div className="mx-auto h-px w-12 bg-ink" />
          </div>
          <ProductGrid products={featured} />
        </div>
      </section>

      {/* Fragrance editorial */}
      <section className={`${container.base} ${section.lg}`}>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-surface">
            <img
              src={collectionMeta.fragrance.hero || "/placeholder.svg"}
              alt="NAYAL fragrance"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.4em] text-subtle">
              The Atelier Scent
            </span>
            <h2 className="font-serif text-3xl font-light uppercase tracking-[0.1em] sm:text-4xl text-balance">
              Pure Sensual Alchemy
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-subtle">
              We extend the philosophy of Tanzanian high-fashion couture into your vanity suite.
              Hand-blended oils extracted in Zanzibar are encased in weighty crystal bottles — designed
              to capture the coastal light beautifully.
            </p>
            <Link
              href="/fragrance"
              className="inline-flex items-center bg-ink px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-canvas transition-colors hover:bg-ink/90"
            >
              Acquire Maison Fragrance
            </Link>
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section className="border-t border-line bg-surface">
        <div className={`${container.base} ${section.base} grid grid-cols-1 gap-12 text-center md:grid-cols-3`}>
          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col items-center gap-3">
              <service.icon className="h-6 w-6 text-ink" strokeWidth={1.2} />
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em]">{service.title}</h3>
              <p className="max-w-xs text-xs leading-relaxed text-subtle">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
