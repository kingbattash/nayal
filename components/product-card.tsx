"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import {
  collectionFallback,
  formatProductTileLabel,
  type Product,
} from "@/lib/products"
import { media } from "@/app/styles/tokens/layout"
import { cn } from "@/lib/utils"

type ProductCardVariant = "catalog" | "tile"

interface ProductCardProps {
  product: Product
  /** Versace PLP tile (image + single-line serif caption) vs full catalogue card. */
  variant?: ProductCardVariant
  className?: string
}

export function ProductCard({
  product,
  variant = "catalog",
  className,
}: ProductCardProps) {
  const { toggleWishlist, wishlist } = useCart()
  const saved = wishlist.includes(product.id)

  if (variant === "tile") {
    return (
      <article className={cn("group flex h-full flex-col bg-canvas", className)}>
        <Link
          href={`/product/${product.id}`}
          className="flex flex-1 flex-col"
          aria-label={formatProductTileLabel(product)}
        >
          <div className="relative flex flex-1 items-center justify-center px-6 pb-4 pt-10 sm:px-8 sm:pt-12">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="max-h-[220px] w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] sm:max-h-[260px]"
              onError={(e) => {
                e.currentTarget.src = collectionFallback[product.collection]
              }}
            />
          </div>

          <div className="border-t border-line/70 bg-canvas px-4 pb-5 pt-4 sm:px-5">
            <h3 className="font-serif text-[13px] font-normal leading-snug text-ink">
              {formatProductTileLabel(product)}
            </h3>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className={cn("group flex flex-col bg-canvas", className)}>
      <div className={`relative ${media.portrait} overflow-hidden border border-line bg-surface`}>
        {product.tag && (
          <span className="absolute left-3 top-3 z-10 bg-canvas/90 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-ink">
            {product.tag}
          </span>
        )}

        <Link href={`/product/${product.id}`} className="block h-full w-full">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover object-center opacity-95 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
            onError={(e) => {
              e.currentTarget.src = collectionFallback[product.collection]
            }}
          />
        </Link>

        <div className="absolute right-3 top-3 z-10 flex translate-x-2 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button
            onClick={() => toggleWishlist(product.id)}
            aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
            className="rounded-full border border-line bg-canvas p-2.5 text-ink shadow-sm hover:bg-surface"
          >
            <Heart className={`h-4 w-4 ${saved ? "fill-ink" : ""}`} />
          </button>
        </div>
      </div>

      <div className="mt-5 space-y-1 text-center">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-[12px] font-light uppercase tracking-[0.2em] text-ink transition-colors hover:text-subtle">
            {product.name}
          </h3>
        </Link>
        <p className="font-serif text-xs italic text-subtle">{product.line}</p>
      </div>
    </article>
  )
}
