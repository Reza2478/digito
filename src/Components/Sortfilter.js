import React from "react";

const Sortfilter = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-x-4 px-4 md:hidden">
        <div className="flex w-1/2 items-center justify-start rounded bg-stone-50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
          <span className="mr-2 text-sm text-slate-800">محبوب ترین</span>
        </div>
        <div className="flex w-1/2 items-center justify-start rounded bg-stone-50 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="mr-2 text-sm text-slate-800">فیلتر : برند اپل</span>
        </div>
      </div>
    </div>
  );
};

export default Sortfilter;
