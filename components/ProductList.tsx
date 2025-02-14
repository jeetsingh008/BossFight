"use client"
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  MRP: number;
  imagesrc: StaticImageData;
};

const ContainerAnimateVariant = {
  initial: { opacity: 0, scale: 0.15},
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,  // Softer spring effect
      damping: 18,    // Reduces excessive bounce
      duration: 0.3,  // Smooth and quick
    },
  },
};



const ProductList = ({ productList }: { productList: Array<Product> }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5  2xl:grid-cols-6 gap-6 md:gap-4 xl:gap-10 place-items-center">
      {productList.map((product) => (
        <motion.div
          variants={ContainerAnimateVariant}
          initial="initial"
          whileInView="animate"
          key={product.id}
          className="flex flex-col gap-4 items-center hover:shadow-2xl rounded-2xl border border-gray-700 hover:bg-white duration-300 ease-in-out group p-4 sm:m-10 md:m-0"
        >
          <div className="w-[90%] p-6">
            <Image src={product.imagesrc} alt="image" layout="responsive" height={300} width={500} priority />
          </div>
          <div className="flex flex-col gap-1 bg-white group-hover:bg-darkGray group-hover:text-white duration-300 ease-in-out rounded-t-xl w-full h-full px-3 py-1">
            <h1>{product.name}</h1>
            <div className="flex gap-4 items-center">
              <p className="">{product.price}</p>
              <p className="opacity-55 line-through">{product.MRP}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
