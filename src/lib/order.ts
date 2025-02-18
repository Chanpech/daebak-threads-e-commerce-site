import pool from "./database";
import { Order, OrderItem } from "./types";

/**
 * Create a new order in the database
 * @param user_id - The ID of the user placing the order
 * @param session_id - The Stripe Session ID
 * @param totalAmount - The total amount of the order.
 * @param items - The items in the order.
 * @return The ID of the created order
 */
export async function createOrder(
    user_id: number,
    session_id: string,
    totalAmount: number,
    items: OrderItem[]
): Promise<number> {
    
    const client = await pool.connect();

    try { 
        await client.query('BEGIN');

        // Insert the order
        const orderRes = await client.query<Order>(
            'INSERT INTO orders (user_id, session_id, total_amount) VALUES ($1, $2, $3) RETURN id', 
            [user_id, session_id, totalAmount]
        );
        const orderId = orderRes.rows[0].id;

        // Insert order items
        for (const item of items) {
            await client.query(
                'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',
                [orderId, item.product_id, item.quantity, item.price]
            );
        }

        await client.query('COMMIT');
        return orderId;
    } catch(error){
        await client.query('ROLLBACK');
        throw error;
    }finally{
        client.release();
    }
}


/**
 * Update the status of an order.
 * @param status - the Stripe session ID
 * @param sessionId - the new status of the order
 * @returns The updated order
 */
export async function updateOrderStatus(
    status: string,
    sessionId: string
): Promise<Order> {
    const res = await pool.query(
        'UPDATE orders SET status = $1 WHERE session_id = $2 RETURNING*',
        [status, sessionId]
    );
    return res.rows[0];
}