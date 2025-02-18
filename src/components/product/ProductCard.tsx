"use client"

import Image from "next/image"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";


export function ProductCard({ product }: { product: Product }) {
  const { addToCart, cart } = useCart()
  const [showOverlay, setShowOverlay] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 3000) // Hide overlay after 3 seconds
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="border rounded-lg p-4 flex flex-col relative">
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="p-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md"
            />
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">${(product.price / 100).toFixed(2)}</p>
            </div>
            <Button onClick={handleAddToCart} className="mt-auto">
              Add to Cart
            </Button>
            {showOverlay && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="font-semibold mb-2">Added to cart!</p>
                  <p className="mb-4">
                    Subtotal (without tax): {itemCount} item(s) ${(subtotal / 100).toFixed(2)}
                  </p>
                  <Link href="/cart" passHref>
                    <Button className="mr-2">View Cart</Button>
                  </Link>
                  <Button variant="outline" onClick={() => setShowOverlay(false)}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

