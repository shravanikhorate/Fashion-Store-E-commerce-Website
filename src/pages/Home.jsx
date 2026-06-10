import HeroSection from "../components/HeroSection";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div>

      {/* HERO */}
      <HeroSection />

      {/* CATEGORIES */}
      <CategoryGrid />

      {/* PRODUCT SECTION */}
      <ProductGrid />

    </div>
  );
}

export default Home;

