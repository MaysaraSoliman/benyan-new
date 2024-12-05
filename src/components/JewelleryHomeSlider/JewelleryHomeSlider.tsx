"use client";
import React, { useEffect, useState } from "react";
import { StyledJewellerySlider } from "./JewelleryHomeSlider.styled";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import JewelleryImage from "/public/images/Jewellery-slider/image-1.png";
// import JewelleryImage2 from "/public/images/Jewellery-slider/image-2.png";
// import JewelleryImage3 from "/public/images/Jewellery-slider/image-3.png";
// import JewelleryImage4 from "/public/images/Jewellery-slider/image-4.png";
// import JewelleryImage5 from "/public/images/Jewellery-slider/image-5.png";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

type Product = {
  id: number;
  name: { en: string; ar: string };
  branch_name: string;
  pricing_details: {
    price: number;
    currency: string;
  };
  images: string[];
};

interface JewelleryHomeSliderProps {
  link: string;
}

const JewelleryHomeSlider = ({ link }: JewelleryHomeSliderProps) => {
  const locale = useLocale();
  console.log("locale", locale);
  const [products, setProducts] = useState<Product[]>([]);
  // const link = `http://localhost:4000/products?category.en=Platinum Jewellery`;

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(link);
        const data = await response.json();
        console.log("category data =>", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsByCategory();
  }, [link]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }; // Corrected: Removed stray semicolon here

  return (
    <StyledJewellerySlider locale={locale}>
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="slider-box">
                <Image
                  className="jewellery-image"
                  src={product.images[0]} // Assuming `images` is an array
                  alt={product.name.en}
                  width={400}
                  height={400}
                />
                {/* <Title className="item-title" level={3}>
                  {product.name.en}
                </Title>
                <p>
                  {product.pricing_details.currency}{" "}
                  {product.pricing_details.price}
                </p> */}
              </div>
            </Link>
          ))}
        </Slider>
        {/* <Slider {...settings}>
          <div>
            <div className="slider-box">
              <Image
                className="jewellery-image"
                src={JewelleryImage}
                alt="jewellery image"
              />
              <Title className="item-title" level={3}>
                Example 1
              </Title>
            </div>
          </div>
          <div>
            <div className="slider-box">
              <Image
                className="jewellery-image"
                src={JewelleryImage2}
                alt="jewellery image"
              />
              <Title className="item-title" level={3}>
                Example 2
              </Title>
            </div>
          </div>
          <div>
            <div className="slider-box">
              <Image
                className="jewellery-image"
                src={JewelleryImage3}
                alt="jewellery image"
              />
              <Title className="item-title" level={3}>
                Example 3
              </Title>
            </div>
          </div>
          <div>
            <div className="slider-box">
              <Image
                className="jewellery-image"
                src={JewelleryImage4}
                alt="jewellery image"
              />
              <Title className="item-title" level={3}>
                Example 4
              </Title>
            </div>
          </div>
          <div>
            <div className="slider-box">
              <Image
                className="jewellery-image"
                src={JewelleryImage5}
                alt="jewellery image"
              />
              <Title className="item-title" level={3}>
                Example 5
              </Title>
            </div>
          </div>
        </Slider> */}
      </div>
    </StyledJewellerySlider>
  );
};

export default JewelleryHomeSlider;
