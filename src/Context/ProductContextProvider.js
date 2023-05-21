import React from "react";

//Api
import { products } from "../Services/api";

export const productsContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  return <productsContext.Provider value={products}>{children}</productsContext.Provider>;
};

export default ProductContextProvider;
