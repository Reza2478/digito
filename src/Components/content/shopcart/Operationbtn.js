import React, { useContext } from "react";

//Context
import { CartContext } from "../../../Context/CartContextProvider";

const Operationbtn = () => {
  const { dispatch, state } = useContext(CartContext);

  return (
    <div className="mt-24 flex md:mt-2">
      {!state.selectedItems.length ? (
        <button disabled className="flex w-full justify-center rounded-md bg-orange-400 opacity-50   p-4 text-xl text-white shadow-md md:py-2">
          پرداخت
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "CHECKOUT" })} className="flex w-full justify-center rounded-md bg-orange-400   p-4 text-xl text-white shadow-md md:py-2">
          پرداخت
        </button>
      )}
    </div>
  );
};

export default Operationbtn;
