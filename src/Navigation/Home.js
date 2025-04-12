import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Components/Home/Profile';
import Settings from '../Components/Home/Settings';


const Home = () => {
    const bottomTab = createBottomTabNavigator();
  return (
   <bottomTab.Navigator>
   <bottomTab.Screen name='Profile' component={Profile}/>
   <bottomTab.Screen name='Settings' component={Settings}/>
   </bottomTab.Navigator>
  )
}

export default Home;