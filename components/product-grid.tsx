import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products"
import { grid } from "@/app/styles/tokens/layout"
import { cn } from "@/lib/utils"

type ProductGridVariant = "catalog" | "tile"

interface ProductGridProps {
  products: Product[]
  /** Versace PLP tile grid with vertical dividers. */
  variant?: ProductGridVariant
  className?: string
}

export function ProductGrid({
  products,
  variant = "catalog",
  className,
}: ProductGridProps) {
  if (variant === "tile") {
    return (
      <div
        className={cn(
          "grid grid-cols-2 gap-4 px-4 py-8 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-12",
          className,
        )}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="tile"
            className="border border-line"
          />
        ))}
      </div>
    )
  }

  return (
    <div className={cn(grid.catalog, className)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
