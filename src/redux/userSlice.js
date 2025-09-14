import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async ({page,limit}) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch user data");
    }
    const total = response.headers["x-total-count"];
    return { users: response.data, total };
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
    currentPage:1,
    pageSize:5,
    total:0,
  },
  reducers: {
    addNewUser: (state, action) => {
      state.users.push({
        id: state.users.length + 1,
        ...action.payload,
      });
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
      state.total = action.payload.total;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export const { addNewUser, setCurrentPage } = userSlice.actions;
export default userSlice.reducer;
