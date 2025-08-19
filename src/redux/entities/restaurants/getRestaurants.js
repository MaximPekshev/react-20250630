import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from './slice';

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async (_, {getState, dispatch, rejectWithValue}) => {
        const response = await fetch('http://localhost:3001/api/restaurants');

        const result = await response.json();
        if (!result.length) {
            return rejectWithValue('No restaurants found');
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            const state = getState();
            const restaurantsIds = selectRestaurantsIds(state);
            return restaurantsIds.length === 0;
        },
    }
);