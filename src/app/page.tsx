
import HeroSection from "./components/HeroSection";
import FeaturedProduct from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import NewsLetter from "./components/Newsletter";

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProduct />
      <Categories />
      <NewsLetter />
    </div>
  );
}
