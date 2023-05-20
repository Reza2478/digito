import React from "react";

const Cart = () => {
  return (
    <div className="mb-2 flex items-center justify-between rounded-md bg-white p-2 shadow-md">
      <img className="max-w-[60px]" src="../assets/img/Cart/1.png" alt="apple watch" />
      <div className="flex flex-col gap-y-5">
        <span className="text-base font-bold text-slate-900">ساعت هوشمند اپل سری 6</span>
        <span className="text-sm font-semibold text-orange-500">2,250,000 تومان</span>
      </div>
      <div className="flex   flex-col items-end gap-y-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div className="border-1 rounded-md border border-orange-500 px-1 text-slate-700">1</div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
