import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, displayName, photoURL } = action.payload;
      state.user = { email, displayName, photoURL };
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.isAuth = false;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
