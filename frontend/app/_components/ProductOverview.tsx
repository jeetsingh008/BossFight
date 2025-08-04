import ProductList from "@/components/ProductList";
import React from "react";
import products from "@/data/products";

const ProductOverview = () => {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto">
        <div className="py-8 md:py-14 p-4 lg:px-6">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <div>
              <h1 className="text-2xl md:text-3xl text-darkGray font-semibold">
                Keep shopping for...
              </h1>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <h2 className="font-medium text-lg text-nowrap border border-lightOrange px-2 py-[1px] rounded-lg">
                  <span>Gaming Controllers</span>
                </h2>
                <div className="h-[1px] w-full bg-lightOrange mt-1"></div>
              </div>
              <ProductList productList={products} />
              <div className="flex justify-end">
                <button className="primary-btn">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
