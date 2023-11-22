import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: "hello",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.productsData = payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
