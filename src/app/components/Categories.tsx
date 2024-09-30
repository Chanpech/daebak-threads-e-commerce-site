'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
    { 
        name: 'Men', 
        image: '/images/men-category.jpg' 
    },
    { 
        name: 'Women',
        image: '/images/women-category.jpg' 
    },
    { 
        name: 'Accessories', 
        image: '/images/accessories-category.png' 
    },
]

export default function Categories() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/categories/${category.name.toLowerCase()}`}
                                className='block relative h-64 rounded-lg overflow-hidden'
                            >
                                <img src={category.image} className='w-full h-full object-cover' />
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
                                    <h3 className='text-2xl font-bold text-white'>{category.name}</h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}