import { useEffect } from 'react';
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const users = useSelector(state => state.auth.currentUser);
    console.log('users_)',users);

  // useEffect(() =>
  // {
    // const users = useSelector(state => state.auth.currentUser);
    // console.log('users_)',users);

  // },[]);
  return (
    <View>
      <Text>{users.email}</Text>
      <Text>{users.username}</Text>

    </View>
  )
}

export default Profile;