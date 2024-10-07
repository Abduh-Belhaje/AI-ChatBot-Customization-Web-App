import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Create async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData);

      //   const response = await axios.post("/api/login", userData);
      //   return response.data; // Assuming the API returns user data
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error
    }
  }
);

// Create slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null; // Reset error on logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null; // Reset error
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload; // Set user data
        state.loading = false; // Reset loading state
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false; // Reset loading state
        state.error = action.payload; // Set error message
      });
  },
});

// Action creators
export const { logout } = authSlice.actions;

export default authSlice.reducer;
