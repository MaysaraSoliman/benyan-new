"use client";
import { Link } from "@/i18n/routing";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={showDrawer}>
        <RxHamburgerMenu className="icon" />
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Link href={"/shop"}>Shop</Link>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
