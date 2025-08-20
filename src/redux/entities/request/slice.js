import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from "../../constants"

export const requestSlice = createSlice({
    name: 'request',
    initialState: {},
    selectors: {
        selectRequestStatus: (state, requestId) => state[requestId] || REQUEST_STATUS.IDLE,
        selectIsLoading: (state, requestId) => state[requestId] === REQUEST_STATUS.PENDING,
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(({ type }) => type.endsWith('pending'), (state, { meta }) => {
                state[meta.requestId] = REQUEST_STATUS.PENDING;
            })
            .addMatcher(({ type }) => type.endsWith('rejected'), (state, { meta }) => {
                state[meta.requestId] = REQUEST_STATUS.REJECTED;
            })
            .addMatcher(({ type }) => type.endsWith('fulfilled'), (state, { meta }) => {
                state[meta.requestId] = REQUEST_STATUS.FULFILLED;
            });
    }
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;