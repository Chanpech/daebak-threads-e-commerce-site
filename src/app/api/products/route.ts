import mongoose from "mongoose";
import { NextResponse } from "next/server";

//Connect to MongoDb
mongoose.connect(process.env.MONGODB_URL as String)

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export async function GET() {
    const products = await Product.find();
    return NextResponse.json(products);
}

export async function POST(request:Request){
    const body = await request.json();
    const product = await Product.create(body);
    return NextResponse.json(product);
}