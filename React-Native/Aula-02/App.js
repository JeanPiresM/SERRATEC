import { Text, View, StyleSheet, Image, Button} from "react-native";
import basquete from "./assets/pictures/basquete.png";
import Contador from "./src/pages/Contador";

export default function App() {
  function myFunction(){
    console.log("BOTÃO PRESSIONADO");
  }

  return (
    <View style={styles.container}>
      {/* <Image style={styles.imagem} source={basquete} />
      <Button title="Click Here!!!" onPress={myFunction}/> */}
      <Contador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black"
  },
});
