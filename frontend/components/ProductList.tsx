"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Product } from "@/types/product";

const ProductList = ({ productList }: { productList: Array<Product> }) => {
  useEffect(() => {
    AOS.init({ once: true }); // Animate only once when in view
  }, []);

  return (
    <div className="grid gap-4 lg:gap-6 grid-cols-1 xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 justify-center place-items-center">
      {productList.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col gap-4 items-center shadow-md hover:shadow-2xl hover:scale-105 transform rounded-2xl border border-lightOrange hover:bg-white transition-all duration-200 ease-in-out p-4 sm:m-10 md:m-0"
        >
          {/* Animate only the image section, not the whole card */}
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="w-[90%] p-6"
          >
            <Image
              src={product.imagesrc}
              alt={product.name}
              layout="responsive"
              height={300}
              width={500}
              priority
            />
          </div>

          {/* Product Info */}
          <div className="relative flex flex-col justify-center items-center w-full">
            {/* Hover-revealed Buy Now button */}
            <div className="absolute -top-6 z-10 bg-primary hover:scale-95 cursor-pointer text-white px-4 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Buy Now
            </div>

            <div className="flex flex-col gap-1 text-white pt-2 bg-darkGray cursor-pointer group-hover:text-primaryDark duration-300 ease-in-out rounded-t-xl w-full px-3 py-1">
              <h1>{product.name}</h1>
              <div className="flex gap-4 items-center">
                <p>{product.price}</p>
                <p className="opacity-55 line-through">{product.MRP}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
