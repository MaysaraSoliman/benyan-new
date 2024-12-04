"use client";
import React from "react";
import { StyledHeroSection } from "./Hero.styled";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { useTranslations } from "next-intl";
// import { useEffect, useState } from "react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

const Hero = () => {
  // const [data, setData] = useState<User[]>([]);
  const t = useTranslations();

  // useEffect(() => {
  //   fetch("http://localhost:4000/products")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       console.log("Fetched data:", json);
  //     });
  // }, []);

  return (
    <StyledHeroSection>
      <div className="overlay-black"></div>
      <div className=" container  hero-container">
        <div className="info">
          <Title level={1}>{t("HomePage.hero.title")}</Title>
          <Paragraph className="paragraph">
            {t("HomePage.hero.paragraph")}
          </Paragraph>
          <a href="#"> {t("HomePage.hero.link")}</a>
        </div>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
