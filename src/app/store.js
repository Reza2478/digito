import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from "../features/productsSlice";
import filtersReducer from "../features/filtersSlice";
import cartReducer from "../features/cartSlice";
import colorReducer from "../features/colorSelectedSlice";
import featureReducer from "../features/panelFeatureSlice";
import categoriesReducer from "../features/panelCategorySlice";
import colorsReducer from "../features/panelColorSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer,
    color: colorReducer,
    features: featureReducer,
    categories: categoriesReducer,
    colors: colorsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
