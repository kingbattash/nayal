import type { Metadata } from "next"
import { Suspense } from "react"
import { FragranceCatalogue } from "@/components/fragrance-catalogue"
import { FragrancePageHeader } from "@/components/fragrance-page-header"
import { getProductsByCollection } from "@/lib/products"

export const metadata: Metadata = {
  title: "Fragrances and Body Care — NAYAL",
  description:
    "NAYAL collection of fragrances including eau de parfums from Lattafa Pride, Ahmed Al Maghribi and the maison atelier.",
}

export default function FragrancePage() {
  const products = getProductsByCollection("fragrance")

  return (
    <>
      <FragrancePageHeader />
      <Suspense fallback={null}>
        <FragranceCatalogue products={products} />
      </Suspense>
    </>
  )
}
