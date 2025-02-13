import Image, { StaticImageData } from "next/image";
import React from "react";
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  MRP: number;
  imagesrc: StaticImageData;
};

const ProductList = ({ productList }: { productList: Array<Product> }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-4 xl:gap-10 place-items-center">
      {productList.map((product) => (
        <div
          key={product.id}
          className="flex flex-col gap-4 items-center hover:shadow-xl rounded-lg bg-zinc-200 hover:bg-white duration-300 ease-in-out group p-4 m-10 md:m-0"
        >
          <div className="w-[90%] p-6">
            <Image src={product.imagesrc} alt="image" layout="responsive" />
          </div>
          <div className="flex flex-col gap-1 bg-white group-hover:bg-darkGray group-hover:text-white duration-300 ease-in-out rounded-t-xl w-full h-full px-3 py-1">
            <h1>{product.name}</h1>
            <div className="flex gap-4 items-center">
              <p className="">{product.price}</p>
              <p className="opacity-55 line-through">{product.MRP}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
