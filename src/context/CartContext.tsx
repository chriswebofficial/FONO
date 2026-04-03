/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string; 
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeItem: (id: string) => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQty = (id: string) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const totalPrice = cart.reduce(
    (acc, i) => acc + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};