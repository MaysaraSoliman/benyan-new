"use client";
import { useParams } from "next/navigation";
import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import ShopMenu from "../ShopMenu/ShopMenu";
import { categories, materials } from "../ShopMenu/ShopMenu.constant";

const BrandComponent = () => {
  const { id } = useParams();

  // Safely handle the id to ensure it's a string
  const brandId = Array.isArray(id) ? id[0] : id;

  console.log("brandId ===>", brandId);

  const title = brandId;
  const url = `http://localhost:4000/products?brand.en=${brandId}`;

  return (
    <>
      <HeroVideo videosrc="https://media.bulgari.com/video/upload/f_auto,q_auto/v1733236983/homepage/xmas/24/1-hp-xmas-mobile_tjw0y4.mp4" />
      <ShopMenu
        subTitle="Jewellery"
        title={title}
        url={url}
        categories={categories}
        materials={materials}
      />
    </>
  );
};

export default BrandComponent;
