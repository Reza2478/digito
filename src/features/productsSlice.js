import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  products: [],
};

const fetchProducts = createAsyncThunk("products/fetchProducts", async (thunkAPI) => {
  try {
    const response = await axios.get("https://6472db22d784bccb4a3c0da1.mockapi.io/products");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.products = [];
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
