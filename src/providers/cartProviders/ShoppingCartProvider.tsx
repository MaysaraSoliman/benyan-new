// ShoppingCartProvider.tsx
"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Product, { CartItem } from "../../types/cartTypes";
import {
  ShoppingCartContext,
  ShoppingCartContextType,
} from "../../context/cartContext/shoppingCartContext";

// Define an interface for the props
interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const updateCartAndLocalStorage = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addItemToCart = (item: Product, inputQuantity: number) => {
    const updatedCart = [...cart, { ...item, quantity: inputQuantity }];
    updateCartAndLocalStorage(updatedCart);
  };

  const removeItemFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    updateCartAndLocalStorage(updatedCart);
  };

  const updateCartItemQuantity = (itemId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCartAndLocalStorage(updatedCart);
  };

  const contextValue: ShoppingCartContextType = {
    cart,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
