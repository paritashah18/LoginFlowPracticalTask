import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    registerUsers: (state, action) => {
      state.users.push(action.payload);
    },
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state, action) => {
      state.currentUser = null;
    },
  },
 
});

export const {registerUsers, currentUser, logOut} = authSlice.actions;
export default authSlice.reducer;
