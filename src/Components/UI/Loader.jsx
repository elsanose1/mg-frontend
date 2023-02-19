import React from "react";
import classes from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={classes.center}>
      <div class={classes["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
