import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Contador from '../components/Contador';
import Lista from '../components/Lista';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator();

export default function Tab() {

  return (
    <Navigator>
      <Screen name='Home' component={HomeScreen}
       options={{
        title: 'Inicio',
        tabBarIcon: ({size, color}) => (
          <FontAwesome name="home" 
          size={size} 
          color={color} />
        )
       }}
       />
      <Screen name='Perfil' component={ProfileScreen} 
      options={{
        title: 'Inicio',
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="face-woman-profile"
           size={size}
           color={color}/>
        )
       }}/>
      <Screen name='Contador' component={Contador}
       options={{
        title: 'Inicio',
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="counter" size={24} color="black" />
        )
       }} />
      <Screen name='Lista' component={Lista}
       options={{
        title: 'Inicio',
        tabBarIcon: ({size, color}) => (
          <Entypo name="list" size={24} color="black" />
        )
       }} />
    </Navigator>
  )

}
