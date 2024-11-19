import React from "react";
import { StyledMainFooter } from "./MainFooter.styled";
import Image from "next/image";
import LogoImage from "../../../public/images/logo/logo_white (1).png";
import Title from "antd/es/typography/Title";
import { Col, Divider, Row } from "antd";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <StyledMainFooter>
      <div className="logo">
        <Image src={LogoImage} alt="logo" />
      </div>
      <Row gutter={28} className="lists">
        <Col xs={12} sm={12} lg={6} className="list">
          <Title level={5}>Privacy & Legal</Title>
          <li className="list-item">Cookies Settings</li>
          <li className="list-item">Privacy center</li>
          <li className="list-item">Terms of use</li>
          <li className="list-item">Terms and conditions</li>
        </Col>
        <Col xs={12} sm={12} lg={6} className="list">
          <Title level={5}>Privacy & Legal</Title>
          <li className="list-item">Cookies Settings</li>
          <li className="list-item">Privacy center</li>
          <li className="list-item">Terms of use</li>
          <li className="list-item">Terms and conditions</li>
        </Col>
        <Col xs={12} sm={12} lg={6} className="list">
          <Title level={5}>Privacy & Legal</Title>
          <li className="list-item">Cookies Settings</li>
          <li className="list-item">Privacy center</li>
          <li className="list-item">Terms of use</li>
          <li className="list-item">Terms and conditions</li>
        </Col>
        <Col xs={12} sm={12} lg={6} className="list">
          <Title level={5}>Privacy & Legal</Title>
          <li className="list-item">Cookies Settings</li>
          <li className="list-item">Privacy center</li>
          <li className="list-item">Terms of use</li>
          <li className="list-item">Terms and conditions</li>
        </Col>
      </Row>
      <div className="social-links">
        <AiOutlineInstagram className="social-link-icon" />
        <FaFacebookF className="social-link-icon" />
        <FaYoutube className="social-link-icon" />
        <FaLinkedin className="social-link-icon" />
        <FaXTwitter className="social-link-icon" />
      </div>
      <Divider />
      <div className="copy-rights">
        Copyright © 2024 All Rights Reserved. | Made By Expanda.
      </div>
    </StyledMainFooter>
  );
};

export default MainFooter;
