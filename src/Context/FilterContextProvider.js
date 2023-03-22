import React, { createContext, useReducer } from "react";

const initialState = {
  searchInput: "",
  category: "all",
  brands: [],
  priceRange: "",
  colors: [],
};

export const FilterContext = createContext();

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "COLOR":
      state.colors.push(action.payload);
      return { ...state };
    case "BRAND":
      state.brands.push(action.payload);
      return { ...state };
    case "PRICE":
      return { ...state, priceRange: action.payload };
    default:
      return state;
  }
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

export default FilterContextProvider;
