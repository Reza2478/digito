import React from "react";

//Helper
import { textSplitter } from "../helper/functions";
import { toInteger } from "../helper/functions";

const Product = ({ productData }) => {
  const { id, brand, colors, details, images, price, model } = productData;
  return (
    <div className="flex flex-col rounded-xl bg-white shadow-md">
      {/*image section*/}
      <div className="relative m-1 rounded-lg bg-slate-200">
        <img className="w-full px-9 py-3" src={images[0]} alt={id} />
        <div className="absolute top-3 right-2 rounded-full bg-gray-300 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-orange-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      {/*color information*/}

      <div className="flex justify-between p-2">
        <span className="text-xs text-slate-200 sm:text-base">{brand}</span>
        <div className="flex items-center justify-center">
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-green-300 sm:h-7 sm:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-indigo-600 sm:h-7 sm:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-yellow-400 sm:h-7 sm:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-orange-400 sm:h-7 sm:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-400 sm:h-7 sm:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
      </div>
      {/*details*/}

      <div className="flex items-center p-2">
        <span className="text-[10px] text-slate-900 sm:text-base">{textSplitter(model)}</span>
      </div>
      <div className="mb-2 flex items-center justify-end px-2">
        <span className="text-sm text-orange-700 sm:text-base">{toInteger(price)}</span>
        <span className="mr-1 text-xs text-orange-700 sm:text-sm">??????????</span>
      </div>
      <hr className="mx-2" />
      <button className="w-full py-2 text-sm font-bold text-orange-400 sm:text-lg">???????????? ??????????</button>
    </div>
  );
};

export default Product;
