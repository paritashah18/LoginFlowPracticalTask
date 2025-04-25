import {createSlice} from '@reduxjs/toolkit';
import { addToDo } from './todoSlice';
const eccomerceSlice = createSlice({
  name: 'eccomerce',
  initialState: {
    addToCart: [],
    removetoCart : []
   },
  reducers: {
    addToCart:(state,action) =>
    {
        const addToCartProducts= {id:Date.now.toString(),data:action.payload}
        state.addToCart.push(addToCartProducts);
    }
 
  },
 
});

export const {addToCart} = eccomerceSlice.actions;
export default eccomerceSlice.reducer;
