import { createSlice } from '@reduxjs/toolkit';
import { getWalletTransactions } from '../../actions/wallet/transactions';

export const getTransactionSlice = createSlice({
  name: 'getTransaction',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
    transactions: [],
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
    [getWalletTransactions.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getWalletTransactions.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.transactions = payload;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [getWalletTransactions.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      // state.errors = payload.error || payload;
      return state;
    },
  },
});

export const { clearState } = getTransactionSlice.actions;

export const getTransactionSelector = (state) => state.getTransaction;
