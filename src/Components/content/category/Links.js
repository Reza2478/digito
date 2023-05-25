import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { FilterContext } from "../../../Context/FilterContextProvider";

const clickHandler = (state, dispatch, item, cluster) => {
  if (!state.brands.find((i) => i === item.brand)) {
    dispatch({ type: "BRAND", payload: { name: item.brand, check: true } });
    dispatch({ type: "CATEGORY", payload: cluster });
  }
};

const Links = ({ item, cluster }) => {
  const { dispatch, state } = useContext(FilterContext);
  return (
    <Link to="/" onClick={() => clickHandler(state, dispatch, item, cluster)} className="mx-2 mt-20 flex  flex-col items-center justify-between rounded-xl bg-white p-6 shadow-md">
      <img className="mb-4 w-20" src={item.image} alt="catName" />
      <p>{item.brand}</p>
    </Link>
  );
};

export default Links;
