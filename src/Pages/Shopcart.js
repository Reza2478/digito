import React from "react";

//Component
import Appbar from "../Components/header/Appbar";
import Navbar from "../Components/header/Navbar";
import Cart from "../Components/content/shopcart/Cart";
import Totalprice from "../Components/content/shopcart/Totalprice";
import Operationbtn from "../Components/content/shopcart/Operationbtn";
import BottomNav from "../Components/content/BottomNav";
import Footer from '../Components/content/Footer'

const Shopcart = () => {
  return (
    <div>
      <Appbar />
      <Navbar />
      <div className="container mx-auto mb-9 grid max-w-screen-2xl grid-cols-12 gap-4 md:grid-rows-[55px_minmax(500px,_1fr)] md:px-4 ">
        <div className="col-span-12 mt-10 flex flex-col px-4 md:col-span-8">
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div className="col-span-12 flex flex-col md:col-span-4 px-4 mt-10">
          <Totalprice />
          <Operationbtn op='checkout' />
          <Operationbtn op='refuse' />
        </div>
      </div>
      <Footer/>
      <BottomNav />
    </div>
  );
};

export default Shopcart;
