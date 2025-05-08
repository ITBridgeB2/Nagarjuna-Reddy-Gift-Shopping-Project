// CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (category, name, price) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === name && item.category === category);
      if (existing) {
        return prev.map(item =>
          item.name === name && item.category === category
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { category, name, price, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
