"use client";
import { Button } from "antd";
import { useShoppingCart } from "../../context/cartContext/shoppingCartContext";
// import { useCartDrawer } from "../../context/cartContext/cartDrawerContext";
import Product from "@/types/cartTypes";
import { useCartDrawer } from "@/context/cartContext/cartDrawerContext";

export default function AddToCartBtn({
  product,
  currentCartInputValue = 1,
}: {
  product: Product;
  currentCartInputValue: number;
}) {
  const { cart, addItemToCart, updateCartItemQuantity } = useShoppingCart(); // useShoppingCartContext
  const { setIsCartOpen, isCartOpen } = useCartDrawer();
  console.log("setIsCartOpen =>", isCartOpen);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItem) {
      const newQuantity =
        cart[existingItemIndex].quantity + currentCartInputValue;
      updateCartItemQuantity(product.id, newQuantity);
      setIsCartOpen(true);
    } else {
      addItemToCart(product, currentCartInputValue);
      setIsCartOpen(true);
    }
    console.log("cart => ", cart);
  };

  return (
    <div>
      <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
    </div>
  );
}
