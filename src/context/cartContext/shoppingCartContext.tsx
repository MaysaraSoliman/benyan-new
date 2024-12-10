"use client";
import { createContext, useContext } from "react";
import Product, { CartItem } from "../../types/cartTypes";

export interface ShoppingCartContextType {
  cart: CartItem[];
  addItemToCart: (item: Product, inputQuantity: number) => void;
  removeItemFromCart: (itemId: number) => void;
  updateCartItemQuantity: (itemId: number, newQuantity: number) => void;
}

export const ShoppingCartContext = createContext<
  ShoppingCartContextType | undefined
>(undefined);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
