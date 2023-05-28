import React, { useContext } from "react";

//Context
import { productsContext } from "../../Context/ProductContextProvider";
import { FilterContext } from "../../Context/FilterContextProvider";

//Components
import Sidebar from "./sidebar/Sidebar";
import Products from "./Products";

//Helper
import { searchFilter } from "../helper/functions";

const Content = () => {
  const products = useContext(productsContext);
  const { state } = useContext(FilterContext);
  const filteredProducts = searchFilter(state, products);
  // console.log(filteredProducts);

  return (
    <div className="container mx-auto mb-9 grid max-w-screen-2xl grid-cols-12 gap-4 md:px-4 lg:px-6">
      <Sidebar />
      <Products products={filteredProducts} />
    </div>
  );
};

export default Content;
