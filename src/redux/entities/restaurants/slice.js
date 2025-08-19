import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './getRestaurants';
import { getRestaurantById } from './getRestaurantById';

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({ requestStatus: 'idle' }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => 
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        console.log(payload);
        entityAdapter.setOne(state, payload);
      })
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];
export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectRequestStatus } = restaurantsSlice.selectors;