import { Pool } from "pg";

// Define the pool configuration
const pool = new Pool({
    user: 'ecommerce_user',
    host:'localhost',
    database:'ecommerce',
    password: "PostgresSQL#69",
    port: "5433"
});

export default pool; 
