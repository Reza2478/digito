import React from "react";

const Specification = () => {
  return (
    <div className=" rounded-xl bg-white p-4 text-slate-800 md:bg-transparent md:p-0 md:mb-3">
      <div className="mb-4 text-lg xl:text-xl">ویژگی های کالا :</div>
      <ul>
        <li className="mb-2 flex flex-col lg:flex-row">
          <div className="flex items-center gap-x-1">
            <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="mb-1 text-sm">حافظه داخلی :</span>
          </div>
          <span className="mr-3 text-sm font-bold">128 گیگابایت</span>
        </li>
        <li className="mb-2 flex flex-col lg:flex-row">
          <div className="flex items-center gap-x-1">
            <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="mb-1 text-sm">بازه‌ی اندازه صفحه نمایش :</span>
          </div>
          <span className="mr-3 text-sm font-bold">0.6 اینچ وبزرگتر</span>
        </li>
        <li className="flex flex-col lg:flex-row">
          <div className="flex items-center gap-x-1">
            <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="mb-1 text-sm">بازه‌ی ارتباطی :</span>
          </div>
          <div className="mr-3 flex gap-x-4">
            <span className="text-sm font-bold">2G</span>
            <span className="text-sm font-bold">3G</span>
            <span className="text-sm font-bold">4G</span>
            <span className="text-sm font-bold">5G</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Specification;
