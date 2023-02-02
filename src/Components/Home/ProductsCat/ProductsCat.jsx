import React from "react";
import classes from "./ProducsCat.module.scss";

const ProductsCat = () => {
  return (
    <section className={classes.cat}>
      <div id="product" className={classes["card-holder"]}>
        <div className={classes.card}>
          <i className="material-icons">palette</i>
          <h3>Art supply</h3>
          <p>
            we are dedicated to provide our customers with premium quality stuff
            and nothing less than the premium
          </p>
        </div>
        <div className={classes.card}>
          <i className="material-icons">school</i>
          <h3>school supply</h3>
          <p>
            we have a comprehensive selection of educational materials and
            school supplies
          </p>
        </div>
        <div className={classes.card}>
          <i className="material-icons">business</i>
          <h3>office supply</h3>
          <p>Biggest selection of Office Supplies in Egypt</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsCat;
