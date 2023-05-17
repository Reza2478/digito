import React from 'react';

//Images
import Advertise from "../../../../src/assets/images/advertising.png";

const Advertising = () => {
    return (
        <div className="col-span-4 row-span-2 hidden md:block lg:col-span-2 xl:col-span-2">
          <div className="sticky top-27 max-h-[calc(100vh_-_140px)] overflow-auto rounded-xl p-5 shadow-lg bg-gradient-to-r from-slate-800 to-cyan-500">
            <div className="flex flex-col justify-between items-center h-28">
              <img className="absolute w-14 top-3 left-3" src={Advertise} alt="advertising" />
              <div></div>
              <p className="bottom-0 text-white text-sm">جدیدترین ساعت های هوشمند</p>
            </div>
          </div>
        </div>
    );
};

export default Advertising;