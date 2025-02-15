import ProductList from "@/components/ProductList";
import React from "react";
import products from "@/utils/products";

const ProductOverview = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto">
        <div className="py-8 md:py-14 p-4 lg:px-6">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div>
              <h1 className="text-2xl md:text-3xl text-darkGray font-semibold">
                Keep shopping for...
              </h1>
            </div>
            <ProductList productList={products} />
            <div className="flex justify-center">
              <button className="primary-btn">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
