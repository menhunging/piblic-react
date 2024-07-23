import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  isLoggedIn: true, // авторизирован
  isConfirming: true, // адресс почты подтвержден
  isConfirmingPhone: true, // телефон подтвержден
  status: "ok", // "rejected" | "additional" | "underverification" | "ok";
};

export const authReducers = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logged: (state) => {
      state.isLoggedIn = true;
    },
  },
});

// export const {} = authReducers.actions;
export default authReducers.reducer;
