import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk(
    'dishes/getDishById',
    async (id, { getState, dispatch, rejectWithValue }) => {
        const responce = await fetch(`http://localhost:3001/api/dish/${id}`);
        const result = await responce.json();
        if (!result) {
            return rejectWithValue('Dish not found');
        }
        return result;
    },
    {
        condition: (id, { getState }) => {
            const state = getState();
            const dish = selectDishById(state, id);
            return !dish;
        }
    }
);