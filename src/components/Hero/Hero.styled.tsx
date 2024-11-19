"use client";

import styled from "styled-components";

export const StyledHeroSection = styled.section`
  background-image: url("/images/hero-section/bg-image-1.jpg");
  width: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;

  .hero-container {
    height: calc(100vh + 200px);
    display: flex;
    align-items: center;

    .card-image {
      width: 100%;
      height: calc(100vh + 300px);
    }

    .info {
      margin-top: 80px;
      z-index: 2;
      h1,
      .paragraph,
      a {
        color: var(--color-text-primary) !important;
      }
      a {
        font-size: 16px;
        padding: 10px 0;
        text-transform: uppercase;
        font-weight: 600;
      }
      a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
      }
    }
  }
`;
