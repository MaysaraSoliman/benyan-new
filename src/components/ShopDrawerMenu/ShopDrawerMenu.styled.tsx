"use client";

import styled from "styled-components";

export const StyledShopDrawerMenu = styled.div`
  .menu-btn {
    background-color: transparent;
    color: #000;
    padding: 0;
    margin: 5px 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .ant-collapse {
    border: none;
  }

  .ant-collapse-item {
    border: none !important;
  }
  .ant-collapse-item > .ant-collapse-header {
    flex-direction: row-reverse;
    background-color: white;
  }
`;
