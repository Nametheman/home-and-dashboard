import { createAsyncThunk } from '@reduxjs/toolkit';

export const initiateFundWallet = createAsyncThunk(
  'fund/wallet',
  async (body, thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}client/fund/${user.clientId}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'client-id': user.clientId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(body),
        }
      );
      let data = await response.json();
      console.log(data);
      if (data.message === 'Success') {
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

export const verifyFundWallet = createAsyncThunk(
  'verify/fund/wallet',
  async ({ transactionId }, thunkAPI) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}client/fund/${user.clientId}/verify`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'client-id': user.clientId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ transactionId }),
        }
      );
      let data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      if (data.message === 'Success') {
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
