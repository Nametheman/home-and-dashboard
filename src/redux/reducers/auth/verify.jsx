import { createSlice } from '@reduxjs/toolkit';
import { verifyUser } from '../../actions/auth/verify';

export const verifySlice = createSlice({
  name: 'verify',
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
    [verifyUser.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [verifyUser.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.loading = false;
      return state;
    },
    [verifyUser.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = verifySlice.actions;

export const verifySelector = (state) => state.verify;
