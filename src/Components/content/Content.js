import React, { useContext } from "react";

//Context
import { productsContext } from "../../Context/ProductContextProvider";

//Components
import Sidebar from "./sidebar/Sidebar";
import Selectfilter from "./Selectfilter";
import Products from "./Products";

const Content = () => {
  const products = useContext(productsContext);

  return (
    <div className="container mx-auto mb-9 grid max-w-screen-2xl grid-cols-12 gap-4 md:grid-rows-[55px_minmax(500px,_1fr)] md:px-4 lg:px-6">
      <Sidebar />
      <Selectfilter />
      <Products products={products} />
    </div>
  );
};

export default Content;
