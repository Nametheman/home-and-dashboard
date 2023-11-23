import { createSlice } from '@reduxjs/toolkit';
// import { getTicket } from '../../actions/support/activeTicket';

export const activeTicketSlice = createSlice({
  name: 'activeTicket',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
    ticket: null,
  },
  reducers: {
    clearState: (state) => {
      state.success = true;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    handleSetActiveTicket: (state, { payload }) => {
      state.ticket = payload;
      return state;
    },
    handleReply: (state, { payload }) => {
      state.ticket.replies.push(payload);
      return state;
    },
  },
  extraReducers: {
    // [getTicket.pending]: (state) => {
    //   state.loading = true;
    //   return state;
    // },
    // [getTicket.fulfilled]: (state, { payload }) => {
    //   state.success = true;
    //   state.ticket = payload;
    //   return state;
    // },
    // [replyTicket.fulfilled]: (state) => {
    //   state.success = true;
    //   return state;
    // },
    // [replyTicket.rejected]: (state, { payload }) => {
    //   state.success = false;
    //   state.error = true;
    //   state.loading = false;
    //   state.errors = payload.error || payload;
    //   return state;
    // },
  },
});

export const { clearState, handleReply, handleSetActiveTicket } =
  activeTicketSlice.actions;

export const activeTicketSelector = (state) => state.activeTicket;
