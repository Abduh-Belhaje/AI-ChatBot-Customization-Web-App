import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moreInfo: {
    fullName: "",
    role: "",
    typeOfAds: "",
  },
  businessInfo: {
    name: "",
    type: "",
    department: "",
  },
  appAndCompany: {
    type: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { section, field, value } = action.payload;
      state[section][field] = value;
    },
  },
});

export const { setFormData } = userSlice.actions;
export default userSlice.reducer;
