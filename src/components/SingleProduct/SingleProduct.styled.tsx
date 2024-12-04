"use client";

import styled from "styled-components";

export const StyledSingleProduct = styled.section`
  background-color: #e7e7e7;
  padding-top: 100px;
  /* .product-details {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;

    .image-box {
      flex: 1;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    .info-box {
      flex: 1;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      h2 {
        margin-bottom: 15px;
        font-size: 2rem;
        color: #333;
      }

      p {
        margin-bottom: 10px;
        font-size: 1.2rem;
        color: #555;
      }

      strong {
        color: #333;
      }
    }
  } */

  .product-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .gallery-images-container {
    flex: 2;
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
    .main-image {
      width: 100%;

      img {
        width: 100%;
        height: auto;
      }
    }
    .thumbnail-images {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .thumbinal {
        border: 3px solid red;
      }

      .active {
        border: 3px solid #000;
      }
    }
  }

  .product-info {
    flex: 1;
  }
`;
