import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './getRestaurants';
import { getRestaurantById } from './getRestaurantById';
import { REQUEST_STATUS } from "../../constants"

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({ requestStatus: REQUEST_STATUS.IDLE }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => 
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];
export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectRequestStatus } = restaurantsSlice.selectors;