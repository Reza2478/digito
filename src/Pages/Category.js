import React from "react";
import { Link } from "react-router-dom";

//Component
import Appbar from "../Components/header/Appbar";

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
  return (
    <div className="flex flex-col">
      <Appbar />
      <div className="flex my-8  items-end relative text-slate-700 ">
        <div className=" flex overflow-x-auto p-3">
          <Link className="flex-shrink-0 flex-grow-0 flex flex-col mt-6 bg-gray-300  justify-between items-center rounded-xl shadow-md overflow-hidden">
            <p className="mt-8 font-semibold">تلفن همراه</p>
            <img className="w-40 " src={Phone} alt="catName" />
          </Link>

          <div className="flex flex-shrink-0 flex-grow-0">
            <Link className="mt-20 p-6 mx-2  flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Apple} alt="catName" />
              <p>اپل</p>
            </Link>

            <Link className="mt-20 p-6 mx-2  flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Xiaomi} alt="catName" />
              <p>شیائومی</p>
            </Link>

            <Link className="mt-20 p-6 mx-2   flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Samsung} alt="catName" />
              <p>سامسونگ</p>
            </Link>
          </div>
        </div>

        <Link className=" top-1 left-3 absolute text-orange-500">مشاهده همه</Link>
      </div>

      <hr className="mx-3 w-3/4" />

      <div className="flex my-8  items-end relative  text-slate-700">
        <div className=" flex overflow-x-auto p-3">
          <Link className="flex-shrink-0 flex-grow-0 flex flex-col mt-6 bg-gray-300  justify-between items-center rounded-xl shadow-md overflow-hidden">
            <p className="mt-8 font-semibold">لپ تاپ</p>
            <img className="w-40" src={Laptop} alt="catName" />
          </Link>
          
          <div className="flex flex-shrink-0 flex-grow-0">
            <Link className="mt-20 p-6 mx-2  flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Asus} alt="catName" />
              <p>ایسوس</p>
            </Link>

            <Link className="mt-20 p-6 mx-2   flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Microsoft} alt="catName" />
              <p>مایکروسافت</p>
            </Link>

            <Link className="mt-20 p-6 mx-2  flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Apple} alt="catName" />
              <p>اپل</p>
            </Link>

            <Link className="mt-20 p-6 mx-2   flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Hp} alt="catName" />
              <p>اچ پی</p>
            </Link>

          </div>
        </div>

        <Link className=" top-1 left-3 absolute text-orange-500">مشاهده همه</Link>
      </div>

      <hr className="mx-3 w-3/4" />

      <div className="flex my-8  items-end relative  text-slate-700">
        <div className=" flex overflow-x-auto p-3">
          <Link className="flex-shrink-0 flex-grow-0 flex flex-col mt-6 bg-gray-300  justify-between items-center rounded-xl shadow-md overflow-hidden">
            <p className="mt-8 font-semibold">ساعت هوشمند</p>
            <img className="w-40 " src={Smartwatch} alt="catName" />
          </Link>
          
          <div className="flex flex-shrink-0 flex-grow-0">
            <Link className="mt-20 p-6 mx-2   flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Samsung} alt="catName" />
              <p>سامسونگ</p>
            </Link>

            <Link className="mt-20 p-6 mx-2  flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Xiaomi} alt="catName" />
              <p>شیائومی</p>
            </Link>

            <Link className="mt-20 p-6 mx-2  flex flex-col justify-between items-center bg-white rounded-xl shadow-md">
              <img className="w-20 mb-4" src={Apple} alt="catName" />
              <p>اپل</p>
            </Link>

          </div>
        </div>

        <Link className=" top-1 left-3 absolute text-orange-500">مشاهده همه</Link>
      </div>
    </div>
  );
};

export default Category;
