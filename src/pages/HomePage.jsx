import React from "react";
import Footer from "../Components/Footer/Footer";
import AboutSection from "../Components/Home/About/AboutSection";
import Header from "../Components/Home/Header/Header";
import NewsLetters from "../Components/Home/NewsLetters/NewsLetters";
import ProductsCat from "../Components/Home/ProductsCat/ProductsCat";
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProductsCat />
        <NewsLetters />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
