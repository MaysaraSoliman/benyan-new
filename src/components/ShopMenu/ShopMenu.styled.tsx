"use client";

import styled from "styled-components";

export const StyledShopMenu = styled.section`
  .head-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 45px;
    .head-info {
      margin: 5px 10px;
    }

    .shop-drawer-menu {
    }
  }
  .shop-products-container {
    .product-box {
      /* background-color: var(--color-fourthly); */
      padding: 15px;
      background-color: #fafafa;
      .image-box {
        img {
          /* width: 100%; */
          /* max-width: 100%; */
          width: 100%;
          height: auto;
        }
      }
      .product-info {
        display: flex;
        flex-direction: column;
        gap: 3px;
        h3 {
          margin-bottom: 12px;
        }
        p {
          color: var(--color-text-black);
        }
      }
    }
    .show-more-btn {
      max-width: 260px;
      margin: 30px auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 10px;
    }
    .no-more-products {
    }
  }
`;
