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
 console.log(state);
  switch (action.type) {
    
    case "SEARCH_INPUT":
      return { ...state, searchInput: action.payload };
    case "CATEGORY":
      return { ...state, category: action.payload };
    case "COLOR":
      let color='';
      if(action.payload.name==='سفید') color='bg-stone-100'
      if(action.payload.name==='نقره ای') color='bg-zinc-200'
      if(action.payload.name==='خاکستری') color='bg-gray-400'
      if(action.payload.name==='قرمز') color='bg-red-400'
      if(action.payload.name==='سبز') color='bg-green-400'
      action.payload.check? state.colors.push(color): state.colors=state.colors.filter(item=>item!==color)
      return { ...state };
    case "BRAND":
      let brand='';
      if(action.payload.name==='اپل') brand='apple'
      if(action.payload.name==='سامسونگ') brand='samsung'
      if(action.payload.name==='شیائومی') brand='xiaomi'
      if(action.payload.name==='هواوی') brand='huawei'
      action.payload.check? state.brands.push(brand): state.brands=state.brands.filter(item=>item!==brand)
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
