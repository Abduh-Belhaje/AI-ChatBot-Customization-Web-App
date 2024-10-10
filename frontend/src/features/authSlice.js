import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Async thunk for Google Authentication
export const googleAuth = createAsyncThunk(
  "auth/googleAuth",
  async (type, { rejectWithValue }) => {
    try {
      // Redirect based on login or registration
      window.location.href = `http://localhost:3000/auth/google/${type}`;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data
          ? error.response.data
          : "Something went wrong with Google Authentication"
      );
    }
  }
);

// Create the slice
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
      .addCase(googleAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.isAuthenticated = true; // Update authentication status
        state.user = action.payload; // Store user data if needed
        state.loading = false;
      })
      .addCase(googleAuth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Google Authentication failed";
      });
  },
});

// Export the logout action
export const { logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
