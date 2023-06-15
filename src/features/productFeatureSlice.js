import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subcategory: "",
  brands: [],
  colors: [],
  features: [],
};

const productFeatureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    addCategry: (state, action) => {
        console.log(action.payload);
      state.category = action.payload;
    },
    addSubCategory: (state, action) => {
        console.log(action.payload);
      state.subcategory = action.payload;
    },
    addBrands: (state, action) => {
        console.log(action.payload);
      state.brands.push(action.payload);
    },
    addColors: (state, action) => {
        console.log(action.payload);
      state.colors.push(action.payload);
    },
    addFeatures: (state, action) => {
      state.features.push(action.payload);
    },
  },
});

export default productFeatureSlice.reducer;
export const { addBrands, addCategry, addSubCategory, addColors, addFeatures } = productFeatureSlice.actions;
