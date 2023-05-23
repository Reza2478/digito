import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Component
import Appbar from "../Components/header/Appbar";

//Context
import { FilterContext } from "../Context/FilterContextProvider";

//images
import Phone from "../assets/images/categories/phone.png";
import Apple from "../assets/images/categories/apple.png";
import Xiaomi from "../assets/images/categories/xiaomi.png";
import Samsung from "../assets/images/categories/samsung.png";
import Laptop from "../assets/images/categories/laptop.png";
import Asus from "../assets/images/categories/asus.png";
import Microsoft from "../assets/images/categories/microsoft.png";
import Hp from "../assets/images/categories/hp.png";
import Smartwatch from "../assets/images/categories/smartwatch.png";

const Category = () => {
  const { dispatch } = useContext(FilterContext);

  return (
    <div className="flex flex-col">
      <Appbar />
      <div className="relative my-8  flex items-end text-slate-700 ">
        <div className=" flex overflow-x-auto p-3">
          <Link className="mt-6 flex flex-shrink-0 flex-grow-0 flex-col items-center  justify-between overflow-hidden rounded-xl bg-gray-300 shadow-md">
            <p className="mt-8 font-semibold">تلفن همراه</p>
            <img className="w-40 " src={Phone} alt="catName" />
          </Link>

          <div className="flex flex-shrink-0 flex-grow-0">
            <Link to='/' onClick={()=>dispatch({ type: "BRAND", payload: { name: 'اپل', check: true }})} className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Apple} alt="catName" />
              <p>اپل</p>
            </Link>

            <Link className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Xiaomi} alt="catName" />
              <p>شیائومی</p>
            </Link>

            <Link className="mx-2 mt-20 flex   flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Samsung} alt="catName" />
              <p>سامسونگ</p>
            </Link>
          </div>
        </div>

        <Link to="/" onClick={() => dispatch({ type: "CATEGORY", payload: "mobile" })} className=" absolute top-1 left-3 text-orange-500">
          مشاهده همه
        </Link>
      </div>

      <hr className="mx-3 w-3/4" />

      <div className="relative my-8  flex items-end  text-slate-700">
        <div className=" flex overflow-x-auto p-3">
          <Link className="mt-6 flex flex-shrink-0 flex-grow-0 flex-col items-center  justify-between overflow-hidden rounded-xl bg-gray-300 shadow-md">
            <p className="mt-8 font-semibold">لپ تاپ</p>
            <img className="w-40" src={Laptop} alt="catName" />
          </Link>

          <div className="flex flex-shrink-0 flex-grow-0">
            <Link className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Asus} alt="catName" />
              <p>ایسوس</p>
            </Link>

            <Link className="mx-2 mt-20 flex   flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Microsoft} alt="catName" />
              <p>مایکروسافت</p>
            </Link>

            <Link className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Apple} alt="catName" />
              <p>اپل</p>
            </Link>

            <Link className="mx-2 mt-20 flex   flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Hp} alt="catName" />
              <p>اچ پی</p>
            </Link>
          </div>
        </div>

        <Link className=" absolute top-1 left-3 text-orange-500">مشاهده همه</Link>
      </div>

      <hr className="mx-3 w-3/4" />

      <div className="relative my-8  flex items-end  text-slate-700">
        <div className=" flex overflow-x-auto p-3">
          <Link className="mt-6 flex flex-shrink-0 flex-grow-0 flex-col items-center  justify-between overflow-hidden rounded-xl bg-gray-300 shadow-md">
            <p className="mt-8 font-semibold">ساعت هوشمند</p>
            <img className="w-40 " src={Smartwatch} alt="catName" />
          </Link>

          <div className="flex flex-shrink-0 flex-grow-0">
            <Link className="mx-2 mt-20 flex   flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Samsung} alt="catName" />
              <p>سامسونگ</p>
            </Link>

            <Link className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Xiaomi} alt="catName" />
              <p>شیائومی</p>
            </Link>

            <Link className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
              <img className="mb-4 w-20" src={Apple} alt="catName" />
              <p>اپل</p>
            </Link>
          </div>
        </div>

        <Link className=" absolute top-1 left-3 text-orange-500">مشاهده همه</Link>
      </div>
    </div>
  );
};

export default Category;
