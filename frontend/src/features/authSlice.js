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
      // Uncomment and update when you have the API ready
      // const response = await axios.post("/api/login", userData);
      // return response.data; // Assuming the API returns user data
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data
          ? error.response.data
          : "Something went wrong"
      ); // Handle API error response
    }
  }
);

// Create async thunk for register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      console.log(userData);
      // Simulate API response for testing
      const simulatedResponse = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      };

      // Uncomment this when the API is ready
      // const response = await axios.post("/api/register", userData);
      // return response.data; // Assuming the API returns user data

      return simulatedResponse; // For now, return simulated data
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data
          ? error.response.data
          : "Something went wrong"
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
    // Handle login cases
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true; // Set loading state when login starts
        state.error = null; // Reset any previous errors
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true; // Set authenticated state
        state.user = action.payload; // Store user data
        state.loading = false; // Reset loading state
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false; // Stop loading
        state.error = action.payload || "Login failed"; // Set error message
      });

    // Handle register cases
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true; // Set loading state when register starts
        state.error = null; // Reset any previous errors
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true; // Set authenticated state
        state.user = action.payload; // Store user data
        state.loading = false; // Reset loading state
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false; // Stop loading
        state.error = action.payload || "Registration failed"; // Set error message
      });
  },
});

// Export the logout action
export const { logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
