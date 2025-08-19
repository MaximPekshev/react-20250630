import { createAsyncThunk } from "@reduxjs/toolkit";


export const getDishesByRestaurantId = createAsyncThunk(
    'dishes/getDishes',
    async (id, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${id}`);
        const result = await response.json();

        if (!result.length) {
            return rejectWithValue('No dishes found');
        }
        
        return result;
    }
);