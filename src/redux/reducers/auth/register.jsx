import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from '../../actions/auth/register';

export const registerSlice = createSlice({
  name: 'register',
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
    [registerUser.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [registerUser.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.loading = false;
      return state;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = registerSlice.actions;

export const registerSelector = (state) => state.register;