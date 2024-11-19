import React from "react";
import { StyledHeroVideo } from "./HeroVideo.styled";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import { useTranslations } from "next-intl";

const HeroVideo = () => {
  const t = useTranslations();
  return (
    <StyledHeroVideo>
      <div className="overlay-black"></div>
      <div className=" video-container">
        <video preload="true" autoPlay loop muted playsInline>
          <source
            src="https://media.bulgari.com/video/upload/f_auto,q_auto/v1726652666/hp/tubogas-bzero1/bzero1-1920x1080_gzmwqa.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="info">
            <Title level={1}>{t("HomePage.hero.title")}</Title>
            <Paragraph className="paragraph">
              {t("HomePage.hero.paragraph")}
            </Paragraph>
            <a href="#"> {t("HomePage.hero.link")}</a>
          </div>
        </div>
      </div>
    </StyledHeroVideo>
  );
};

export default HeroVideo;
