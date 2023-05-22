import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const token = {
  set(token) {
    axios.defaults.headers.common.Token = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Token = "";
  },
};

console.log(axios.defaults.headers);
export const fetchToken = createAsyncThunk(
  "registration/fetchToken",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios("/token");
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUsers = createAsyncThunk(
  "registration/addUsers",
  async (user, { rejectWithValue }) => {
    console.log(user);
    try {
      const { data } = await axios.post("/users", user, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
