import React from "react";

const Colors = () => {
  return (
    <div className="mb-5 flex w-full items-center justify-evenly md:justify-start">
      <span className="text-slate-800 md:text-lg">انتخاب رنگ :</span>
      <div className="flex items-center md:mr-5">
        <div className="flex items-center justify-center">
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-green-300 sm:h-6 sm:w-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-indigo-600 sm:h-6 sm:w-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-yellow-400 sm:h-6 sm:w-6">
            <svg x-show="color==='yellow'" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-white bg-orange-400 sm:h-6 sm:w-6">
            <svg x-show="color==='orange'" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-400 sm:h-6 sm:w-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Colors;
