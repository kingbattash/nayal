import type { Metadata } from "next"
import { CollectionView } from "@/components/collection-view"

export const metadata: Metadata = {
  title: "Fragrance — NAYAL",
  description:
    "Signature botanical absolute oils, premium perfumes and coastal blends composed in Zanzibar.",
}

export default function FragrancePage() {
  return <CollectionView collection="fragrance" />
}
