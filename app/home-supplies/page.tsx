import type { Metadata } from "next"
import { CollectionView } from "@/components/collection-view"

export const metadata: Metadata = {
  title: "Home Supplies — NAYAL",
  description:
    "Baroque curtains, premium drapes and interior lifestyle artifacts from the NAYAL maison.",
}

export default function HomeSuppliesPage() {
  return <CollectionView collection="home-supplies" />
}
