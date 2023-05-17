import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-10 xl:col-span-10">
      <div className="mb-6 flex items-center md:bg-white px-4 h-14 rounded-md">
        <span className="cursor-pointer text-sm text-orange-400 md:text-base">تلفن همراه</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-3 w-3 stroke-slate-800" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="cursor-pointer text-sm text-orange-400 md:text-base">برند آیفون</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 h-3 w-3 stroke-slate-800" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="cursor-pointer text-sm text-slate-800 md:text-base">آیفون سیزده</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
