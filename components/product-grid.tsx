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
          "grid grid-cols-2 border-t border-line lg:grid-cols-4",
          className,
        )}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="tile"
            className={cn(
              "border-b border-line",
              index % 2 !== 1 && "border-r border-line",
              "lg:border-r lg:border-line",
              index % 4 === 3 && "lg:border-r-0",
            )}
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
