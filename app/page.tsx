import Hero from "./components/Hero";
import ProductsOverview from "./components/ProductOverview";

export default function Home() {
  return (
    <div>
      <main className="overflow-hidden w-full">
        <Hero />
        <ProductsOverview />
      </main>
    </div>
  );
}
