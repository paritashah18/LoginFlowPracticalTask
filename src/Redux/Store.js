import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/authSlice'
import todoReducer from './Slices/todoSlice'
import eccomerceReducer from './Slices/eccomerce'

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    todo:todoReducer,
    eccomerce:eccomerceReducer
  },
})