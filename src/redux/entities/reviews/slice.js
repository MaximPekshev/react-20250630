import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getReviewsByRestaurantId } from './getReviewsByRestaurantId';

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState({ requestStatus: 'idle' }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
  }
});

const selectReviewsSlice = (state) => state[reviewsSlice.name];
export const {
  selectIds: selectReviewIds,
  selectById: selectReviewById
} = entityAdapter.getSelectors(selectReviewsSlice);

export const { selectRequestStatus } = reviewsSlice.selectors;