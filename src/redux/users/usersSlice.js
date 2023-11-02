import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './users-operations';

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
        state.isLoading = false;
        state.totalPages = payload.total_pages;
        if (payload.page === 1) {
          state.users = [...payload.users];
          return;
        }
        state.users = [...state.users, ...payload.users];
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const usersReducer = usersSlice.reducer;
