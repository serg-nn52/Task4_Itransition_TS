import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TStateType, TUsersType } from './type';
import {
  fetchRegAction,
  fetchGetUserList,
  fetchLogin,
  fetchRemoveUsers,
  fetchBanUsers,
  fetchUnblockUsers,
} from './thunk';

const initialState: TStateType = {
  loading: false,
  auth: 'loading',
  users: [],
  error: null,
  userID: null,
};
const userSlice = createSlice({
  name: 'reg',
  initialState,
  reducers: {
    setUserID(state: TStateType, action: PayloadAction<string>) {
      state.userID = action.payload;
    },
    resetAuth() {
      return initialState;
    },
  },
  extraReducers: {
    [fetchRegAction.pending.type]: (state: TStateType) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRegAction.fulfilled.type]: (
      state: TStateType,
      action: PayloadAction<TUsersType[]>,
    ) => {
      state.loading = false;
      state.users = action.payload;
      state.auth = true;
    },
    [fetchRegAction.rejected.type]: (state: TStateType) => {
      state.loading = false;
      state.error = null;
    },
    [fetchGetUserList.pending.type]: (state: TStateType) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGetUserList.fulfilled.type]: (
      state: TStateType,
      action: PayloadAction<TUsersType[]>,
    ) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchGetUserList.rejected.type]: (state: TStateType) => {
      state.loading = false;
      state.error = null;
    },
    [fetchLogin.pending.type]: (state: TStateType) => {
      state.loading = true;
      state.error = null;
    },
    [fetchLogin.fulfilled.type]: (state: TStateType) => {
      state.loading = false;
      state.auth = true;
    },
    [fetchLogin.rejected.type]: (state: TStateType) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
    [fetchRemoveUsers.pending.type]: (state: TStateType) => {
      state.loading = true;
      state.error = null;
    },
    [fetchRemoveUsers.fulfilled.type]: (
      state: TStateType,
      action: PayloadAction<TUsersType[]>,
    ) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchRemoveUsers.rejected.type]: (state: TStateType) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
    [fetchBanUsers.pending.type]: (state: TStateType) => {
      state.loading = true;
      state.error = null;
    },
    [fetchBanUsers.fulfilled.type]: (
      state: TStateType,
      action: PayloadAction<TUsersType[]>,
    ) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchBanUsers.rejected.type]: (state: TStateType) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
    [fetchUnblockUsers.pending.type]: (state: TStateType) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUnblockUsers.fulfilled.type]: (
      state: TStateType,
      action: PayloadAction<TUsersType[]>,
    ) => {
      state.loading = false;
      state.users = action.payload;
    },
    [fetchUnblockUsers.rejected.type]: (state: TStateType) => {
      state.loading = false;
      state.error = null;
      state.auth = false;
    },
  },
});

export const { setUserID, resetAuth } = userSlice.actions;
export default userSlice.reducer;
