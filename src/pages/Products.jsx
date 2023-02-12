import React from "react";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import ProductsList from "../Components/Products/ProductsList";
import { products } from "../Components/Data/data";

const Products = () => {
  console.log(products);
  return (
    <>
      <MainNavigation />
      <ProductsList products={products} />
    </>
  );
};

export default Products;
