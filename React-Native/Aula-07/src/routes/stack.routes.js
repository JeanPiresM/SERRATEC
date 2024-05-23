import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import Contador from "../components/Contador"
import Lista from "../components/Lista"
import { createStackNavigator } from "@react-navigation/stack"

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {

  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen name="Home" component={HomeScreen}
      options={{title: "Página Inicial"
    }}
      />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Lista" component={Lista}/>
      <Screen name="Contador" component={Contador} />
    </Navigator>
  )
}