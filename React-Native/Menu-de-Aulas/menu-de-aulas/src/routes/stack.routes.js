import { createStackNavigator } from "@react-navigation/stack"
import Revisao from "../components/Revisao"
import Desafio from "../components/Desafio"
import Contador from "../components/Contador"
import HomeScreen from "../screens/HomeScreen";

const { Navigator, Screen } = createStackNavigator();

export default function Stack() {

  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen name="Home" component={HomeScreen}
      options={{title: "Página Inicial"
    }}
      />
      <Screen name="Desafio" component={Desafio} />
      <Screen name="Revisao" component={Revisao}/>
      <Screen name="Contador" component={Contador} />
    </Navigator>
  )
}