// src/StoreContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export type Product = {
  id: number;
  name: string;
  price: number;
};

type StoreContextType = {
  cart: Product[];
  favorites: Product[];
  addToCart: (product: Product) => void;
  addToFavorites: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
};

export const StoreContext = createContext<StoreContextType>({
  cart: [],
  favorites: [],
  addToCart: () => {},
  addToFavorites: () => {},
  removeFromCart: () => {},
  removeFromFavorites: () => {}
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const addToFavorites = (product: Product) => {
    if (!favorites.find(item => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  // Odebere první nalezenou instanci položky v košíku
  const removeFromCart = (product: Product) => {
    let removed = false;
    setCart(cart.filter(item => {
      if (!removed && item.id === product.id) {
        removed = true;
        return false;
      }
      return true;
    }));
  };

  // Odebere položku z oblíbených (protože tam je vždy jen jedna instance)
  const removeFromFavorites = (product: Product) => {
    setFavorites(favorites.filter(item => item.id !== product.id));
  };

  return (
    <StoreContext.Provider
      value={{ cart, favorites, addToCart, addToFavorites, removeFromCart, removeFromFavorites }}
    >
      {children}
    </StoreContext.Provider>
  );
};
