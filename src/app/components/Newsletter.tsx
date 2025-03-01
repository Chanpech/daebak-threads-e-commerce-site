'use client'

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewsLetter(){
    const [ email, setEmail ] = useState('');

    const handleSubmit = () => {
        
    };
    return(
        <section id="newsletter" className="py-16 bg-gray-800 text-white"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-xl mb-8">Stay updated with our latest trends and offers</p>
                    <form onSubmit={handleSubmit} className="flex flex-cols sm:flex-row justify-center gap-4">
                        <Input 
                            type="mail"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>setEmail(e.target.value)}
                            className="max-w-md text-black bg-white"
                            required
                        />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}