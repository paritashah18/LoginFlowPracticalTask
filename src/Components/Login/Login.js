import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomComponent/CustomInput';
import CustomButton from '../CustomComponent/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {currentUser} from '../../Redux/Slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getUserData = useSelector(state => state.auth.users);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const LoginUser = async () => {
    try {
      const isUserRegistered = getUserData.find(
        (user) => user.email === email && user.password === password,
      );
      if (!email || !password) {
        Alert.alert('please enter all the details');
      }
      if (isUserRegistered) {
        dispatch(currentUser(isUserRegistered));
        await AsyncStorage.setItem(
          'CurrentUser',
          JSON.stringify(isUserRegistered),
        );
      } else {
        Alert.alert('Please register your self');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <CustomInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder={'Enter Email'}
        placeholderTextColor={'gray'}
      />
      <CustomInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder={'Enter Password'}
        placeholderTextColor={'gray'}
        secureTextEntry
      />

      <CustomButton
        title={'Login'}
        textStyle={styles.loginButton}
        onPress={LoginUser}
      />

      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          New here? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 32,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#4e91fc',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  registerBtn: {
    marginTop: 24,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#666',
  },
  registerLink: {
    color: '#4e91fc',
    fontWeight: 'bold',
  },
});
