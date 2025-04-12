// import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import CustomInput from '../CustomComponent/CustomInput';
// import CustomButton from '../CustomComponent/CustomButton';
// import { useSelector, useDispatch } from 'react-redux'
// import { registerUser } from '../../Redux/Slices/Register';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Register() {
//   const Navigation = useNavigation();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [register, setRegister] = useState(false);

//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.register);
//   const emailRegx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ;


//   const handleRegister = async () => {
//     if (!name || !password || !confirmPassword) {
//       Alert.alert('Please fill all the details');
//       return;
//     }
  
//     const isEmailExist = users?.users?.find((user) => user.email === email);
//     if (isEmailExist) {
//       Alert.alert('Email already exists');
//       return;
//     }
  
//     if (!emailRegx.test(email)) {
//       Alert.alert('Email is not valid');
//       return;
//     }
  
//     if (password !== confirmPassword) {
//       Alert.alert('Password and Confirm password do not match');
//       return;
//     }
  
//     const newUser = {
//       id: Date.now(),
//       username: name,
//       email: email,
//       password: password,
//     };
  
//     try {
//       // Get existing data
//       const storedData = await AsyncStorage.getItem('StoreRegisterUser');
//       const convertData = storedData ? JSON.parse(storedData) : [];
  
//       // Add new user
//       convertData.push(newUser);
  
//       // Save updated data
//       await AsyncStorage.setItem('StoreRegisterUser', JSON.stringify(convertData));
  
//       // Update redux
//       dispatch(registerUser(newUser));
  
//       Alert.alert('User registered successfully');
  
//       // Clear fields
//       setName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
  
//       Navigation.navigate('Login');
//     } catch (error) {
//       console.log('AsyncStorage error:', error);
//       Alert.alert('Something went wrong');
//     }
//   };
  

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text style={{textAlign: 'center', fontSize: 20}}>Register</Text>
//         <CustomInput
//           value={name}
//           placeholder={'Enter Name'}
//           placeholderTextColor={'black'}
//           onChangeText={text => {
//             setName(text);
//           }}
//         />

//         <CustomInput
//           value={email}
//           placeholder={'Enter Email'}
//           placeholderTextColor={'black'}
//           keyboardType="email-address"
//           onChangeText={text => {
//             setEmail(text);
//           }}
//         />

//         <CustomInput
//           value={password}
//           placeholder={'Enter Password'}
//           placeholderTextColor={'black'}
//           onChangeText={text => {
//             setPassword(text);
//           }}
//         />

//         <CustomInput
//           value={confirmPassword}
//           placeholder={'Enter Confirm Password'}
//           placeholderTextColor={'black'}
//           onChangeText={text => {
//             setConfirmPassword(text);
//           }}
//         />
//         <CustomButton title={'Register'} style={styles.register} onPress={handleRegister} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   register: {
//     margin: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: '#615050',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomComponent/CustomInput';
import CustomButton from '../CustomComponent/CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, registerUsers } from '../../Redux/Slices/authSlice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const Navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, setRegister] = useState(false);

  const users = useSelector((state) => state.auth.users);
  console.log(users);
  const dispatch = useDispatch();

  const emailRegx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ ;


  const handleRegister = async () => {
   if(!name || !email || !password)
   {
    Alert.alert('Please enter all the details');
    return;
   }
   if(password !== confirmPassword)
   {
    Alert.alert('Plese enter correct passwords');
    return;
   }
   if(!emailRegx.test(email))
   {
    Alert.alert('Please enter correct email');
    return;
   }
   const isAlreadyRegistered = users?.find((user) => user?.email == email );
   if(isAlreadyRegistered )
   {
    Alert.alert('User already exists');
    return;
   }

   const userData = {
    username:name,
    email:email,
    password:password
   }
   const updatedData = [...users,userData];
   console.log('updatedData',updatedData);
   await AsyncStorage.setItem('RegisterData',JSON.stringify(updatedData));
   
   dispatch(registerUsers(userData));
   Alert.alert('Successfully Registered');
   Navigation.navigate('Login');


  };
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{textAlign: 'center', fontSize: 20}}>Register</Text>
        <CustomInput
          value={name}
          placeholder={'Enter Name'}
          placeholderTextColor={'black'}
          onChangeText={text => {
            setName(text);
          }}
        />

        <CustomInput
          value={email}
          placeholder={'Enter Email'}
          placeholderTextColor={'black'}
          keyboardType="email-address"
          onChangeText={text => {
            setEmail(text);
          }}
        />

        <CustomInput
          value={password}
          placeholder={'Enter Password'}
          placeholderTextColor={'black'}
          onChangeText={text => {
            setPassword(text);
          }}
        />

        <CustomInput
          value={confirmPassword}
          placeholder={'Enter Confirm Password'}
          placeholderTextColor={'black'}
          onChangeText={text => {
            setConfirmPassword(text);
          }}
        />
        <CustomButton title={'Register'} style={styles.register} onPress={handleRegister} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  register: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#615050',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
