import React from "react";
import classes from "./Stores.module.scss";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <span>You can Find M&G on</span>
      <div className={classes["banner-images"]}>
        <a href="https://elmanar.com.eg/" target="_blank" rel="noreferrer">
          <img
            src="https://elmanar.com.eg/media/logo/stores/3/elmana-en-logo.png"
            alt="ُElmanar"
          />
        </a>
        <a
          href="https://www.amazon.eg/-/en/s?i=merchant-items&me=A1CFIWBBAX09IT&rh=p_4%3AM%26G&dc&language=en&marketplaceID=ARBP9OOSHTCHU&qid=1677711826&ref=sr_nr_p_4_10&ds=v1%3AFVo2BZFSCv2Nn7yUNdEqJdyebpBNy%2Fxi2SpAPSkd4Xw"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.versionmuseum.com/images/websites/amazon-website/amazon-website%5E2000%5Eamazon-logo-900.png"
            alt="Amazon"
          />
        </a>
        <a
          href="https://www.noon.com/egypt-en/p-27209/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.marefa.org/w/images/d/d5/Noon_log.jpeg"
            alt="Noon"
          />
        </a>
        <a
          href="https://www.jumia.com.eg/elmanar-marketplace/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://almaghribialyaoum.com/wp-content/uploads/2022/03/Jumia-Emploi-Recrutement-1.png"
            alt="Jumia"
          />
        </a>
        <a
          href="https://kenzz.com/category/KLVHBCRJWRSM"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://assets.kenzz.com/metadata/logo-kenzz.png"
            alt="Kenz"
          />
        </a>
        <a
          href="https://www.luluhypermarket.com/en-eg/search/?text=M%26G%3Arelevance"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/logo-lulu.png?context=bWFzdGVyfGltYWdlc3wyNzM0N3xpbWFnZS9wbmd8YUdGa0wyZ3lZUzg1TlRVNE16VTRNVFl6TkRnMkwyeHZaMjh0YkhWc2RTNXdibWN8NTVkYWRjNzE2NDRhNDc4YTg1NGQ5M2U5ZTZmYzgzMjBiMTA0ZDU1MDMyYTcwNWExMTA2MTA0MmZiYWI3MGNhZg"
            alt="lulu"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
