import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../actions/auth/login';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = false;
      state.errors = null;
      state.success = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [loginUser.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.loading = false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = loginSlice.actions;

export const loginSelector = (state) => state.login;
