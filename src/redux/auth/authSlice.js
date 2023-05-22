import { createSlice } from '@reduxjs/toolkit';
import { fetchToken, addUser } from './auth-operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    success: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchToken.fulfilled, (state, { payload }) => {
        state.token = payload.token;
      })
      .addCase(fetchToken.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.success = payload.success;
      })
      .addCase(addUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
