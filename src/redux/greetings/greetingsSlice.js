import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk(
  "message/fetchGreeting",
  async () => {
    const response = await axios.get(
      "http://localhost:4000/api/greetings/random"
    );
    return response.data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    text: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.text = action.payload;
    });
  },
});

export default greetingSlice.reducer;
