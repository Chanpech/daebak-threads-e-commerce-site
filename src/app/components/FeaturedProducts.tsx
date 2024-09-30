'use client'

import { useState, useEffect } from "react";
import {  
    Card,
    CardContent,
    CardFooter,
    CardHeader, 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
                                    <Button variant="outline">Add to Cart</Button> 
                                    {/* On click simulate a pop up text  saying added */}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

}