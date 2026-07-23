"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { Check, Minus, Plus, ShoppingBag, X } from "lucide-react"
import type { Product } from "@/lib/products"
import { collectionFallback } from "@/lib/products"

interface CartItem extends Product {
  qty: number
}

interface CartContextValue {
  cart: CartItem[]
  cartCount: number
  cartTotal: number
  wishlist: number[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  updateQty: (id: number, qty: number) => void
  toggleWishlist: (id: number) => void
  openCart: () => void
  openQuickView: (product: Product) => void
  notify: (message: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<number[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [quickView, setQuickView] = useState<Product | null>(null)
  const [toast, setToast] = useState("")

  const notify = useCallback((message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(""), 3000)
  }, [])

  const addToCart = useCallback(
    (product: Product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id)
        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
          )
        }
        return [...prev, { ...product, qty: 1 }]
      })
      notify(`"${product.name}" added to your bag`)
    },
    [notify],
  )

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQty = useCallback(
    (id: number, qty: number) => {
      if (qty <= 0) {
        removeFromCart(id)
        return
      }
      setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)))
    },
    [removeFromCart],
  )

  const toggleWishlist = useCallback(
    (id: number) => {
      setWishlist((prev) => {
        if (prev.includes(id)) {
          notify("Removed from wishlist")
          return prev.filter((item) => item !== id)
        }
        notify("Saved to wishlist")
        return [...prev, id]
      })
    },
    [notify],
  )

  const cartCount = cart.reduce((total, item) => total + item.qty, 0)
  const cartTotal = cart.reduce((total, item) => total + item.price * item.qty, 0)

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      cartCount,
      cartTotal,
      wishlist,
      addToCart,
      removeFromCart,
      updateQty,
      toggleWishlist,
      openCart: () => setCartOpen(true),
      openQuickView: (product: Product) => setQuickView(product),
      notify,
    }),
    [cart, cartCount, cartTotal, wishlist, addToCart, removeFromCart, updateQty, toggleWishlist, notify],
  )

  return (
    <CartContext.Provider value={value}>
      {children}

      {/* Toast */}
      {toast && (
        <div
          role="status"
          className="fixed right-5 top-24 z-[100] flex w-full max-w-sm items-center justify-between gap-3 bg-ink px-6 py-4 text-canvas shadow-[0_20px_60px_-30px_rgba(10,10,10,0.5)]"
        >
          <span className="flex items-center gap-3">
            <Check className="h-4 w-4 text-gold" />
            <span className="text-[11px] font-light uppercase tracking-[0.2em]">{toast}</span>
          </span>
          <button onClick={() => setToast("")} aria-label="Dismiss notification" className="text-canvas/60 hover:text-canvas">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-ink/40 backdrop-blur-sm">
          <button className="flex-1 cursor-default" aria-label="Close cart" onClick={() => setCartOpen(false)} />
          <aside className="animate-drawer-in flex h-full w-full max-w-md flex-col border-l border-line bg-canvas shadow-[-24px_0_60px_-30px_rgba(10,10,10,0.45)]">
            <div className="flex items-center justify-between border-b border-line p-6">
              <span className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.2} />
                <h2 className="text-[11px] font-light uppercase tracking-[0.3em]">Your Atelier Bag</h2>
              </span>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="p-2 text-subtle hover:text-ink">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-64 flex-col items-center justify-center space-y-3 text-center">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-subtle">Your bag is empty</p>
                  <p className="max-w-xs text-xs leading-relaxed text-subtle">
                    Begin adding curated couture, bedding, fragrance or interiors from the maison.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-line pb-6">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden border border-line bg-surface">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover mix-blend-multiply"
                        onError={(e) => {
                          e.currentTarget.src = collectionFallback[item.collection]
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[11px] font-light uppercase leading-snug tracking-[0.2em]">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} aria-label="Remove item" className="p-1 text-subtle hover:text-ink">
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-subtle">{item.line}</p>
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="flex items-center gap-2 border border-line px-2 py-0.5">
                          <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity" className="p-0.5 text-subtle hover:text-ink">
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity" className="p-0.5 text-subtle hover:text-ink">
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-xs font-medium">${(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="space-y-4 border-t border-line bg-surface p-6">
                <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-subtle">
                  <span>Subtotal</span>
                  <span className="font-medium text-ink">${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-subtle">
                  <span>Shipping</span>
                  <span className="font-medium text-gold">Complimentary</span>
                </div>
                <div className="flex justify-between border-t border-line pt-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
                  <span>Estimated Total</span>
                  <span>${cartTotal.toLocaleString()} USD</span>
                </div>
                <button
                  onClick={() => {
                    notify("Redirecting to private check-out portal")
                    setCart([])
                    setCartOpen(false)
                  }}
                  className="w-full bg-ink py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-canvas transition-colors hover:bg-ink/90"
                >
                  Checkout
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* Quick View */}
      {quickView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/45 p-4 backdrop-blur-sm">
          <button className="absolute inset-0 cursor-default" aria-label="Close quick view" onClick={() => setQuickView(null)} />
          <div className="animate-fade-in relative z-10 w-full max-w-3xl overflow-hidden border border-line bg-canvas shadow-[0_20px_60px_-30px_rgba(10,10,10,0.5)]">
            <button
              onClick={() => setQuickView(null)}
              aria-label="Close quick view"
              className="absolute right-4 top-4 z-10 rounded-full border border-line bg-canvas p-2 text-subtle shadow hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-surface md:h-[460px]">
                <img
                  src={quickView.image || "/placeholder.svg"}
                  alt={quickView.name}
                  className="h-full w-full object-cover mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.src = collectionFallback[quickView.collection]
                  }}
                />
              </div>
              <div className="flex flex-col justify-between gap-6 p-8">
                <div className="space-y-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-subtle">Nayal Atelier · {quickView.line}</span>
                    <h3 className="mt-2 font-serif text-2xl font-light uppercase tracking-[0.1em]">{quickView.name}</h3>
                  </div>
                  <p className="text-sm font-medium">${quickView.price.toLocaleString()} USD</p>
                  <p className="text-xs leading-relaxed text-subtle">{quickView.description}</p>
                  <div className="space-y-2 pt-2">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em]">Product Highlights</span>
                    <ul className="space-y-1 text-xs text-subtle">
                      {quickView.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-gold" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart(quickView)
                    setQuickView(null)
                  }}
                  className="w-full bg-ink py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-canvas transition-colors hover:bg-ink/90"
                >
                  Add to Bag · ${quickView.price.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </CartContext.Provider>
  )
}
