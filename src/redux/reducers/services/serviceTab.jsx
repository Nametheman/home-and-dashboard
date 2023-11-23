import { createSlice } from '@reduxjs/toolkit';

export const serviceTabSlice = createSlice({
  name: 'serviceTab',
  initialState: {
    activeTab: 'my services',
  },
  reducers: {
    handleActiveTab: (state, { payload }) => {
      state.activeTab = payload;
      return state;
    },
  },
});

export const { handleActiveTab } = serviceTabSlice.actions;

export const serviceTabSelector = (state) => state.serviceTab;
