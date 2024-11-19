"use client";
import React from "react";
import { StyledJewellerySlider } from "./JewelleryHomeSlider.styled";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import JewelleryImage from "/public/images/Jewellery-slider/image-1.png";
import JewelleryImage2 from "/public/images/Jewellery-slider/image-2.png";
import JewelleryImage3 from "/public/images/Jewellery-slider/image-3.png";
import JewelleryImage4 from "/public/images/Jewellery-slider/image-4.png";
import JewelleryImage5 from "/public/images/Jewellery-slider/image-5.png";
import Title from "antd/es/typography/Title";

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const JewelleryHomeSlider = () => {
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
    <StyledJewellerySlider>
      <div className="slider-container">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </StyledJewellerySlider>
  );
};

export default JewelleryHomeSlider;
