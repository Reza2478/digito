import React, { useContext } from "react";
import { useParams } from "react-router-dom";

//Component
import Appbar from "../Components/header/Appbar";
import Navbar from "../Components/header/Navbar";
import Advertising from "../Components/content/Advertising";
import Breadcrumbs from "../Components/content/product/Breadcrumbs";
import Information from "../Components/content/product/Information";
import Footer from "../Components/content/Footer";
import Addbtn from "../Components/content/product/Addbtn";

//Context
import { productsContext } from "../Context/ProductContextProvider";

const Productdetail = () => {
  const { id } = useParams();
  const products = useContext(productsContext);
  const product = products[id - 1];

  return (
    <div>
      <Appbar />
      <Navbar />
      <div className="container mx-auto mb-9 grid max-w-screen-2xl grid-cols-12 gap-4 md:grid-rows-[55px_minmax(500px,_1fr)] md:px-4 lg:px-6">
        <Advertising />
        <Breadcrumbs />
        <Information productInfo={product} />
      </div>
      <Addbtn productInfo={product} />
    </div>
  );
};

export default Productdetail;
