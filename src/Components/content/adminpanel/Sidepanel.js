import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

//Image
import Avatar from "../../../assets/images/avatar.png";

const Sidepanel = ({drawer,fn,selected}) => {
  return (
    <div className=" w-full flex flex-col bg-orange-500 shadow-2xl">
        <XMarkIcon onClick={()=>drawer(false)} className="w-10 h-10 absolute top-2 left-2 drop-shadow-lg text-white cursor-pointer md:hidden"/>
      <span className="mt-10 flex items-center justify-center ">
        <img className="w-24 rounded-full bg-red-200 p-1 shadow-lg" src={Avatar} alt="avatar" />
      </span>
      <ul className="mt-20 flex flex-col gap-y-4 p-4 md:pl-4 md:p-0">
        <li onClick={()=>fn('features')} className={`${selected==='features'&&'bg-slate-400'} w-full rounded-md cursor-pointer md:rounded-l-full bg-slate-700 p-3 text-white shadow-lg transition-all hover:bg-slate-400`} >افزدون خصوصیت محصول</li>
        <li onClick={()=>fn('colorpalette')} className={`${selected==='colorpalette'&&'bg-slate-400'} w-full rounded-md cursor-pointer md:rounded-l-full bg-slate-700 p-3 text-white shadow-lg transition-all hover:bg-slate-400`} >افزدون به پالت رنگی </li>
      </ul>
    </div>
  );
};

export default Sidepanel;
