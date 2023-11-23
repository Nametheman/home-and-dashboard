import { createSlice } from '@reduxjs/toolkit';
import { getDebits } from '../../actions/services/getDebits';

export const debitTransactionsSlice = createSlice({
    name: 'debitTrack',
    initialState: {
      loading: false,
      success: false,
      debitTrack: [],
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
      [getDebits.pending]: (state) => {
        state.loading = true;
        return state;
      },
      [getDebits.fulfilled]: (state, { payload }) => {
        state.success = true;
        state.debitTrack = payload;
        state.error = false;
        state.errors = null;
        state.loading = false;
        return state;
      },
      [getDebits.rejected]: (state, { payload }) => {
        state.success = false;
        state.error = true;
        state.loading = false;
        // state.errors = payload.error || payload;
        return state;
      },
    },
  });
  
  export const { clearState } = debitTransactionsSlice.actions;

  console.log(debitTransactionsSlice.getInitialState(state => state))
  
  export const getDebitTransactionSelector = (state) => state.debitTrack;