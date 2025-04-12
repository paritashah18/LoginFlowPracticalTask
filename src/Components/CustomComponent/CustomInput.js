import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  keyboardType = 'default',
  ...rest
}) => {
  return (
    <View style={styles.container}>
   
      <TextInput
        placeholderTextColor={placeholderTextColor}
        style={styles.Input}
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        keyboardType={keyboardType}
      
        {...rest}
      />
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  Input: {
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
});
