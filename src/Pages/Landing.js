import React from "react";

//components
import HeadSlider from "../components/header/HeadSlider";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";
import Team from "../components/Team/Team";

function Landing() {
  return (
    <div>
      <HeadSlider />
      <Products />
      <Team />
      <Footer />
    </div>
  );
}

export default Landing;
