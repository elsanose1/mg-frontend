import React from "react";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import ProductsList from "../Components/Products/ProductsList";
import { products } from "../Components/Data/data";
import Footer from "../Components/Footer/Footer";

const Products = () => {
  return (
    <>
      <MainNavigation />
      <ProductsList products={products} />
      <Footer />
    </>
  );
};

export default Products;
