import { createSlice } from '@reduxjs/toolkit';
import { createContactUs } from '../actions/contactBox';

export const contactUsSlice = createSlice({
  name: 'newTicket',
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
    [createContactUs.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [createContactUs.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [createContactUs.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = contactUsSlice.actions;

export const contactUsSelector = (state) => state.contactUs;
