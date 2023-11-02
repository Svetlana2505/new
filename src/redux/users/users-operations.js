import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/users?page=${page}&count=5`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
