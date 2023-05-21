import React from "react";
import { Link, useNavigate } from "react-router-dom";

//Images
import Shopicon from "../../assets/images/shopping-cart.png";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-10 mb-4 flex items-center justify-between px-4 md:hidden">
        <div onClick={() => navigate(-1)} className="flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-all hover:shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 stroke-slate-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        <Link to="/">
          <div className="text-xl font-bold text-slate-800">دیجی تو</div>
        </Link>
        
        <div>
          <Link to="/shopcart">
            <img className="ml-4 w-8 cursor-pointer drop-shadow-md" src={Shopicon} alt="shopcart" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
