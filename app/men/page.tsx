import type { Metadata } from "next"
import { CollectionView } from "@/components/collection-view"

export const metadata: Metadata = {
  title: "Men — NAYAL",
  description:
    "Unstructured linen suiting, premium shirting and high-fashion resort wear from the NAYAL men's atelier.",
}

export default function MenPage() {
  return <CollectionView collection="men" />
}
