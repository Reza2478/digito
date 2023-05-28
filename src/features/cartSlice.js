import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  total: 0,
  checkout: false,
  itemscounter: 0,
};

const sumItems = (data) => {
  const itemsCounter = data.reduce((total, product) => total + product.quantity, 0);
  let total = data
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const getInitialState = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addItems: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      sumItems(state.selectedItems);
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increase: (state, action) => {
      const index = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[index].quantity++;
      sumItems(state.selectedItems);
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrease: (state, action) => {
      const index = state.selectedItems.findIndex((item) => item.id === action.payload.id);
      state.selectedItems[index].quantity--;
      sumItems(state.selectedItems);
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    remove: (state, action) => {
      const newSelectedItem = state.selectedItems.filter((item) => item.id !== action.payload.id);
      state.selectedItems = newSelectedItem;
      sumItems(newSelectedItem);
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { checkout, addItems, remove, decrease, increase } = cartSlice.actions;
