import type { Metadata } from "next"
import { CollectionView } from "@/components/collection-view"

export const metadata: Metadata = {
  title: "Women — NAYAL",
  description:
    "Haute couture, coastal beachwear and premium tailored dresses from the NAYAL women's atelier.",
}

export default function WomenPage() {
  return <CollectionView collection="women" />
}
