import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import Home from './Home';
import currentUser, { registerUsers } from '../Redux/Slices/authSlice'
const Stack = createStackNavigator();

const Auth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const curretnUser= await AsyncStorage.getItem('CurrentUser');
        const userData= await AsyncStorage.getItem('RegisterData');

          if(userData)
          {
            dispatch(registerUsers(JSON.parse(userData)));

          }
        if (curretnUser) {
          dispatch(currentUser(JSON.parse(curretnUser)));
        }

      } catch (error) {
        console.log('Failed to load user:', error);
      }
    };

    checkUser();
  }, []); // 👈 run only once on mount

  const isUserLogin = useSelector(state => state.auth.currentUser);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isUserLogin ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
