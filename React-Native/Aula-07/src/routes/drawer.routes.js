import { createDrawerNavigator } from '@react-navigation/drawer'
import Contador from '../components/Contador';
import Lista from '../components/Lista';
import FormScreen from '../screens/FormScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer(){

  return(
    <Navigator>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='Profile' component={ProfileScreen}/>
      <Screen name='Lista' component={Lista}/>
      <Screen name='Contador' component={Contador}/>
      <Screen name='Formulario' component={FormScreen} />
    </Navigator>
  )

}