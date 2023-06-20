import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  subcategory: "",
  brands: [],
  features: [],
};

const productFeatureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setCategry: (state, action) => {
      state.category = action.payload;
      state.subcategory=''
    },
    setSubCategory: (state, action) => {
      state.subcategory = action.payload;
    },
    addBrands: (state, action) => {
      state.brands.push(action.payload);
    },

    addFeatures: (state, action) => {
      state.features.push(action.payload);
    },
    removeBrand: (state, action) => {
      const newBrands = state.brands.filter((item) => item !== action.payload);
      state.brands = newBrands;
    },
    removeFeature: (state, action) => {
      const newFeatures = state.features.filter((item) => item !== action.payload);
      state.features = newFeatures;
    },
  },
});

export default productFeatureSlice.reducer;
export const { addBrands, setCategry, setSubCategory, addFeatures, removeBrand, removeFeature  } = productFeatureSlice.actions;
