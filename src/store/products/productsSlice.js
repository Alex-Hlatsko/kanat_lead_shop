import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: {
    1: 0,
    2: 0,
    3: 0,
  }
}

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state, action) => {
      const productId = action.payload;
      state.products[productId] += 1
    },
    decrement: (state, action) => {
      const productId = action.payload;
      if(state.products[productId] !== 0){
        state.products[productId] -= 1
      }
    },
  },
})

export const { increment, decrement } = ProductSlice.actions

export default ProductSlice.reducer