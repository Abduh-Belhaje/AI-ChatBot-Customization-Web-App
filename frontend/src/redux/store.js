import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"; // Import your auth slice
import userReducer from "../features/userSlice"; // Import your auth slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
