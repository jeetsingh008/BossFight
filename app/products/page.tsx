import ProductList from "@/components/ProductList";
import React from "react";
import products from "@/utils/products";

const ProductsOverview = () => {
  return (
    <section className="overflow-hidden min-h-96 py-14">
      <div className="container">
        <div className="flex flex-col gap-4">
          {/* Heading Section */}
          <div className="w-full">
            <h1 className="text-start text-2xl">Keep shopping for...</h1>
          </div>
          {/* Products List */}
          <ProductList productList={products} />
          {/* Call to action button */}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
