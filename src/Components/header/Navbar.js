import React, { useState, useContext } from "react";

//Context
import { FilterContext } from "../../Context/FilterContextProvider";

//Images
import Shopicon from "../../assets/images/shopping-cart.png";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo.png'

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useContext(FilterContext);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <nav className="mb-9 hidden bg-white p-4 shadow-lg md:block">
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between">
        <ul className="flex items-center justify-center gap-x-2 text-slate-800 lg:gap-x-3 lg:text-lg">
          <li>
            <a className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100" href="#/">
              <img className="w-14" src={Logo} alt='logo'/>
            </a>
          </li>
          <li>
            <a className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100" href="#/">
              خانه
            </a>
          </li>
          <li>
            <a className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100" href="#/">
              تلفن همراه
            </a>
          </li>
          <li>
            <a className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100" href="#/">
              لپ تاپ
            </a>
          </li>
          <li>
            <a className="block rounded px-3 py-2 transition-all duration-500 hover:bg-gray-100" href="#/">
              ساعت هوشمند
            </a>
          </li>
        </ul>
        <div className="mr-4 max-w-xl flex-1">
          <div className="flex items-center rounded-lg bg-gray-100">
            <svg onClick={() => dispatch({ type: "SEARCH_INPUT", payload: inputValue })} xmlns="http://www.w3.org/2000/svg" className="m-2 h-7 w-7 cursor-pointer stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input value={inputValue} onChange={inputHandler} className="mr-4 w-full border-transparent bg-transparent p-2 text-slate-800 focus:border-transparent focus:outline-none focus:ring-0" type="text" name="" id="" placeholder="جستجوی نام محصول، نام برند، نام مدل و..." />
          </div>
        </div>
        <div>
          <Link to='/shopcart'>
            <img className="ml-4 w-10 cursor-pointer drop-shadow-md" src={Shopicon} alt="shopcart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
