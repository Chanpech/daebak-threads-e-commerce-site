import { redirect } from "next/navigation"
import Stripe from "stripe"
import { CartItem } from "./types"

if(!process.env.STRIPE_SECRET_KEY){
    throw new Error("STRIPE_SECRET_KEY is nott set in the environment varaible")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-01-27.acacia"     //The current latest version of acacia as of 2/6/2025
})

export async function createCheckOutSession(cartItems: CartItem[]) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: cartItems.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name,
                    images: [item.image],
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        })),
        mode: "payment",
        // success_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        // cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    })
    // redirect(session.url!)
    return session
}