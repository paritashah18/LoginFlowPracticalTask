import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './src/Navigation/Auth';
import './gesture-handler';
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store';


export default function App() {
  return (
    <Provider store={store}>
    <Auth />
    </Provider>
  );
}
