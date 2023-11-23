import { createSlice } from '@reduxjs/toolkit';
import {
  getResetCode,
  setNewPassword,
} from '../../actions/auth/forgotPassword';

export const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
    getCodeLoading: false,
    getCodeSuccess: false,
    getCodeError: false,
    getCodeErrors: null,
  },
  reducers: {
    clearState: (state) => {
      state.loading = false;
      state.error = false;
      state.errors = null;
      state.success = false;
      return state;
    },
    clearGetCodeState: (state) => {
      state.getCodeLoading = false;
      state.getCodeError = false;
      state.getCodeErrors = null;
      state.getCodeSuccess = false;
      return state;
    },
  },
  extraReducers: {
    [setNewPassword.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [setNewPassword.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.loading = false;
      return state;
    },
    [setNewPassword.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
    [getResetCode.pending]: (state) => {
      state.getCodeLoading = true;
      return state;
    },
    [getResetCode.fulfilled]: (state) => {
      state.getCodeSuccess = true;
      state.getCodeError = false;
      state.getCodeLoading = false;
      return state;
    },
    [getResetCode.rejected]: (state, { payload }) => {
      state.getCodeSuccess = false;
      state.getCodeError = true;
      state.getCodeLoading = false;
      state.getCodeErrors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState, clearGetCodeState } = forgotPasswordSlice.actions;

export const forgotPasswordSelector = (state) => state.forgotPassword;
