'use client'

import { useState } from "react";
import {  
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

interface Product {
    id: string,
    name: string,
    price: number,
    image: string
}


const testProducts: Product[] = [
    {
        id: "1",
        name: "Sneaker Max | Black/White",
        price: 40,
        image: "/images/test-sneaker.jpg"
    },
    {
        id: "2",
        name: "Essential Hoodie | White",
        price: 50,
        image: "/images/white-hoodie.jpg"
    },
];

export default function FeaturedProduct(){
    const [products, setProducts] = useState<Product[]>([]);
    const [showOverlay, setShowOverlay] = useState(false);
    const {addToCart, cart} = useCart();
    
    const handleAddToCart = (product: Product) => { 
        console.log("Adding to cart:", product);        //Debugging: Log the product being added
        addToCart(product);
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 10000)  //Hide the overlay after 3 seconds
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return(
        <section id="featured" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap 8">
                    {testProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y : 0}}
                            transition={{ duration: 0.5 }}
                        >
                            <Card>
                                <CardContent className="p-4">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-64 object-cover rounded-md"
                                    />
                                </CardContent>
                                <CardFooter className="flex justify-between items-center">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                    </div>
                                    <Button  onClick={() => handleAddToCart(product)} variant="outline">Add to Cart</Button> 
                                    {/* Displaying the item has been added to cart overlay */}
                                    {showOverlay && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <p className="font-semibold mb-2">Added to Cart!</p>
                                                <p className="mb-4">Subtotal (without tax): {itemCount} items(s) 
                                                    ${(subtotal / 100).toFixed(5)}
                                                </p>
                                            </div>
                                            <Link href="/cart" passHref> 
                                                <Button className="mr-2">
                                                    View Cart
                                                </Button>
                                            </Link>
                                            <Button variant="outline" onClick={() => setShowOverlay(false)}>
                                                Continue Browsing
                                            </Button>
                                        </div>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

}