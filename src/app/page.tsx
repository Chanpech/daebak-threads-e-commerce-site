
import HeroSection from "./components/HeroSection";
import FeaturedProduct from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import NewsLetter from "./components/Newsletter";
import { ProductList } from "@/components/product/product-list";
import { products } from "@/lib/product"

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductList products={products} />
      <Categories />
      <NewsLetter />
    </div>
  );
}
