export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    stripePriceId: string;
}

export interface CartItem extends Product { 
    quantity: number;
}


// PostgresSQL TABLES MODELS //
export interface User{
    id?: number;
    email: string;
    created_at?: Date;
}

export interface Order {
    id?: number;
    user_id: number;
    session_id: string;
    total_amount: number;
    status: string;
    created_at?: Date;

}
export interface OrderItem {
    id?: number;
    ordered_id?: number;
    product_id: number;
    quantity: number;
    price: number;
}

//END OF TABLES MODELS //