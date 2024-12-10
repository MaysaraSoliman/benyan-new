"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";

interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
// Define an interface for the props
interface CartDrawerProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartDrawerProvider: React.FC<CartDrawerProviderProps> = ({
  children,
}) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartDrawer = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
