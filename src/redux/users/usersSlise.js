import { fetchUsers } from './users-operations';
import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalPages: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.totalPages = payload.total_pages;
        state.users = [...state.users, ...payload.users];
        state.error = null;
      })

      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
