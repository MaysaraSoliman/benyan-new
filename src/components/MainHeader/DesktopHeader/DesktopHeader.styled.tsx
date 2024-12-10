"use client";

import styled from "styled-components";

export const StyledDesktopHeader = styled.div`
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    .icon {
      font-size: 22px;
      color: var(--color-icons-primary);
      cursor: pointer;
    }
    .icons-col {
      .icons {
        display: flex;
        gap: 15px;
      }
    }
    .logo-col {
      display: flex;
    }
    .drawer-col {
      display: flex;
      button {
        &:hover {
          background-color: transparent;
        }
      }
    }
  }
  .ant-btn {
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
`;
