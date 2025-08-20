import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getUsers } from './getUsers';
import { REQUEST_STATUS } from "../../constants"

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState({ requestStatus: REQUEST_STATUS.IDLE }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
  }
});

const selectUsersSlice = (state) => state[usersSlice.name];
export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
} = entityAdapter.getSelectors(selectUsersSlice);

export const { selectRequestStatus } = usersSlice.selectors;