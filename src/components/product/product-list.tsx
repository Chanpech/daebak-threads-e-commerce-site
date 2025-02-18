import { Button } from "@/components/ui/button";
import { ProductListThumbnail, ProductListThumbnailSkeleton } from "@/components/product/product-list-thumbnail";
import type { productListSchema } from "@/lib/schema"
import Link from "next/link";
import type { z } from "zod";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product/ProductCard";

interface ProductListProps{
    products: Product[]
}

export function ProductList({products}: ProductListProps){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap 8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    );
}