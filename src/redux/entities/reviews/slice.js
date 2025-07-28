import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../materials/normalized-mock';

const initialState = {
  ids: normalizedReviews.map(review => review.id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {})
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
  }
});

export const { selectReviewsIds, selectReviewById } = reviewsSlice.selectors;