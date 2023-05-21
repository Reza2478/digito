import React, { useContext } from "react";

//Context
import { CartContext } from "../../../Context/CartContextProvider";

const Operationbtn = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="mt-24 flex md:mt-2">
      <button onClick={() => dispatch({ type: "CHECKOUT" })} className="flex w-full justify-center rounded-md bg-orange-400   p-4 text-xl text-white shadow-md md:py-2">
        <p>پرداخت</p>
      </button>
    </div>
  );
};

export default Operationbtn;
