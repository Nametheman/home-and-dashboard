import { createSlice } from '@reduxjs/toolkit';
import {
  initiateFundWallet,
  verifyFundWallet,
} from '../../actions/wallet/fundwallet';

export const fundWalletSlice = createSlice({
  name: 'fundWallet',
  initialState: {
    loading: false,
    success: false,
    error: false,
    errors: null,
    redirectUrl: '',
    transactionId: '',
    showModal: false,
    showVerifyModal: false,
    verifyLoading: false,
    verifySuccess: false,
    verifyError: false,
    verifyErrors: null,
  },
  reducers: {
    clearState: (state) => {
      state.success = false;
      state.error = false;
      state.loading = false;
      state.errors = null;
      state.redirectUrl = '';
      state.transactionId = '';
      state.showModal = false;
      return state;
    },
    clearVerifyState: (state) => {
      state.verifySuccess = false;
      state.verifyError = false;
      state.verifyLoading = false;
      state.verifyErrors = null;
      state.showVerifyModal = false;
      return state;
    },
    toggleShowModal: (state) => {
      state.showModal = !state.showModal;
      return state;
    },
    toggleShowVerifyModal: (state) => {
      state.verifyShowModal = !state.verifyShowModal;
      return state;
    },
  },
  extraReducers: {
    [initiateFundWallet.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [initiateFundWallet.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.redirectUrl = payload.url;
      state.transactionId = payload.reference;
      state.error = false;
      state.errors = null;
      state.loading = false;
      return state;
    },
    [initiateFundWallet.rejected]: (state, { payload }) => {
      state.success = false;
      state.error = true;
      state.loading = false;
      state.errors = payload.error || payload;
      return state;
    },
    [verifyFundWallet.pending]: (state) => {
      state.verifyLoading = true;
      state.showVerifyModal = true;
      return state;
    },
    [verifyFundWallet.fulfilled]: (state) => {
      state.verifySuccess = true;
      state.verifyError = false;
      state.verifyErrors = null;
      state.verifyLoading = false;
      return state;
    },
    [verifyFundWallet.rejected]: (state, { payload }) => {
      state.verifySuccess = false;
      state.verifyError = true;
      state.verifyLoading = false;
      state.verifyErrors = payload.error || payload;
      return state;
    },
  },
});

export const {
  toggleShowModal,
  toggleShowVerifyModal,
  clearVerifyState,
  clearState,
} = fundWalletSlice.actions;

export const fundWalletSelector = (state) => state.fundWallet;
