import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Slices/eccomerce';

const Eccom = () => {
    const eccomarceData = useSelector((state) => state.eccomerce.addToCart);
    console.log(eccomarceData)
    const [data,setData] = useState([]);
    console.log('data',data);
    const dispatch = useDispatch();
    useEffect(() =>
    {
        fetchData();
    },[]);

    const fetchData = async() =>
    {
        try{
            const response = await fetch('https://reactnative.dev/movies.json');
            
                const data = await response.json();
                console.log(JSON.stringify(data));
                setData(data.movies);
            
        }
        catch(error) {
            console.error(error);
        }
       

    }
    const handleButtonPress = ({item}) =>
    {
        dispatch(addToCart(item))
    }
    const renderItem = ({item}) =>
    {       return (
        <View style={{backgroundColor:'red'}}>
        <Text>{item.title}</Text>
//         <TouchableOpacity onPress={handleButtonPress(item)}>
// <Text>ADD TO CART </Text>
//         </TouchableOpacity>
        </View>
       )
       
    }
  return (
    <View style={{flex:1}}>
      <Text>Eccom</Text>
      <FlatList
       data={data} 
      renderItem={renderItem}
       keyExtractor={(item,index) => item.id?.toString()}

       />
    </View>
  )
}

export default Eccom