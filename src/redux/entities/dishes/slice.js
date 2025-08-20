import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getDishesByRestaurantId } from './getDishesByRestaurantId';
import { getDishById } from './getDishById';
import { IDLE } from "../../redux/constants"

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({requestStatus: IDLE}),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
  }
});

const selectDishesSlice = (state) => state[dishesSlice.name];
export const {
  selectIds: selectDishesIds,
  selectById: selectDishById,
} = entityAdapter.getSelectors(selectDishesSlice);


export const { selectRequestStatus } = dishesSlice.selectors;