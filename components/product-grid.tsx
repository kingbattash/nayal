import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products"
import { grid } from "@/app/styles/tokens/layout"

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={grid.catalog}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
