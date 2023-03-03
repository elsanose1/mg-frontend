import React from "react";
import { Link } from "react-router-dom";
import classes from "./NewsLetters.module.scss";

const NewsLetters = () => {
  return (
    <section className={classes.newsletters}>
      <h2 className={`heading-secondray`}>newsletter</h2>
      <div className={classes.details}>
        <p>Subscribe to get all new offer and gifts for M&G products</p>
        <div className={classes.btn}>
          <Link to="/register/new">Subscribe</Link>
        </div>
      </div>
    </section>
  );
};

export default NewsLetters;
