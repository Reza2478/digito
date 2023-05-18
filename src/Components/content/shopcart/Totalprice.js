import React from "react";

const Totalprice = () => {
  return (
    <div className="mt-8 flex flex-col justify-center gap-y-3 rounded-md bg-white p-4 px-5">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-900">مجموع قیمت :</span>
        <span className="font-bold text-orange-500">6,650,000 تومان</span>
      </div>
      <div className="text-xs text-slate-800">کد تخفیف دارید؟</div>
    </div>
  );
};

export default Totalprice;
