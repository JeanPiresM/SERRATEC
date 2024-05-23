import { StatusBar } from "expo-status-bar";
import { Image, Text, View, } from "react-native";
import styles from "./assets/style/styles";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textoNome}>Jean Pires</Text>
        <Text style={styles.textoCargo}>Programador Full-Stack</Text>
        <Image source={require("./assets/img.svg.png")} style={styles.imagem} />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
