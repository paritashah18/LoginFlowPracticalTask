import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Components/Home/Profile';
import Settings from '../Components/Home/Settings';
import Eccom from '../Components/Home/Eccom';


const Home = () => {
    const bottomTab = createBottomTabNavigator();
  return (
   <bottomTab.Navigator>
   <bottomTab.Screen name='Eccom' component={Eccom}/>
    
   </bottomTab.Navigator>
  )
}

export default Home;