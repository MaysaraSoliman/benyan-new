"use client";

import styled from "styled-components";

export const StyledMainFooter = styled.div`
  padding: 0 0 60px;
  color: var(--color-text-primary);
  .logo {
    text-align: center;
    margin-bottom: 30px;
    padding: 30px 0;
  }

  h5 {
    color: var(--color-text-primary) !important;
    margin-bottom: 20px !important;
  }

  .lists {
    .list {
      margin-bottom: 15px;
    }
    .list-item {
      margin-bottom: 15px;
      color: var(--color-text-secondary);
    }
  }

  .social-links {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin: 30px 0;
  }

  .copy-rights {
    text-align: center;
  }

  @media (max-width: 560px) {
    .social-links {
      justify-content: center;
    }
  }
`;
