// // import { View, Text, Pressable } from 'react-native'
// // import React from 'react'
// // import { useDispatch } from 'react-redux'
// // import { currentUser, logOut } from '../../Redux/Slices/authSlice';
// // import { useNavigation } from '@react-navigation/native';

// // const Settings = () => {
// //   const dispatch = useDispatch();
// //   const navigation = useNavigation();
// //   const logoutPress = () =>
// //   {
// //     dispatch(logOut(currentUser));
// //     navigation.reset({
// //       index:0,
// //       routes:[{name:'Login'}]
// //     })
// //   }
// //   return (
// //     <View>
// //       <Text>Settings</Text>

// //       <Pressable onPress={logoutPress}>
// //       <Text>Logout
// //       </Text></Pressable>
// //     </View>
// //   )
// // }

// // export default Settings


// import { View, Text, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import CustomInput from '../CustomComponent/CustomInput';
// import CustomButton from '../CustomComponent/CustomButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToDo, editTodo, removeTodo, setTodos } from '../../Redux/Slices/todoSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Settings = () => {
//   const [addTodo, setAddTodo] = useState('');
//   const [edit, setEdit] = useState(false);
//   const [editId, setEditId] = useState('');
//   const dispatch = useDispatch();
//   const todoData = useSelector((state) => state.todo.todos);

//   // Load todos on first mount
//   useEffect(() => {
//     const loadTodos = async () => {
//       try {
//         const isSaved = await AsyncStorage.getItem('todos');
//         console.log('📦 Loaded from AsyncStorage:', isSaved);

//         if (isSaved !== null) {
//           const data = JSON.parse(isSaved);
//           dispatch(setTodos(data)); // <-- this should be an array
//         }
//       } catch (error) {
//         console.error('❌ Failed to load todos:', error);
//       }
//     };

//     loadTodos();
//   }, []);

//   // Save to AsyncStorage every time todoData changes
//   useEffect(() => {
//     const saveTodos = async () => {
//       try {
//         console.log('💾 Saving to AsyncStorage:', todoData);
//         await AsyncStorage.setItem('todos', JSON.stringify(todoData));
//       } catch (error) {
//         console.error('❌ Failed to save todos:', error);
//       }
//     };

//     saveTodos();
//   }, [todoData]);

//   const createTodo = () => {
//     if (addTodo.trim() === '') return;

//     if (edit) {
//       dispatch(editTodo({ id: editId, updatedData: addTodo }));
//       setEdit(false);
//     } else {
//       dispatch(addToDo(addTodo));
//     }
//     setAddTodo('');
//   };

//   return (
//     <View style={{ padding: 16 }}>
//       <Text style={{ fontSize: 20, marginBottom: 10 }}>ToDo</Text>

//       <CustomInput value={addTodo} onChangeText={(txt) => setAddTodo(txt)} />
//       <CustomButton onPress={createTodo} title={edit ? 'Update TODO' : 'Add TODO'} />

//       {todoData.map((item) => (
//         <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
//           <Text style={{ flex: 1 }}>{item.text}</Text>

//           <TouchableOpacity onPress={() => dispatch(removeTodo(item.id))}>
//             <Text style={{ color: 'red', marginHorizontal: 8 }}>Remove</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => {
//             setEdit(true);
//             setAddTodo(item.text);
//             setEditId(item.id);
//           }}>
//             <Text style={{ color: 'blue' }}>Edit</Text>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </View>
//   );
// };

// export default Settings;
