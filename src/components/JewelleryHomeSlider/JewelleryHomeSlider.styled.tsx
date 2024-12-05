"use client";

import styled from "styled-components";
interface StyledSliderProps {
  locale: string; // Add locale to control styles
}

export const StyledJewellerySlider = styled.section<StyledSliderProps>`
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
    ${(props) =>
      props.locale === "ar" // Check if the locale is Arabic
        ? "left: 5%;"
        : "right: 12%; left: auto;"}
  }

  /* Handling .slick-next position based on locale */
  .slick-next {
    ${(props) =>
      props.locale === "ar" // Check if the locale is Arabic
        ? "left: 12%; right: auto;"
        : "right: 5%;"}
  }

  /* .slick-prev {
    right: 10%;
    left: auto;
  }
  .slick-next {
    right: 5%;
  } */

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

  /* Large screens */
  @media (max-width: 1200px) {
    .slick-prev {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 5%;"
          : "right: 12%; left: auto;"}
    }
    .slick-next {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 12%; right: auto;"
          : "right: 5%;"}
    }
  }

  /* Medium screens */
  @media (max-width: 976px) {
    .slick-prev {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 10%;"
          : "right: 18%;"}
    }
    .slick-next {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 18%; right: auto;"
          : "right: 10%;"}
    }
  }

  /* Small screens */
  @media (max-width: 768px) {
    .slick-prev {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 10%;"
          : "right: 18%;"}
    }
    .slick-next {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 18%; right: auto;"
          : "right: 8%;"}
    }
  }

  /* Extra small screens */
  @media (max-width: 560px) {
    .slick-prev {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 7%;"
          : "right: 18%;"}
    }
    .slick-next {
      ${(props) =>
        props.locale === "ar" // Check if the locale is Arabic
          ? "left: 20%; right: auto;"
          : "right: 3%;"}
    }
  }
`;
