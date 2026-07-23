"use client"

import { Eye, Heart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { collectionFallback, type Product } from "@/lib/products"
import { media } from "@/app/styles/tokens/layout"

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, openQuickView, wishlist } = useCart()
  const saved = wishlist.includes(product.id)

  return (
    <article className="group flex flex-col bg-canvas">
      <div className={`relative ${media.portrait} overflow-hidden border border-line bg-surface`}>
        {product.tag && (
          <span className="absolute left-3 top-3 z-10 bg-canvas/90 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-ink">
            {product.tag}
          </span>
        )}

        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover object-center opacity-95 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
          onError={(e) => {
            e.currentTarget.src = collectionFallback[product.collection]
          }}
        />

        {/* Hover utilities */}
        <div className="absolute right-3 top-3 z-10 flex translate-x-2 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
            className="rounded-full border border-line bg-canvas p-2.5 text-ink shadow-sm hover:bg-surface"
          >
            <Heart className={`h-4 w-4 ${saved ? "fill-ink" : ""}`} />
          </button>
          <button
            onClick={() => openQuickView(product)}
            aria-label="Quick view"
            className="rounded-full border border-line bg-canvas p-2.5 text-ink shadow-sm hover:bg-surface"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Add to bag */}
        <button
          onClick={() => addToCart(product)}
          className="absolute inset-x-0 bottom-0 translate-y-3 bg-ink py-4 text-[10px] font-medium uppercase tracking-[0.25em] text-canvas opacity-0 transition-all duration-300 hover:bg-ink/90 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Add to Bag · ${product.price.toLocaleString()}
        </button>
      </div>

      <div className="mt-5 space-y-1 text-center">
        <h3 className="text-[12px] font-light uppercase tracking-[0.2em] text-ink">{product.name}</h3>
        <p className="font-serif text-xs italic text-subtle">{product.line}</p>
        <p className="pt-1 text-sm font-medium text-ink">${product.price.toLocaleString()} USD</p>
      </div>
    </article>
  )
}
