import React from "react";

//Component
import Appbar from "../Components/header/Appbar";
import Navbar from "../Components/header/Navbar";
import Advertising from "../Components/content/product/Advertising";
import Breadcrumbs from "../Components/content/product/Breadcrumbs";
import Information from "../Components/content/product/Information";
import Footer from "../Components/content/Footer";
import Addbtn from "../Components/content/product/Addbtn";

const Productdetail = () => {
  return (
    <div>
      <Appbar />
      <Navbar />
      <div className="container mx-auto mb-9 grid max-w-screen-2xl grid-cols-12 gap-4 md:grid-rows-[55px_minmax(500px,_1fr)] md:px-4 lg:px-6">
        <Advertising />
        <Breadcrumbs />
        <Information />
      </div>
      <Footer />
      <Addbtn/>
    </div>
  );
};

export default Productdetail;
