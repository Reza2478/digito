import React, { useState } from "react";

//Helper
import { colorConverter } from "../../helper/functions"; 

const Colors = ({ colors }) => {
  const [choice, setChoice] = useState(0);
  return (
    <div className="mb-5 flex w-full items-center justify-evenly md:justify-start">
      <span className="text-slate-800 md:text-lg">انتخاب رنگ :</span>
      <div className="flex items-center md:mr-5">
        <div className="flex items-center justify-center">
          {colors.map((item, id) => (
            <span onClick={() => setChoice(id)} key={id} className={`${choice === id && `ring-2 `} ml-[-4px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full ${colorConverter(item)} border border-white  sm:h-7 sm:w-7`}>
              {choice === id && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-white sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
