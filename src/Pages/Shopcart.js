import React from "react";

//Component
import Appbar from "../Components/header/Appbar";
import Navbar from "../Components/header/Navbar";
import Cart from "../Components/content/shopcart/Cart";
import Totalprice from "../Components/content/shopcart/Totalprice";
import Checkoutbtn from "../Components/content/shopcart/Checkoutbtn";
import BottomNav from "../Components/content/BottomNav";

const Shopcart = () => {
  return (
    <div>
      <Appbar />
      <Navbar />
      <div className="mt-10 flex flex-col px-4 md:flex-row">
        <div>
          <Cart />
          <Cart />
          <Cart />
        </div>
        <Totalprice />
      </div>
      <Checkoutbtn />
      <BottomNav/>
    </div>
  );
};

export default Shopcart;
