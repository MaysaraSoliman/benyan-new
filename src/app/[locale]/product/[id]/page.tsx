import SingleProduct from "@/components/SingleProduct/SingleProduct";
import MainSlider from "@/components/Slider/MainSlider";
import React from "react";

const SingleProductPage = () => {
  return (
    <>
      <SingleProduct />
      <MainSlider
        title={"You may also like"}
        link="http://localhost:4000/products?category.en=Platinum Jewellery&_limit=6&&id_ne=1847"
      />
      <MainSlider
        title={"BEST SELLERS"}
        link="http://localhost:4000/products?_limit=6"
      />
    </>
  );
};

export default SingleProductPage;
