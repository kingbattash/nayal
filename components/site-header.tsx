"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const NAV_LINKS = [
  { href: "/women", label: "Women" },
  { href: "/men", label: "Men" },
  { href: "/bedsheets", label: "Bedsheets" },
  { href: "/fragrance", label: "Fragrance" },
  { href: "/home-supplies", label: "Home Supplies" },
]

export function SiteHeader() {
  const { cartCount, wishlist, openCart } = useCart()
  const pathname = usePathname()
  const [promoOpen, setPromoOpen] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40">
      {promoOpen && (
        <div className="relative flex items-center justify-center border-b border-line bg-surface px-4 py-2.5 text-center">
          <a
            href="#newsletter"
            className="text-[10px] font-light uppercase tracking-[0.25em] text-ink underline underline-offset-4 hover:text-subtle"
          >
            Sign up for exclusive updates
          </a>
          <button
            onClick={() => setPromoOpen(false)}
            aria-label="Close announcement"
            className="absolute right-4 p-1 text-ink hover:opacity-60"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <header className="border-b border-line bg-canvas/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Mobile menu trigger */}
          <button
            className="flex items-center md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.2} />
          </button>

          {/* Text-only wordmark — strictly the single name NAYAL */}
          <Link
            href="/"
            className="font-sans text-2xl font-bold uppercase leading-none tracking-[0.4em] text-ink md:text-3xl"
            aria-label="NAYAL home"
          >
            NAYAL
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.25em] transition-colors hover:text-ink ${
                    active ? "text-ink" : "text-subtle"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Utilities */}
          <div className="flex items-center gap-5 text-ink">
            <button aria-label="Search" className="hidden p-1 hover:opacity-60 sm:block">
              <Search className="h-5 w-5" strokeWidth={1.2} />
            </button>
            <Link href="/women" aria-label="Wishlist" className="relative p-1 hover:opacity-60">
              <Heart className="h-5 w-5" strokeWidth={1.2} />
              {wishlist.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-gold" />
              )}
            </Link>
            <button
              onClick={openCart}
              aria-label="Open bag"
              className="flex items-center gap-1 p-1 hover:opacity-60"
            >
              <ShoppingBag className="h-5 w-5" strokeWidth={1.2} />
              <span className="text-xs font-medium underline underline-offset-2">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="flex h-full w-full max-w-xs flex-col bg-canvas p-6">
            <div className="mb-10 flex items-center justify-between">
              <span className="font-sans text-xl font-bold uppercase tracking-[0.4em]">NAYAL</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-1">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.3em] text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <button className="flex-1 bg-ink/40 backdrop-blur-sm" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </div>
  )
}
