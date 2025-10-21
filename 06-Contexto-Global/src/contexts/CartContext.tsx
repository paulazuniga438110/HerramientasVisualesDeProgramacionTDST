import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos la interfaz para un ítem del carrito
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. Definimos la interfaz del contexto
interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

// 3. Creamos el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. Creamos el proveedor del contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setCart(prevCart => {
      const existing = prevCart.find(i => i.id === item.id);
      if (existing) {
        return prevCart.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Hook personalizado
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCartContext debe usarse dentro de CartProvider');
  return context;
};