import { createAsyncThunk } from '@reduxjs/toolkit';

export const getWalletTransactions = createAsyncThunk(
  'get/wallet/transaction',
  async (thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transactions/${user.clientId}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'client-id': user.clientId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      let data = await response.json();
      if (data.data) {
        console.log(data)
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: 'Failed! To establish connection.',
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

