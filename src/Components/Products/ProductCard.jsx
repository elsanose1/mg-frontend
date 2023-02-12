import React from "react";
import classes from "./Products.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={classes["product-card"]}>
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  );
};

export default ProductCard;
