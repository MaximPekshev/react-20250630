import { createSlice } from '@reduxjs/toolkit';
import { IDLE, PENDING, REJECTED, FULFILLED } from "../../redux/constants"

export const requestSlice = createSlice({
    name: 'request',
    initialState: {},
    selectors: {
        selectRequestStatus: (state, requestId) => state[requestId] || IDLE,
        selectIsLoading: (state, requestId) => state[requestId] === PENDING,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(({ type }) => type.endsWith('pending'), (state, { meta }) => {
                state[meta.requestId] = PENDING;
            })
            .addMatcher(({ type }) => type.endsWith('rejected'), (state, { meta }) => {
                state[meta.requestId] = REJECTED;
            })
            .addMatcher(({ type }) => type.endsWith('fulfilled'), (state, { meta }) => {
                state[meta.requestId] = FULFILLED;
            });
    }
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;