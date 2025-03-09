"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart }),
    })

    const { url } = await response.json()
    window.location.href = url
  }

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <p className="text-lg">${((item.price * item.quantity) / 100).toFixed(2)}</p>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold mb-4">Total: ${(total / 100).toFixed(2)}</p>
            <Button onClick={handleCheckout} className="w-full mb-2">
              Proceed to Checkout
            </Button>
            <Button variant="outline" onClick={clearCart} className="w-full mb-2">
              Clear Cart
            </Button>
            <Link href="/" passHref>
              <Button variant="link" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

