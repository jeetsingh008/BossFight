"use client"
import Hero from "./components/Hero";
import ProductsOverview from "./components/ProductOverview";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in",
      delay: 10,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <main className="overflow-hidden w-full">
        <Hero />
        <ProductsOverview />
      </main>
    </div>
  );
}