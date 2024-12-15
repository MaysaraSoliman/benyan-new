import HeroVideo from "@/components/HeroVideo/HeroVideo";
import ShopMenu from "@/components/ShopMenu/ShopMenu";
import { categories } from "@/components/ShopMenu/ShopMenu.constant";
import React from "react";

const NecklacesPage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroVideo videosrc="https://media.bulgari.com/video/upload/f_auto,q_auto/v1733236983/homepage/xmas/24/1-hp-xmas-mobile_tjw0y4.mp4" />
      <ShopMenu
        subTitle="Jewellery"
        title="Necklaces"
        url="http://localhost:4000/products?material.en=Necklace"
        categories={categories}
      />
    </>
  );
};

export default NecklacesPage;
