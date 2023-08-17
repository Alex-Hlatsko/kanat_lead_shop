import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {
    1: {
      PL: 0,
      DE: 0,
      JP: 0,
      BE: 0,
      NL: 0,
      SE: 0,
    },
    2: {
      PL: 0,
      DE: 0,
      JP: 0,
      BE: 0,
      NL: 0,
      SE: 0,
    },
    3: {
      PL: 0,
      DE: 0,
      JP: 0,
      BE: 0,
      NL: 0,
      SE: 0,
    },
  },
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { productId, countryKey } = action.payload;
      state.products[productId][countryKey] += 1;
    },
    decrement: (state, action) => {
      const { productId, countryKey } = action.payload;
      if (state.products[productId][countryKey] !== 0) {
        state.products[productId][countryKey] -= 1;
      }
    },
  },
});

export const { increment, decrement } = ProductSlice.actions;

export default ProductSlice.reducer;
