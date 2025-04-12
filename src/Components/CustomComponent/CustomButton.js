import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress,style,textStyle}) => {
  return (
    <View>
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton