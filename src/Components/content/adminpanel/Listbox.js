import React, { useState } from "react";
import { ChevronUpDownIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";

//Redux
import { setCategry, setSubCategory } from "../../../features/productFeatureSlice";
import { addToCategories, addToSubcategories } from "../../../features/productCategorySlice";

const List = ({ type, categories }) => {
  const [selected, setSelected] = useState("- - -");
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    e.preventDefault();
    type === "category" ? dispatch(addToCategories(value)) : dispatch(addToSubcategories(value));
    setValue("");
  };

  const selectHandler = (value) => {
    setSelected(value);
    setShow(!show);
    type === "category" ? dispatch(setCategry(value)) : dispatch(setSubCategory(value));
  };

  return (
    <div className="relative flex w-full cursor-pointer flex-col  ">
      <div className="flex items-center  justify-between truncate rounded-md bg-white p-2 shadow-md" onClick={() => setShow(!show)}>
        <span>{selected}</span>
        <ChevronUpDownIcon className="h5 w-5" />
      </div>
      <div className={`absolute top-10 z-50 mt-2 w-full overflow-hidden rounded-md bg-white shadow-md transition-all ${show === false && "hidden"}`}>
        <ul className="">
          {categories.map((item, id) => (
            <li key={id} onClick={() => selectHandler(item)} className="flex items-center justify-between p-2 transition-all hover:bg-gray-200">
              <p>{item}</p>
            </li>
          ))}
          <li className="bg-orange-100">
            <form className="flex w-full items-center justify-between p-2">
              <input value={value} onChange={(e) => setValue(e.target.value)} className="border-b-2 border-orange-200 bg-transparent p-1 outline-none" placeholder="افزودن  " />
              <button>
                <PlusCircleIcon className="h-7 w-7 text-orange-500 drop-shadow-md " onClick={changeHandler} />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
