"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { container } from "@/app/styles/tokens/layout"

const COLLECTION_LINKS = [
  { href: "/women", label: "Women" },
  { href: "/men", label: "Men" },
  { href: "/bedsheets", label: "Bedsheets" },
  { href: "/fragrance", label: "Fragrance" },
  { href: "/home-supplies", label: "Home Supplies" },
]

const SERVICE_LINKS = [
  "Private Salon Booking",
  "Custom Resizing",
  "Care Guides",
  "Shipping & Returns",
  "Authenticity",
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas">

      {/* Editorial columns */}
      <div className={`${container.base} grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-5`}>
        {/* About Us — Tanzanian heritage */}
        <div className="col-span-2">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">About Us</h3>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-subtle">
            Maison Dar es Salaam. NAYAL is a Tanzanian house of high fashion founded on the shores of
            the Indian Ocean. From our Oyster Bay atelier we pursue an uncompromising dedication to
            coastal design and luxury interiors — marrying Swahili geometry, East African craft and
            European tailoring into ready-to-wear, fragrance and heirloom textiles.
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-subtle">
            Designed &amp; crafted in Tanzania
          </p>
        </div>

        {/* Collections */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">Collections</h3>
          <ul className="mt-5 space-y-3">
            {COLLECTION_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs uppercase tracking-[0.15em] text-subtle hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Service */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">Client Service</h3>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((label) => (
              <li key={label}>
                <span className="text-xs uppercase tracking-[0.15em] text-subtle">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us — premium client service */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-ink">Contact Us</h3>
          <ul className="mt-5 space-y-4 text-xs text-subtle">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.3} />
              <span className="leading-relaxed">
                Private studio, Oyster Bay
                <br />
                Dar es Salaam · Zanzibar
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={1.3} />
              <span>+255 22 NAYAL</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" strokeWidth={1.3} />
              <span>privateclients@nayal.com</span>
            </li>
          </ul>
          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-subtle">
            Private booking inquiries by appointment
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-line py-8">
        <div className={`${container.base} flex flex-col items-center gap-4 text-center md:flex-row md:justify-between`}>
          <p className="text-[10px] uppercase tracking-[0.3em] text-subtle">
            © {new Date().getFullYear()} NAYAL Maison Atelier · Dar es Salaam
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-subtle">
            <span className="hover:text-ink">Privacy Policy</span>
            <span className="hover:text-ink">Terms &amp; Conditions</span>
            <span className="hover:text-ink">Cookie Settings</span>
            <span className="hover:text-ink">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
