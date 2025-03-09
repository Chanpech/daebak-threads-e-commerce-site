
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { createOrder, updateOrderStatus } from "@/lib/order";
import { OrderItem } from "@/lib/types";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default async function CheckoutSucessPage(
    { searchParams, }: { searchParams: { session_id: string};
}
){
    
    const sessionId = searchParams.session_id;

    // //  Redirect if session_id is missing
    if( !sessionId ){
        redirect("/");
    }
    let session;
    try {
        session = await stripe.checkout.sessions.retrieve(sessionId);
        
        
        if(session.payment_status !== 'paid'){
            redirect("/cart");
        }
        if(session.amount_total == null){
            throw new Error('Total amount is missing in the session.');
        }
        if(!session.line_items?.data){
            throw new Error('No line items found in the session.');
        }

        //Map Stripe line items to OrderItem format
        const items: OrderItem[] = session.line_items.data.map((item) => {
            if (!item.price?.product) {
              throw new Error('Product ID is missing in the line item.');
            }
      
            return {
              product_id: parseInt(item.price.product as string, 10), // Ensure product_id is a number
              quantity: item.quantity || 1,
              price: (item.price.unit_amount || 0) / 100, // Convert to dollars
            };
        });
    

        
        // Save order to the database
        const orderId = await createOrder(
            1,
            sessionId,
            session.amount_total / 100,     // Convert to do
            items
        );

        // Update order status 
        await updateOrderStatus(sessionId, 'paid');
    }catch (error){
        console.log('Error processing order: ', error);
        redirect('/');
    } 

    return (
        <ProtectedRoute>
            <div>
                <h1>Thank you for your purchase!</h1>
                <p>Your payment was successful.</p>
                <p>Order total: ${(session.amount_total! / 100).toFixed(2)}</p>
            </div>
        </ProtectedRoute>
    );


}