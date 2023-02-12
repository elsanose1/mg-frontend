import React from "react";
import ProductCard from "./ProductCard";
import classes from "./Products.module.scss";
const ProductsList = ({ products }) => {
  return (
    <div className={classes["cards-container"]}>
      <h1> Some Of Our Products</h1>
      <div className={classes["cards"]}>
        {products.length > 0 &&
          products.map((product, index) => (
            <ProductCard key={`${product.title}-${index}`} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsList;
