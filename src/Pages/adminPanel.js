import React from "react";
import { useSelector } from "react-redux";

//Components
import List from "../Components/content/adminpanel/Listbox";
import Specification from "../Components/content/adminpanel/Specification";

//Redux
import { addBrands, addFeatures, removeBrand, removeFeature } from "../features/productFeatureSlice";

const AdminPanel = () => {
  const features = useSelector((state) => state.features);
  const state=useSelector(state=>state.categories)
  
  return (
    <div>
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-12 gap-4 text-slate-600 md:grid-rows-[55px_minmax(500px,_1fr)]">
        <div className="col-span-12 grid h-[100vh] grid-cols-12 gap-3  md:col-span-8 lg:col-span-10 xl:col-span-12 ">
          <div className="col-span-2  bg-orange-500 shadow-xl">s</div>
          <div className="col-span-10 flex items-center justify-center">
            <div className="flex w-1/2 flex-col justify-center rounded-xl p-10 shadow-xl">
              <div className="mb-5 flex gap-x-3">
                <div className="flex w-full flex-col">
                  <h1 className="mb-3 font-bold drop-shadow-md">دسته بندی محصول</h1>
                  <List type="category" categories={state.categories}/>
                </div>
                <div className="flex w-full flex-col">
                  <h1 className="mb-3 font-bold drop-shadow-md">نوع محصول</h1>
                  <List categories={state.subcategories} type="subcategory" />
                </div>
              </div>
              <p className="mb-3 text-orange-500 drop-shadow-sm">برند ها:</p>
              <Specification features={features.brands} addFn={addBrands} removeFn={removeBrand} />
              <p className="mb-3 text-orange-500 drop-shadow-sm">خصوصیات :</p>
              <Specification features={features.features} addFn={addFeatures} removeFn={removeFeature} />
              <button className="rounded-md bg-slate-600 p-2 text-white shadow-md transition-all hover:bg-slate-400">ثبت اطلاعات</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
