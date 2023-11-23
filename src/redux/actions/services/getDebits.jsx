import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDebits = createAsyncThunk(
  "transactions/billing",
  async ({ startDate, endDate }, thunkAPI) => {
    console.log(
      "🚀 ~ file: getDebits.jsx:7 ~ startDate,endDate",
      startDate,
      endDate
    );
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}transactions/billing/${
          user.clientId
        }?&startDate=${startDate || ""}&endDate=${endDate || ""}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // 'client-id': user.clientId,
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          // body: JSON.stringify(body),
        }
      );
      let data = await response.json();
      if (data.data) {
        return data.data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection.",
      });
    }
  }
);
