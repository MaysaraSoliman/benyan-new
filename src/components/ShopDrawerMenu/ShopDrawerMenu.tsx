"use client";
import React, { useState } from "react";
import { StyledShopDrawerMenu } from "./ShopDrawerMenu.styled";
import { Button, Drawer } from "antd";

const ShopDrawerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <StyledShopDrawerMenu className="shop-drawer-menu">
      <Button className="menu-btn" type="primary" onClick={showDrawer}>
        Filters & Sorting
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </StyledShopDrawerMenu>
  );
};

export default ShopDrawerMenu;
