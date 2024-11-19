import React from "react";
import { StyledHeroSection } from "./Hero.styled";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();
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
