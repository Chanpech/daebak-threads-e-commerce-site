'use client'

import React, { useState, useContext, useEffect, createContext } from "react";
import { CartItem, Product } from "./types";


interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}: {children: React.ReactNode}){
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(()=> {
        const savedCart = localStorage.getItem("cart")
        if(savedCart){ 
            setCart(JSON.parse(savedCart))
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart] );

    const addToCart = (product: Product) => {
        setCart((currentCart) => {
          const existingItem = currentCart.find((item) => item.id === product.id)

          if (existingItem) {
            return currentCart.map((item) => (item.id === product.id ? 
                { ...item, quantity: item.quantity + 1 } : item))
          }

          return [...currentCart, { ...product, quantity: 1 }]
        })
    };

    const removeFromCart = (productId: string) => {
        setCart((currentcart) => currentcart.filter((item)=> item.id !== productId))
    };

    const clearCart = () => {
        setCart([])     // Set as an empty array
    };
    
    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}

export function useCart(){
    const context = useContext(CartContext);
    if (context === undefined){
        throw new Error("usecart must be used within a CartProvider");
    }
    return context;
}