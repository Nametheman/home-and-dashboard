import { createAsyncThunk } from '@reduxjs/toolkit';

export const createContactUs = createAsyncThunk(
  'create/new/contact',
  async (body, thunkAPI) => {
    try {
      //   const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}contact`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          //   'client-id': user?.clientId,
          //   Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      });
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