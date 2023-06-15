import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from "../features/productsSlice";
import filtersReducer from "../features/filtersSlice";
import cartReducer from "../features/cartSlice";
import colorReducer from "../features/colorSelectedSlice";
import featureReducer from '../features/productFeatureSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer,
    color: colorReducer,
    features : featureReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
