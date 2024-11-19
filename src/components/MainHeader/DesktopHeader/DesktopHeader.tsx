import React from "react";
import { StyledDesktopHeader } from "./DesktopHeader.styled";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
import LogoImage from "../../../../public/images/logo/logo_white (1).png";
// import { RxHamburgerMenu } from "react-icons/rx";
import MenuDrawer from "./MenuDrawer/MenuDrawer";

const DesktopHeader = () => {
  return (
    <StyledDesktopHeader>
      <div className="header-container">
        <div className="icons-col">
          <div className="icons">
            <IoCartOutline className="icon" />
            <GoPerson className="icon" />
          </div>
        </div>
        <div className="logo-col">
          <Image src={LogoImage} alt="logo image" />
        </div>
        <div className="drawer-col">
          {/* <RxHamburgerMenu className="icon" />
           */}
          <MenuDrawer />
        </div>
      </div>
    </StyledDesktopHeader>
  );
};

export default DesktopHeader;
