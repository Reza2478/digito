import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from "../features/productsSlice";
import filtersReducer from "../features/filtersSlice";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
