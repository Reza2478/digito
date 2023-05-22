import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  total: 0,
  checkout: false,
  itemscounter: 0,
};

export const CartContext = createContext();

const sumItems = (data) => {
  const itemsCounter = data.reduce((total, product) => total + product.quantity, 0);
  let total = data.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
  return { itemsCounter, total };
};

const reducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: state.selectedItems,
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        selectedItems: state.selectedItems,
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        selectedItems: state.selectedItems,
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "REMOVE":
      const newSelectedItem = state.selectedItems.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        selectedItems: newSelectedItem,
        ...sumItems(newSelectedItem),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
