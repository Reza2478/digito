import React from "react";
import { useSelector } from "react-redux";

//Redux
import { addBrands, addFeatures, removeFeature, removeBrand } from "../../../features/panelFeatureSlice";

//Components
import Specification from "./Specification";
import List from "./Listbox";

const Featuresform = () => {
  const features = useSelector((state) => state.features);
  const categories = useSelector((state) => state.categories);

  return (
    <div className="col-span-12 flex items-center justify-center md:col-span-9 lg:col-span-10">
      <div className="flex w-3/4 flex-col justify-center rounded-xl p-5 shadow-xl md:p-10 lg:w-1/2">
        <div className="mb-5 flex flex-col gap-y-4 md:flex-row md:gap-x-3">
          <div className="flex w-full flex-col">
            <h1 className="mb-3 font-bold drop-shadow-md">دسته بندی محصول</h1>
            <List type="category" categories={categories.categories} />
          </div>
          <div className="flex w-full flex-col">
            <h1 className="mb-3 font-bold drop-shadow-md">نوع محصول</h1>
            <List categories={categories.subcategories} type="subcategory" />
          </div>
        </div>
        <p className="mb-3 text-orange-500 drop-shadow-sm">برند ها:</p>
        <Specification features={features.brands} addFn={addBrands} removeFn={removeBrand} />
        <p className="mb-3 text-orange-500 drop-shadow-sm">خصوصیات :</p>
        <Specification features={features.features} addFn={addFeatures} removeFn={removeFeature} />
        <button className="rounded-md bg-slate-600 p-2 text-white shadow-md transition-all hover:bg-slate-400">ثبت اطلاعات</button>
      </div>
    </div>
  );
};

export default Featuresform;
