"use client";

import styled from "styled-components";

export const StyledJewellerySlider = styled.section`
  background: radial-gradient(
    80.5% 80.5% at 50% 45.25%,
    #efe7dc 0%,
    #efe7dc 53.59%,
    #dcc8af 100%,
    #d8c7b0 100%
  ) !important;
  padding: 80px 0;
  .slick-list {
    /* margin: 80px 0; */
  }

  .slick-arrow {
    z-index: 111111111111;
    top: -30px;
    width: 50px;
    height: 50px;
  }

  .slick-arrow::before {
    font-size: 50px;
  }

  .slick-prev {
    right: 10%;
    left: auto;
  }
  .slick-next {
    right: 5%;
  }

  .slick-prev::before {
    color: #34564e !important;
  }
  .slick-next::before {
    color: #34564e !important;
  }

  .slider-box {
    width: 100%;
    max-height: 100%;
    height: 600px;
    transition: height 0.3s ease;
    .jewellery-image {
      width: 60%;
      height: 45%;
      transition: 0.5s;
      margin: auto;
    }
    .item-title {
      display: none;
    }
  }

  .slick-dots {
    left: 0;
  }

  .slick-center {
    .jewellery-image {
      width: 100%;
      height: 90%;
      transition: 0.5s;
    }

    .item-title {
      text-align: center;
      display: block !important;
    }
  }

  @media (max-width: 1200px) {
    .slick-prev {
      right: 12%;
    }
  }

  @media (max-width: 976px) {
    .slick-prev {
      right: 15% !important;
    }

    .slider-box {
      height: 450px;
    }
  }
  /* @media (max-width: 976px) {
    .slick-prev {
      right: 13%;
    }
  } */
  @media (max-width: 776px) {
    .slick-prev {
      right: 18% !important;
    }
    .slider-box {
      height: 400px;
    }
  }

  @media (max-width: 1200px) {
    .slick-prev {
      right: 12%;
    }
  }
`;
