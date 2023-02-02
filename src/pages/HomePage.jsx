import React from "react";
import AboutSection from "../Components/Home/About/AboutSection";
import Header from "../Components/Home/Header/Header";
import ProductsCat from "../Components/Home/ProductsCat/ProductsCat";
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProductsCat />
      </main>
    </>
  );
};

export default HomePage;
