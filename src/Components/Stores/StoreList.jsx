import React from "react";
import StoreCard from "./StoreCard";
import classes from "./Stores.module.scss";

const StoreList = ({ stores }) => {
  return (
    <div dir="rtl" className={classes["stores-container"]}>
      {stores &&
        stores.length > 0 &&
        stores.map((store) => <StoreCard key={store._id} store={store} />)}
    </div>
  );
};

export default StoreList;
