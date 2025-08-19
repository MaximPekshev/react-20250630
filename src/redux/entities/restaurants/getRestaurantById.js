import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantById = createAsyncThunk(
    'restaurants/getRestaurantById',
    async (id, { getState, dispatch, rejectWithValue }) => {
        const responce = await fetch(`http://localhost:3001/api/restaurant/${id}`);
        const result = await responce.json();
        if (!result) {
            return rejectWithValue('Restaurant not found');
        }
        return result;
    }
);