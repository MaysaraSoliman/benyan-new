import HeroVideo from "@/components/HeroVideo/HeroVideo";
import ShopMenu from "@/components/ShopMenu/ShopMenu";
import React from "react";

const ShopPage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroVideo videosrc="https://media.bulgari.com/video/upload/f_auto,q_auto/v1733236983/homepage/xmas/24/1-hp-xmas-mobile_tjw0y4.mp4" />
      <ShopMenu />
    </>
  );
};

export default ShopPage;
