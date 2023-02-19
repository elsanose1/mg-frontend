import React from "react";
import classes from "./Stores.module.scss";

const StoreCard = ({ store }) => {
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <img src={store.img} alt={store.title} />
      </div>
      <div className={classes.details}>
        <div className={classes.row}>
          <i className="material-icons">store</i>
          <span>{store.title}</span>
        </div>
        <div className={classes.row}>
          <i className="material-icons">pin_drop</i>
          <span>
            {store.city.city_name_ar} , {store.address}
          </span>
        </div>
      </div>
      <div className={classes.button}>
        <a href={store.map} target="_blank" rel="noreferrer">
          <i className="material-icons">pin_drop</i>
          Map
        </a>

        <a href={`tel:+2${store.phone}`}>
          <i className="material-icons">phone_enabled</i>Call
        </a>
      </div>
    </div>
  );
};

export default StoreCard;
