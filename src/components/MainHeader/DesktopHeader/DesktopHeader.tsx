"use client";
import React from "react";
import { StyledDesktopHeader } from "./DesktopHeader.styled";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
import LogoImage from "../../../../public/images/logo/logo_white (1).png";
// import { RxHamburgerMenu } from "react-icons/rx";
import MenuDrawer from "./MenuDrawer/MenuDrawer";
import { Link } from "@/i18n/routing";
import { Badge, Drawer, Flex } from "antd";
import Title from "antd/es/typography/Title";
import Cart from "@/components/Cart/Cart";
import { useShoppingCart } from "@/context/cartContext/shoppingCartContext";
import { useCartDrawer } from "@/context/cartContext/cartDrawerContext";

const DesktopHeader = () => {
  const { cart } = useShoppingCart();
  const { isCartOpen, setIsCartOpen } = useCartDrawer();

  const openCartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <StyledDesktopHeader>
      <div className="header-container">
        <div className="icons-col">
          <div className="icons">
            <Badge count={cart.length}>
              <IoCartOutline onClick={openCartDrawer} className="icon" />
              <Drawer
                className="shopping_cart"
                title="SHOPPING CART"
                onClose={openCartDrawer}
                open={isCartOpen}
                footer={
                  <Flex align="center" justify="space-between">
                    <div>
                      <Title level={5}>Subtotal:</Title>
                    </div>
                    <div>
                      <Title level={5}>
                        {" "}
                        {cart.reduce(
                          (accumulator, item) =>
                            accumulator +
                            item.pricing_details.price * item.quantity,
                          0
                        )}
                        .00 {cart[0]?.pricing_details.currency || "SAR"}
                      </Title>
                    </div>
                  </Flex>
                }
              >
                <Cart />
              </Drawer>
            </Badge>

            <GoPerson className="icon" />
          </div>
        </div>
        <Link href={"/"} className="logo-col">
          <Image src={LogoImage} alt="logo image" />
        </Link>
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
