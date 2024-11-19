"use client";

import styled from "styled-components";

export const StyledHeroVideo = styled.section`
  .video-container {
    height: 100vh;
    display: flex;
    align-items: center;
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .container {
      width: 100%;
      .info {
        /* max-width: 1200px;
      padding: 0 15px; */
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
  }
`;
