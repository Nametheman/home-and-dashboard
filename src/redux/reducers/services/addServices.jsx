import { createSlice } from '@reduxjs/toolkit';
import { addNewService } from '../../actions/services/addServices';

export const addServicesSlice = createSlice({
  name: 'addServices',
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
    [addNewService.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [addNewService.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [addNewService.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = addServicesSlice.actions;

export const addServicesSelector = (state) => state.addServices;
