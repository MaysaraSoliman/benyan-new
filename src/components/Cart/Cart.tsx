"use client";
import "./cart.css";
import { useShoppingCart } from "../../context/cartContext/shoppingCartContext";
import { Flex, Image, InputNumber, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "@/i18n/routing";

const { Text, Title } = Typography;

export default function Cart() {
  const { cart, updateCartItemQuantity, removeItemFromCart } =
    useShoppingCart();

  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const handleInputChange = (itemId: number, value: number | null) => {
    updateCartItemQuantity(itemId, Number(value)); // Assuming updateCartItemQuantity expects itemId and quantity as numbers
  };

  return (
    <div id="shoppingCartDrawer">
      <div>
        {cartItems.length <= 0 ? (
          <p className="cart_empty">Cart is empty</p>
        ) : (
          <div className="shoppingCartDrawr_container">
            {cartItems.map((item) => (
              <div className="item_container" key={item.id}>
                <div className="image_box">
                  <Image src={item.images[0]} alt="" />
                </div>
                <div className="item_info">
                  <Space direction="vertical" size="small">
                    <Link href={`/product/${item.id}`}>
                      <Title level={5}>{item.name.en}</Title>
                    </Link>
                    <Text>
                      {item.pricing_details.price}.00{" "}
                      {item.pricing_details.currency}
                    </Text>
                    <Flex align="center" justify="space-between" gap={10}>
                      <div className="cartNumber_input">
                        <div className="input_number">
                          <div onClick={(e) => e.stopPropagation()}>
                            <InputNumber
                              min={1}
                              value={item.quantity}
                              onChange={(value) =>
                                handleInputChange(item.id, value)
                              }
                              addonAfter={
                                <div className="inc_dec_btns">
                                  <PlusOutlined
                                    onClick={() => {
                                      updateCartItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      );
                                    }}
                                  />
                                  <MinusOutlined
                                    onClick={() => {
                                      if (item.quantity <= 1) {
                                        removeItemFromCart(item.id);
                                      } else {
                                        updateCartItemQuantity(
                                          item.id,
                                          item.quantity - 1
                                        );
                                      }
                                    }}
                                  />
                                </div>
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="trash"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DeleteOutlined
                          onClick={() => {
                            removeItemFromCart(item.id);
                          }}
                        />
                      </div>
                    </Flex>
                    <Flex>
                      <Text>
                        Total: {item.pricing_details.price * item.quantity}.00{" "}
                        {item.pricing_details.currency}
                      </Text>
                    </Flex>
                  </Space>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
