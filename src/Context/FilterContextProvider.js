import React, { createContext, useReducer } from "react";

const initialState = {
  searchInput: "",
  category: "all",
  brands: [],
  priceRange: {},
  colors: [],
};

export const FilterContext = createContext();

const reducer = (state, action) => {
//  console.log(state);
  switch (action.type) {
    
    case "SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "COLOR":
      let color='';
      if(action.payload==='سفید') color='bg-stone-100'
      if(action.payload==='نقره ای') color='bg-zinc-200'
      if(action.payload==='خاکستری') color='bg-gray-400'
      if(action.payload==='قرمز') color='bg-red-400'
      if(action.payload==='سبز') color='bg-green-400'
      state.colors.push(color);
      return { ...state };
    case "BRAND":
      let brand='';
      if(action.payload==='اپل') brand='apple'
      if(action.payload==='سامسونگ') brand='samsung'
      if(action.payload==='شیائومی') brand='xiaomi'
      if(action.payload==='هواوی') brand='huawei'
      state.brands.push(brand);
      return { ...state };
    case "PRICE":
      const min=action.payload.min*1000000
      const max=action.payload.max*1000000
      return { ...state, priceRange: {min,max} };
    default:
      return state;
  }
};

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

export default FilterContextProvider;
