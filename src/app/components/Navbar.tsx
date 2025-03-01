'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Menu, X ,Search } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useCart } from "@/lib/cart-context";

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link
                            href="/"
                            className="flex-shrink-0 flex items-center"
                        >
                            <span className="text-2xl font-bold text-gray-800">Daebak Threads</span>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm-space-x-8">
                        <Link
                            href="/products"
                            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Products
                        </Link>
                        <Link
                            href="/categories"
                            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Categories
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link href="/successful_checkout" className="relative">
                            <Search size = {24}/>
                        </Link>
                        <Link href="/cart" className="relative">
                            <ShoppingCart size = {24}/>
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center text-xs">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                        <div className="sm:hidden">
                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen?
                                    <X className="h-5 w-5" /> : <Menu className="h-5 w-5"/>
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="sm:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/products" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                    Products
                  </Link>
                  <Link href="/categories" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                    Categories
                  </Link>
                  <Link href="/about" className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </Link>
                </div>
              </motion.div>
            )}
        </nav>
    )
}