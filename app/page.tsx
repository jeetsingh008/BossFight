import Hero from "./components/Hero";
import ProductsOverview from "./products/page";

export default function Home() {
  return (
    <div>
      <main className="overflow-hidden">
        <Hero />
        <ProductsOverview />
      </main>
    </div>
  );
}
