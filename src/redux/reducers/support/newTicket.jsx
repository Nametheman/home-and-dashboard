import { createSlice } from '@reduxjs/toolkit';
import { createTicket } from '../../actions/support/newTicket';

export const newTicketSlice = createSlice({
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
    [createTicket.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [createTicket.fulfilled]: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [createTicket.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = newTicketSlice.actions;

export const newTicketSelector = (state) => state.newTicket;
