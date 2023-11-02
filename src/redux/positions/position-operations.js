import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPositions = createAsyncThunk(
  'positions/fetchPositions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/positions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
