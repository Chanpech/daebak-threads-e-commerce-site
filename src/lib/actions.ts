"use server"

import { createCheckOutSession } from "./stripe"

export async function checkoutAction(_prevState: unknown, formData: FormData){
    const priceId = formData.get("priceId") as string;
    await createCheckOutSession({priceId});
}