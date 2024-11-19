import React from "react";
import { StyledMainHeader } from "./MainHeader.stlyled";
import DesktopHeader from "./DesktopHeader/DesktopHeader";

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <DesktopHeader />
    </StyledMainHeader>
  );
};

export default MainHeader;
