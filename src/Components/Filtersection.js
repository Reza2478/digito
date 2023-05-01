import React from "react";

import Filters from "./content/sidebar/Filters";

const Filtersection = ({setActive,active}) => {
  return (
    <div className={` sticky z-50 bottom-0 bg-stone-50 rounded-t-3xl shadow-lg md:hidden ${active?'block':'hidden'} `}>
      <div className="p-5">
        <div className="mb-2 text-lg font-bold text-orange-400 px-2">فیلتر</div>
        <Filters title="برند محصول" items={["اپل", "سامسونگ", "شیائومی", "هواوی"]} />
        <Filters title="رنگ محصول" items={["نقره ای", "سفید", "قرمز", "خاکستری", "سبز"]} />
        <Filters title="محدوده قیمت" />
        <div className="flex items-center  justify-center mt-5">
          <button onClick={()=>setActive(false)} className="hover:bg-orange-100 hover:text-orange-400 transition-all shadow-md bg-orange-400 p-2 text-sm font-bold rounded-md text-stone-50  ">نمایش محصولات</button>
        </div>
      </div>
    </div>
  );
};

export default Filtersection;
