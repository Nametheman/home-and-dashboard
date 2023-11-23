import { createSlice } from '@reduxjs/toolkit';
import { removeService } from '../../actions/services/removeServices';

export const removeServicesSlice = createSlice({
  name: 'removeServices',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
  },
  reducers: {
    clearState: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
  },
  extraReducers: {
    [removeService.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [removeService.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [removeService.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = removeServicesSlice.actions;

export const removeServicesSelector = (state) => state.removeServices;
