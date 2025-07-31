import { createSlice, createSelector } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
        state[payload] = ( state[payload] || 0 ) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return;
      };

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      };
    }
  },
  selectors: {
    selectAmountByItemId: (state, id) => {
        return state[id]
    },
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectAmountByItemId } = cartSlice.selectors;

const selectCartSlice = (state) => state.cart;

export const selectCartItemIds = createSelector(
  [ selectCartSlice ],
  (cart) => Object.keys(cart)
);