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
};

export const StoreContext = createContext<StoreContextType>({
  cart: [],
  favorites: [],
  addToCart: () => {},
  addToFavorites: () => {}
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const addToFavorites = (product: Product) => {
    // Přidáme jen, pokud produkt ještě není v oblíbených
    if (!favorites.find(item => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <StoreContext.Provider value={{ cart, favorites, addToCart, addToFavorites }}>
      {children}
    </StoreContext.Provider>
  );
};
