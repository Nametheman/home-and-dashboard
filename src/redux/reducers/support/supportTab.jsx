import { createSlice } from '@reduxjs/toolkit';

export const supportTabSlice = createSlice({
  name: 'supportTab',
  initialState: {
    activeTab: 'new ticket',
  },
  reducers: {
    handleActiveTab: (state, { payload }) => {
      state.activeTab = payload;
      return state;
    },
  },
});

export const { handleActiveTab } = supportTabSlice.actions;

export const supportTabSelector = (state) => state.supportTab;
