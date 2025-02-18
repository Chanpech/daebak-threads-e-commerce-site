import { Cart } from "@/components/ui/Cart";

export default function CartPage(){
    return ( 
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8"> Your Cart</h1>
            <Cart />
        </div>
    );
}