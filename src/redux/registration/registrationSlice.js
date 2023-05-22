import { createSlice } from "@reduxjs/toolkit";
import { addUsers, fetchToken } from "./registration-operations";

export const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    token: null,
    success: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.token = payload.token;
      })
      .addCase(fetchToken.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUsers.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.success = payload.success;
      })
      .addCase(addUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const registrationReducer = registrationSlice.reducer;
