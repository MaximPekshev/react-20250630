import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "./slice";


export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (_, { rejectWithValue }) => {
        const response = await fetch("http://localhost:3001/api/users");
        const result = await response.json();

        if (!result.length) {
            return rejectWithValue("No users found");
        }
        
        return result;
    },
    {
        condition: (_, {getState}) => {
            const state = getState();
            const usersIds = selectUsersIds(state);
            return usersIds.length === 0;
        },
    }
)