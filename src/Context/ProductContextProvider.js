import React, { useEffect, useState } from "react";

//Api
import { products } from "../Services/api";

export const productsContext = React.createContext();

const ProductContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      await setItems(products);
    };

    fetchApi();
  }, []);
  return <productsContext.Provider value={items}>{children}</productsContext.Provider>;
};

export default ProductContextProvider;
