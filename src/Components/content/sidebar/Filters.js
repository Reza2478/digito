import React, { useState } from "react";

const Filters = ({ items, title }) => {
  const [selected, setSelected] = useState(true);
  const [price, setPrice] = useState(0);

  const selectHandler = () => {
    setSelected(!selected);
  };

  const changeHandler = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div>
      <div>
        <div onClick={selectHandler} className="mb-4 flex w-full cursor-pointer items-center justify-between p-2">
          <div className="flex items-center justify-center">
            <div className="relative flex h-5 w-5 rounded-full bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1.5 -left-1 h-5 w-5 stroke-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {title === "برند محصول" && <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />}
                {title === "رنگ محصول" && <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />}
                {title === "محدوده قیمت" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
              </svg>
            </div>
            <span className="mr-3 text-lg text-slate-800">{title}</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 stroke-slate-700 transition-all duration-500 ${selected === false && "rotate-180"}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="px-2">
          <ul>
            {selected &&
              title !== "محدوده قیمت" &&
              items.map((item) => (
                <li key={item} className="mb-3">
                  <input type="checkbox" className=" rounded text-orange-500 focus:ring-orange-500" name={title} id={item} />
                  <label className="mr-2 text-slate-800" htmlFor={item}>
                    {item}
                  </label>
                </li>
              ))}
            {title === "محدوده قیمت" && selected && (
              <div>
                <div className="flex items-center justify-between">
                  <span className="mx-1">0</span>
                  <input onChange={changeHandler} id="minmax-range" type="range" min="0" max="100" value={price} className=" w-full h-1 bg-orange-500 rounded-lg appearance-none cursor-pointer dark:bg-slate-800" />
                  <span className="mx-1">100</span>
                </div>
                <div className="flex justify-center flex-col items-center p-3">
                  <span className="text-sm font-bold">انتخاب شما:</span>
                  <p className="text-md font-bold">{price} میلیون تومان</p>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filters;
