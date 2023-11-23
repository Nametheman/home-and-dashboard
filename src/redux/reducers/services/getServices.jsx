import { createSlice } from '@reduxjs/toolkit';
import { getServices } from '../../actions/services/getServices';

export const getServicesSlice = createSlice({
  name: 'getServices',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
    services: [],
  },
  reducers: {
    clearState: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      state.services=[];
      return state;
    },
  },
  extraReducers: {
    [getServices.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getServices.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.services = payload;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [getServices.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      // state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = getServicesSlice.actions;

export const getServicesSelector = (state) => state.getServices;
