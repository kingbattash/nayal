"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Mail, Phone, MessageCircle } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import {
  collectionFallback,
  formatProductTileLabel,
  type Product,
} from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { toggleWishlist, wishlist } = useCart()
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [scentOpen, setScentOpen] = useState(false)
  const saved = wishlist.includes(product.id)

  const collectionLabel =
    product.collection === "home-supplies"
      ? "Home Supplies"
      : product.collection.charAt(0).toUpperCase() + product.collection.slice(1)

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="grid grid-cols-1 border-b border-line sm:grid-cols-2 lg:border-b-0 lg:border-r">
          <div className="flex min-h-[420px] items-center justify-center bg-surface-strong px-8 py-12 sm:min-h-[520px]">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="max-h-[420px] w-full object-contain object-center"
              onError={(e) => {
                e.currentTarget.src = collectionFallback[product.collection]
              }}
            />
          </div>
          <div className="flex min-h-[420px] items-center justify-center border-t border-line bg-surface px-8 py-12 sm:min-h-[520px] sm:border-l sm:border-t-0">
            <img
              src={product.image || "/placeholder.svg"}
              alt={`${product.name} packaging`}
              className="max-h-[420px] w-full object-contain object-center opacity-95"
              onError={(e) => {
                e.currentTarget.src = collectionFallback[product.collection]
              }}
            />
          </div>
        </div>

        <div className="flex flex-col px-6 py-10 sm:px-10 lg:py-14">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-subtle">
                {product.brand} · {product.line}
              </p>
              <h1 className="font-serif text-2xl font-normal leading-snug text-ink sm:text-[1.75rem]">
                {formatProductTileLabel(product)}
              </h1>
            </div>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
              className="p-2 text-ink hover:opacity-60"
            >
              <Heart className={`h-5 w-5 ${saved ? "fill-ink" : ""}`} strokeWidth={1.2} />
            </button>
          </div>



          <p className="mt-6 max-w-md text-sm leading-relaxed text-subtle">{product.description}</p>

          <div className="mt-8 border border-line bg-surface p-6 space-y-4">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">Inquiries & Ordering</h3>
              <p className="mt-1 text-xs text-subtle leading-relaxed">
                This exclusive piece is available through direct purchase. Contact our boutique to coordinate delivery.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:sales@nayal.com?subject=Purchase%20Inquiry:%20${encodeURIComponent(product.name)}`}
                className="flex items-center gap-3 border border-line bg-canvas px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-surface-strong"
              >
                <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <span>sales@nayal.com</span>
              </a>

              <a
                href="tel:+255776366613"
                className="flex items-center gap-3 border border-line bg-canvas px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-surface-strong"
              >
                <Phone className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <span>+255 776 366 613</span>
              </a>

              <a
                href={`https://wa.me/255670430668?text=${encodeURIComponent(`Hello, I'm interested in purchasing the "${product.name}"`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-line bg-canvas px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-surface-strong"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" strokeWidth={1.5} />
                <span>WhatsApp: 0670430668</span>
              </a>
            </div>
          </div>

          <div className="mt-10 divide-y divide-line border-t border-line">
            <button
              type="button"
              onClick={() => setScentOpen((open) => !open)}
              className="flex w-full items-center justify-between py-5 text-left text-sm text-ink"
            >
              <span>Discover The Scent</span>
              <span className="text-xl leading-none">{scentOpen ? "−" : "+"}</span>
            </button>
            {scentOpen && (
              <div className="pb-5 text-sm leading-relaxed text-subtle">
                {product.features.join(" · ")}
              </div>
            )}

            <button
              type="button"
              onClick={() => setDetailsOpen((open) => !open)}
              className="flex w-full items-center justify-between py-5 text-left text-sm text-ink"
            >
              <span>Product Details</span>
              <span className="text-xl leading-none">{detailsOpen ? "−" : "+"}</span>
            </button>
            {detailsOpen && (
              <ul className="space-y-2 pb-5 text-sm text-subtle">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="border-t border-line px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-subtle sm:px-10"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li aria-hidden="true">|</li>
          <li>
            <Link href={`/${product.collection}`} className="hover:text-ink">
              {collectionLabel}
            </Link>
          </li>
          <li aria-hidden="true">|</li>
          <li className="text-ink">{formatProductTileLabel(product)}</li>
        </ol>
      </nav>
    </>
  )
}
