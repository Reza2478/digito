import React from "react";

const Operationbtn = ({ op }) => {
  return (
    <div className={`mt-24 flex md:mt-2 ${op==='refuse'&& 'hidden md:flex'}`}>
      <button className={`flex w-full justify-center rounded-md ${op === "checkout" ? "bg-orange-400 " : "border border-orange-400 bg-transparent "} p-4 shadow-md md:py-2`}>{op === "checkout" ? <p className="text-xl text-white ">ادامه فرآیند خرید</p> : <p className="text-xl text-orange-400 ">انصراف از خرید</p>}</button>
    </div>
  );
};

export default Operationbtn;
