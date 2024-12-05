"use client";

import styled from "styled-components";

interface StyledSliderProps {
  locale: string; // Add locale to control styles
}

export const StyledSlider = styled.section<StyledSliderProps>`
  padding: 80px 0;

  .main-title {
    padding-bottom: 60px;
  }

  .slider-container,
  .slick-slider {
    position: unset;
  }

  .slick-dots {
    left: 0;
    bottom: -50px;
  }

  .slick-arrow {
    z-index: 111111111111;
    top: 30px; /* Corrected to single top value */
    width: 50px;
    height: 50px;
  }

  .slick-arrow::before {
    font-size: 50px;
    opacity: 1;
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

  .slick-prev::before {
    color: #34564e !important;
  }
  .slick-next::before {
    color: #34564e !important;
  }

  .slider-box {
    width: 95%;
    max-height: 100%;
    height: 450px;
    transition: height 0.3s ease;
    margin: 0 10px; /* Adjust the margin to set the gap */
    box-sizing: border-box; /* Ensure padding/margin does not affect width */

    .image-box {
      width: 100%;
      height: 75%;

      .image {
        width: 100%;
        height: 100%;
      }
    }
    .item-title {
      text-align: center;
      padding: 30px 0;
    }
    .product-info {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      h3 {
        padding: 10px 0;
      }
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
    .slider-box {
      height: 350px;
    }
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

// "use client";

// import styled from "styled-components";

// interface StyledSliderProps {
//   locale: string; // Add locale to control styles
// }

// export const StyledSlider = styled.section<StyledSliderProps>`
//   padding: 80px 0;

//   .main-title {
//     padding-bottom: 60px;
//   }

//   .slider-container,
//   .slick-slider {
//     position: unset;
//   }

//   .slick-dots {
//     left: 0;
//     bottom: -50px;
//   }

//   .slick-arrow {
//     z-index: 111111111111;
//     top: -54px;
//     width: 50px;
//     height: 50px;
//     top: 30px;
//   }

//   .slick-arrow::before {
//     font-size: 50px;
//     opacity: 1;
//   }

//   /* .slick-prev {
//     right: 10%;
//     left: auto;
//   } */
//   .slick-prev {
//     ${(props) =>
//       props.locale === "ar" // Check if the locale is Arabic
//         ? "left: 5%;"
//         : "right: 12%;"}
//   }

//   .slick-next {
//     ${(props) =>
//       props.locale === "ar" // Check if the locale is Arabic
//         ? "left: 12%;  right: auto;"
//         : "right: 5%;"}
//   }

//   /* .slick-next {
//     right: 5%;
//   } */

//   .slick-prev::before {
//     color: #34564e !important;
//   }
//   .slick-next::before {
//     color: #34564e !important;
//   }

//   .slider-box {
//     width: 95%;
//     max-height: 100%;
//     height: 450px;
//     transition: height 0.3s ease;
//     margin: 0 10px; /* Adjust the margin to set the gap */
//     box-sizing: border-box; /* Ensure padding/margin does not affect width */

//     .image-box {
//       width: 100%;
//       height: 80%;

//       .image {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .item-title {
//       text-align: center;
//       padding: 30px 0;
//     }
//     .product-info {
//       display: flex;
//       flex-direction: column;
//       align-items: baseline;
//       h3 {
//         padding: 10px 0;
//       }
//     }
//   }

//   @media (max-width: 1200px) {
//     /* .slick-prev {
//       right: 12%;
//     } */

//     .slick-prev {
//       ${(props) =>
//         props.locale === "ar" // Check if the locale is Arabic
//           ? "left: 5%;"
//           : "right: 12%;"}
//     }
//   }
//   @media (max-width: 976px) {
//     .slick-prev {
//       right: 18%;
//     }
//   }

//   @media (max-width: 560px) {
//     .slider-box {
//       height: 350px;
//     }
//   }
// `;

// // "use client";

// // import styled from "styled-components";

// // export const StyledSlider = styled.section`
// //   background: radial-gradient(
// //     80.5% 80.5% at 50% 45.25%,
// //     #efe7dc 0%,
// //     #efe7dc 53.59%,
// //     #dcc8af 100%,
// //     #d8c7b0 100%
// //   ) !important;
// //   padding: 80px 0;
// //   .slider-box {
// //     width: 100%;
// //     max-height: 100%;
// //     height: 500px;
// //     transition: height 0.3s ease;
// //     .image-box {
// //       width: 100%;
// //       height: 80%;
// //       .image {
// //         width: 100%;
// //         height: 100%;
// //       }
// //     }
// //     .item-title {
// //       text-align: center;
// //     }
// //   }
// // `;
