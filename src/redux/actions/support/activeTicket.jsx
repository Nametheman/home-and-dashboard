import { createAsyncThunk } from '@reduxjs/toolkit';

export const replyTicket = createAsyncThunk(
  'reply/single/ticket',
  async (ticket, thunkAPI) => {
    try {
      console.log(ticket.supportId);
      const user = JSON.parse(localStorage.getItem('user'));
      // const { supportId } = ticket;
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}support/${ticket?.supportId}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'client-id': user?.clientId,
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(ticket),
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
