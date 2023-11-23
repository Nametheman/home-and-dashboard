import { combineReducers } from '@reduxjs/toolkit';
import { registerSlice } from './auth/register';
import { loginSlice } from './auth/login';
import { verifySlice } from './auth/verify';
import { accountSlice } from './wallet/account';
import { fundWalletSlice } from './wallet/fundwallet';
import { getTransactionSlice } from './wallet/transactions';
import { walletBalanceSlice } from './wallet/walletBalance';
import { sidebarSlice } from './sidebar';
import { getServicesSlice } from './services/getServices';
import { addServicesSlice } from './services/addServices';
import { removeServicesSlice } from './services/removeServices';
import { supportTabSlice } from './support/supportTab';
import { serviceTabSlice } from './services/serviceTab';
import { newTicketSlice } from './support/newTicket';
import { getTicketSlice } from './support/getTicket';
import { activeTicketSlice } from './support/activeTicket';
import { contactUsSlice } from './contactBox';
import { forgotPasswordSlice } from './auth/forgotPassword';
import { debitTransactionsSlice } from './services/getDebits';


export const reducer = combineReducers({
  register: registerSlice.reducer,
  verify: verifySlice.reducer,
  login: loginSlice.reducer,
  account: accountSlice.reducer,
  fundWallet: fundWalletSlice.reducer,
  getTransaction: getTransactionSlice.reducer,
  getServices: getServicesSlice.reducer,
  addServices: addServicesSlice.reducer,
  removeServices: removeServicesSlice.reducer,
  walletBalance: walletBalanceSlice.reducer,
  sidebar: sidebarSlice.reducer,
  supportTab: supportTabSlice.reducer,
  serviceTab: serviceTabSlice.reducer,
  newTicket: newTicketSlice.reducer,
  getTicket: getTicketSlice.reducer,
  activeTicket: activeTicketSlice.reducer,
  contactUs: contactUsSlice.reducer,
  forgotPassword: forgotPasswordSlice.reducer,
  debitTrack: debitTransactionsSlice.reducer,
});
