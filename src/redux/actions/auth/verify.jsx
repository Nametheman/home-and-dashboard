import { createAsyncThunk } from '@reduxjs/toolkit';

export const verifyUser = createAsyncThunk(
  'verify/user',
  async (code, thunkAPI) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}verify/code`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'client-id': localStorage.getItem('client-id'),
          },
          body: JSON.stringify({
            code,
            type: 'email',
          }),
        }
      );
      let data = await response.json();
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
