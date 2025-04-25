import {createSlice} from '@reduxjs/toolkit';
const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
   
  },
  reducers: {
   addToDo : (state,action) =>

   {
    const newTodo = {id : Date.now().toString() , text : action.payload}
   state.todos.push(newTodo);
   },
   removeTodo : (state,action) =>
   {
 state.todos = state.todos.filter((todo) => todo.id !== action.payload)
   },
   editTodo: (state, action) => {
    const { id, updatedData } = action.payload;
    const index = state.todos.findIndex((todo) => todo.id === id);
  
    if (index !== -1) {
      state.todos[index] = {
        ...state.todos[index],
        text: updatedData, 
      };
    }
  },
  setTodos: (state,action) =>

   {
    state.todos = action.payload;
   }
   
   
  },
 
});
export const {addToDo,removeTodo,editTodo,setTodos} = todoSlice.actions;
export default todoSlice.reducer;
