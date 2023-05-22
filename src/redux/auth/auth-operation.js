import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL =
  ' https://frontend-test-assignment-api.abz.agency/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchToken = createAsyncThunk(
  'auth/fetchToken',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/token');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'auth/addUser',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
