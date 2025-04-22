import React, { createContext, useState } from "react";
import data from "../component/Data";

const CartPageContext = createContext();

const CartProvider = ({ children }) => {
  const [product, setProduct] = useState(data);

  return (
    <CartPageContext.Provider value={{ product, setProduct }}>
      {children}
    </CartPageContext.Provider>
  );
};

export { CartProvider, CartPageContext };
