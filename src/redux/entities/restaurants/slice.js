import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../materials/normalized-mock';

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
  }
});

export const { selectRestaurantsIds, selectRestaurantById } = restaurantsSlice.selectors;