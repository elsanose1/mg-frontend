import React from "react";
import classes from "./AboutSection.module.scss";
import aboutImg from "./about.jpg";

const AboutSection = () => {
  return (
    <section className={classes.about}>
      <h2 className={`heading-secondray`}>About M&G</h2>
      <div className={classes["flex-box"]}>
        <div className={classes.details}>
          M&G is a “Creative Corporation” which belongs to the creative industry
          rather than a traditional manufacturing corporation. From made in
          China to create in China, we devote ourselves to making the creativity
          become our core competency and merging the “Creative Forces” into
          every aspect of M&G, which include product research, marketing
          innovation, operation, manufacturing technology and so on. M&G becomes
          the leading brand in the stationary field due to the unique
          competitive advantages. M&G always has new
        </div>
        <div className={classes.pics}>
          <img src={aboutImg} alt="M&G" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
