import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios("/users", {
        page,
        count: 6,
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
