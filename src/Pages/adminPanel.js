import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


//Components
import Appbar from "../Components/header/Appbar";
import Navbar from "../Components/header/Navbar";

//Redux
import { addBrands, addCategry, addColors, addFeatures, addSubCategory } from "../features/productFeatureSlice";

const AdminPanel = () => {
  const features = useSelector((state) => state.features);
  const dispath = useDispatch();

  const [value, setValue] = useState({ color: "", brand: "", feature: "" });
  const changeHandler = (e) => {
    switch (e.target.name) {
      case "brand":
        setValue({ ...value, brand: e.target.value });
        break;
      case "color":
        setValue({ ...value, color: e.target.value });
        break;
      case "feature":
        setValue({ ...value, feature: e.target.value });
        break;
      default:
        break;
    }
  };

  const addFeature = (dispath, property) => {
    if (property === "brand" && value.brand !== "") {
      dispath(addBrands(value.brand));
      setValue({ ...value, brand: "" });
    } else if (property === "color" && value.color !== "") {
      dispath(addColors(value.color));
      setValue({ ...value, color: "" });
    } else if (property === "feature" && value.feature !== "") {
      dispath(addFeatures(value.feature));
      setValue({ ...value, feature: "" });
    }
  };
  return (
    <div>
      {/* <Appbar />
      <Navbar /> */}
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-12 gap-4 md:grid-rows-[55px_minmax(500px,_1fr)]">
        <div className="grid grid-cols-12 gap-3 h-[100vh] col-span-12  md:col-span-8 lg:col-span-10 xl:col-span-12 ">
          <div className="col-span-2  bg-orange-500 shadow-xl">s</div>
          <div className="flex col-span-10 items-center justify-center">
            <form className="flex w-1/2 flex-col justify-center bg-red p-10 shadow-xl rounded-xl">
              <div className="flex">
              دسته بندی محصول
              <select className="" label="Select Version"  defaultValue={"DEFAULT"} onChange={(e) => dispath(addCategry(e.target.value))} >
                <option disabled value="DEFAULT">
                  --select category --
                </option>
                <option>کالای دیجیتال</option>
                <option>مد و پوشاک</option>
              </select>
              نوع محصول
              <select defaultValue={"DEFAULT"} onChange={(e) => dispath(addSubCategory(e.target.value))}>
                <option disabled value="DEFAULT">
                  --select subcategory --
                </option>
                <option>موبایل</option>
                <option>لپ تاپ</option>
                <option>ساعت هوشنمد</option>
              </select>
              </div>
              <label>برند مدنظر را اضافه کنید</label>
              <input value={value.brand} onChange={(e) => changeHandler(e)} name="brand" />
              {features.brands.length ? features.brands.map((brand, id) => <p key={id}>{brand}</p>) : null}
              <button type="button" onClick={() => addFeature(dispath, "brand")} className="mt-2 bg-white p-2">
                +
              </button>
              <br />
              رنگ مورد نظر را وارد کنید <input value={value.color} onChange={(e) => changeHandler(e)} name="color" />
              {features.colors.length ? features.colors.map((color, id) => <p key={id}>{color}</p>) : null}
              <button type="button" onClick={() => addFeature(dispath, "color")} className="mt-2 bg-white p-2">
                +
              </button>
              <br />
              مشخصات محصول <input value={value.feature} onChange={(e) => changeHandler(e)} name="feature" />
              {features.features.length ? features.features.map((feature, id) => <p key={id}>{feature}</p>) : null}
              <button onClick={() => addFeature(dispath, "feature")} type="button" className="mt-2 bg-white p-2">
                +
              </button>
              <br />
              <button type="submit">ثبت اطلاعات</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
