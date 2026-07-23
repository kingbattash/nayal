import type { Metadata } from "next"
import { CollectionView } from "@/components/collection-view"

export const metadata: Metadata = {
  title: "Bedsheets — NAYAL",
  description:
    "Luxury satin bed linens and heavy-thread textiles woven for the NAYAL maison.",
}

export default function BedsheetsPage() {
  return <CollectionView collection="bedsheets" />
}
