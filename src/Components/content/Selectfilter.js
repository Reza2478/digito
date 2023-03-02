import React, { useState } from "react";

const Selectfilter = () => {
  const [selected, setSelected] = useState("popular");

  const selectHandler = (value) => {
    setSelected(value);
  };

  return (
    <div className="col-span-8 hidden md:block lg:col-span-9 xl:col-span-10">
      <div className="flex items-center gap-x-3 rounded-md bg-white p-1 text-gray-400">
        <div className="flex items-center rounded-md bg-orange-100 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
          </svg>
        </div>

        <button onClick={() => selectHandler("popular")} className={selected === "popular" ? "text-slate-800 font-bold relative p-2" : "p-2"}>
          <span className="text-sm ">محبوب ترین محصول</span>
          {selected === "popular" && <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-red-400"></span>}
        </button>
        <button onClick={() => selectHandler("visited")} className={selected === "visited" ? "text-slate-800 font-bold relative p-2" : "p-2"}>
          <span className="text-sm">پربازدید ترین محصول</span>
          {selected === "visited" && <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-red-400"></span>}
        </button>
        <button onClick={() => selectHandler("expensive")} className={selected === "expensive" ? "text-slate-800 font-bold relative p-2" : "p-2"}>
          <span className="text-sm">گران ترین محصول</span>
          {selected === "expensive" && <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-red-400"></span>}
        </button>
        <button onClick={() => selectHandler("cheap")} className={selected === "cheap" ? "text-slate-800 font-bold relative p-2" : "p-2"}>
          <span className="text-sm">ارزان ترین محصول</span>
          {selected === "cheap" && <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-red-400"></span>}
        </button>
      </div>
    </div>
  );
};

export default Selectfilter;
