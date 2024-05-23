import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const { Navigator, Screen } = createStackNavigator();

export default Stack = () => {
  return (
    <Navigator>
      <Screen name='Home' component={HomeScreen} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }} />
      <Screen name='Login' component={LoginScreen} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }} />
      <Screen name='Profile' component={ProfileScreen} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }} />
      <Screen name='Register' component={RegisterScreen} options={{
        title: '',
        headerTransparent: true,
        headerShown: false
      }}/>
    </Navigator>
  )

}