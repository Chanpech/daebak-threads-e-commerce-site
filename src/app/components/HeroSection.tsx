'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
//Credit: Marlene Leppänen for Front-Page-Model 


export default function HeroSection(){
    return(
        <section id="hero">
            <div className="relative h-screen flex items-center justify-center bg-gray-100">
                <motion.img 
                    src="/images/front-page-model.jpg"
                    alt="FrontPage-Model"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    initial={{ opacity: 0, scale: 1.1}}
                    animate={{opacity: 0.7, scale: 1}}
                    transition={{duration: 1.2}}
                />
                <div className="text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4"
                    >
                        Discover your style
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8, delay:0.2 }}
                        className="text-xl text-gray-600 mb-8"
                    >
                        Elevate your wardrobe with our curated collection!
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.4}}
                    >
                        <Button size='lg'>Shop Now!</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}