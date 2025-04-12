// import { createSlice } from '@reduxjs/toolkit';

// const registerSlice = createSlice({
//   name: 'register',
//   initialState: {
//     users: [],
//     existingUser: null,
//   },
//   reducers: {
//     registerUser(state, action) {
//       console.log('registeruser',state);
//       state.users.push(action.payload);
//     },
//     loginedUser(state, action) {
//       console.log('logubedstatee',JSON.stringify(action));
//       const foundUser = state.users.find(
//         user =>
//           user.email === action.payload.email &&
//           user.password === action.payload.password
//       );

//       if (foundUser) {
//         state.existingUser = foundUser;
//       } else {
//         console.log('User not found in Redux state');
//       }
//     },
//     logOutUser(state) {
//       state.existingUser = null;
//     },
//   },
// });

// export const { registerUser, loginedUser, logOutUser } = registerSlice.actions;
// export default registerSlice.reducer;
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
