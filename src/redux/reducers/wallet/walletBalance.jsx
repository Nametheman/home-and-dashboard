import { createSlice } from '@reduxjs/toolkit';
import { getWalletBalance } from '../../actions/wallet/walletBalance';

export const walletBalanceSlice = createSlice({
  name: 'walletBalance',
  initialState: {
    loading: false,
    success: false,
    walletBalance: 0,
  },
  reducers: {
    clearState: (state) => {
      state.success = true;
      state.loading = false;
      state.walletBalance = 0;
      return state;
    },
  },
  extraReducers: {
    [getWalletBalance.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getWalletBalance.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.walletBalance = payload.balance;
      state.loading = false;
      return state;
    },
    [getWalletBalance.rejected]: (state) => {
      state.loading = false;
      return state;
    },
  },
});

export const { clearState } = walletBalanceSlice.actions;

export const walletBalanceSelector = (state) => state.walletBalance;
