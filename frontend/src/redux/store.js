import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"; // Import your auth slice

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
