import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './getDishesByRestaurantId';

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({requestStatus: 'idle'}),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
  }
});

const selectDishesSlice = (state) => state[dishesSlice.name];
export const {
  selectIds: selectDishesIds,
  selectById: selectDishById,
} = entityAdapter.getSelectors(selectDishesSlice);


export const { selectRequestStatus } = dishesSlice.selectors;