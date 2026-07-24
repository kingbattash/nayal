import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProductDetail } from "@/components/product-detail"
import {
  formatProductTileLabel,
  getProductById,
  products,
} from "@/lib/products"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(Number(id))

  if (!product) {
    return { title: "Product — NAYAL" }
  }

  return {
    title: `${formatProductTileLabel(product)} — NAYAL`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(Number(id))

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
