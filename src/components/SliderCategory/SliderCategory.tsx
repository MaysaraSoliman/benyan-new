"use client";
import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { StyledSlider } from "./SliderCategory.styled";
import { useLocale } from "next-intl";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface BestSellerItem {
  image: string;
}

interface MainSliderProps {
  title: string;
  data: BestSellerItem[];
}

const SliderCategory: React.FC<MainSliderProps> = ({ title, data }) => {
  const locale = useLocale();
  console.log("locale", locale);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledSlider locale={locale}>
      <div className="container">
        <div className="main-title">
          <Title level={2}>{title}</Title>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index}>
                <div className="slider-box">
                  <div className="image-box">
                    <Image
                      className="image"
                      src={item.image}
                      alt={`jewellery image ${index + 1}`}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
                    />
                  </div>
                  <Title className="item-title" level={3}>
                    Example {index + 1}
                  </Title>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </StyledSlider>
  );
};

export default SliderCategory;
