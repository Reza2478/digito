import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

//Redux
import {  } from "../../../features/productFeatureSlice";

const Specification = ({ features, addFn, removeFn }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const addItem = () => {
    value !== "" && dispatch(addFn(value));
    setValue("");
  };

  const removeItem = (value) => {
   dispatch(removeFn(value))
  };

  return (
    <div className="mb-4 flex flex-col">
      <div className="flex flex-col">
        <div className="flex">
          <input className="border-b-2 bg-transparent py-1 text-sm  focus:outline-none" placeholder="آیتم مدنظر را وارد کنید" value={value} onChange={changeHandler} />
          <PlusCircleIcon className={`${value === "" && "opacity-50"} h-7 w-7 cursor-pointer text-orange-500 drop-shadow-sm transition-all hover:text-red-300`} onClick={addItem} />
        </div>
        <div className="flex items-center gap-x-2 overflow-auto py-3">
          {features.length
            ? features.map((item, id) => (
                <div key={id} className="flex items-center justify-between rounded-md bg-orange-500 px-1 text-white shadow-md">
                  <p className="">{item}</p>
                  <XMarkIcon className="mr-3 h-5 w-5 cursor-pointer text-white" onClick={() => removeItem(item)} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Specification;
