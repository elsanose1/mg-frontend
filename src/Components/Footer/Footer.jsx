import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <h1>Useful Links</h1>
        <div className={classes.details}>
          <Link to="/">Home</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/products">Products</Link>
          <Link to="#">Contact Us</Link>
          <Link to="/register/new">NewsLetter</Link>
        </div>
      </div>
      <div className={classes.column}>
        <h1>Find Us On</h1>
        <div className={classes.links}>
          <a
            target="_blank"
            href="https://www.amazon.eg/-/en/s?i=merchant-items&me=A1CFIWBBAX09IT&rh=p_4%3AM%26G&dc&language=en&marketplaceID=ARBP9OOSHTCHU&qid=1677711826&ref=sr_nr_p_4_10&ds=v1%3AFVo2BZFSCv2Nn7yUNdEqJdyebpBNy%2Fxi2SpAPSkd4Xw"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
              alt="Amazon"
            />
          </a>
          <a
            target="_blank"
            href="https://www.noon.com/egypt-en/p-27209/"
            rel="noreferrer"
          >
            <img
              src="https://i0.wp.com/www.elmin7a.com/wp-content/uploads/2021/08/noon-egypt-jobs-customer-service-agent.png"
              alt="noon"
            />
          </a>
          <a target="_blank" href="https://elmanar.com.eg/" rel="noreferrer">
            <img
              src="data:image/png;base64,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"
              alt="elmanar"
            />
          </a>
          <a
            target="_blank"
            href="https://www.jumia.com.eg/elmanar-marketplace/"
            rel="noreferrer"
          >
            <img
              src="https://dl.memuplay.com/new_market/img/com.jumia.android.icon.2022-11-09-09-51-49.png"
              alt="jumia"
            />
          </a>
          <a
            target="_blank"
            href="https://kenzz.com/category/KLVHBCRJWRSM"
            rel="noreferrer"
          >
            <img
              src="https://assets.kenzz.com/metadata/logo-kenzz.png"
              alt="kenzz"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
