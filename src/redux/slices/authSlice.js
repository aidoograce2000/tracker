import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  emailForOTP: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    storeEmailForOTP: (state, action) => {
      state.emailForOTP = action.payload;
    },
    clearEmail: (state) => {
      state.emailForOTP = '';
    },
  },
});

export const { signIn, signOut, storeEmailForOTP, clearEmail } = authSlice.actions;
export default authSlice.reducer;
