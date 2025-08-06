"use client";
import Hero from "./_components/Hero";
import ProductsOverview from "./_components/ProductOverview";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import RandomCarousel from "./_components/Carousel";
import gmouse from "../public/assets/gmouse.jpg";
import gboard from "../public/assets/gboard.jpg";
import Image, { StaticImageData } from "next/image";

type SlideType = {
  id: number;
  image: StaticImageData;
};

const slides = [
  {
    id: 1,
    image: gmouse,
  },
  {
    id: 2,
    image: gboard,
  },
  {
    id: 3,
    image: gboard,
  },
  {
    id: 4,
    image: gboard,
  },
];

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
        <div className="container py-8">
          <ProductsOverview />
          <div className="max-w-3xl mx-auto">
            <RandomCarousel title="Best Deals">
              {slides.map((slide, _) => (
                <Image src={slide.image} alt="Image" key={slide.id} />
              ))}
            </RandomCarousel>
          </div>
        </div>
      </main>
    </div>
  );
}
