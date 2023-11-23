import { createSlice } from '@reduxjs/toolkit';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    showBalance: false,
  },
  reducers: {

    toggleShowBalance: (state) => {
      state.showBalance = !state.showBalance;
      return state;
    },
  },

});

export const {toggleShowBalance, } =
  accountSlice.actions;

export const accountSelector = (state) => state.account;
