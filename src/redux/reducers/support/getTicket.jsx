import { createSlice } from '@reduxjs/toolkit';
import { getTicket } from '../../actions/support/getTicket';

export const getTicketSlice = createSlice({
  name: 'getTicket',

  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
    tickets: [],
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
    [getTicket.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getTicket.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.tickets = payload;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [getTicket.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = getTicketSlice.actions;

export const getTicketSelector = (state) => state.getTicket;
