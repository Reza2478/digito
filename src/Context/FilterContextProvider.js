import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  searchInput: "",
  category: "all",
  brands: [],
  priceRange: { min: 0, max: 100 },
  colors: [],
};

export const FilterContext = createContext();

const reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "SEARCH_INPUT":
      return { ...state, searchInput: action.payload };

    case "CATEGORY":
      return { ...state, category: action.payload };

    case "COLOR":
      action.payload.check ? state.colors.push(action.payload.name) : (state.colors = state.colors.filter((item) => item !== action.payload.name));
      return { ...state };

    case "BRAND":
      action.payload.check ? state.brands.push(action.payload.name) : (state.brands = state.brands.filter((item) => item !== action.payload.name));
      return { ...state };

    case "PRICE":
      return { ...state, priceRange: { min: action.payload.min, max: action.payload.max } };

    default:
      return state;
  }
};

const getInitialState = () => {
  const filter = sessionStorage.getItem("filters");
  return filter ? JSON.parse(filter) : initialState;
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    try {
      sessionStorage.setItem("filters", JSON.stringify(state));
    } catch (error) {
      return error;
    }
  }, [state]);

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

export default FilterContextProvider;
