import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default RegisterScreen = ({navigation}) => {
  
  const navLogin = () => {
    navigation.navigate('Login')
   }
   
  return (
    <View style={styles.container}>
      <Entypo name="facebook" size={60} color="white" />
      <View style={styles.containerInput}>
      <TextInput placeholder="Nome do Usuario" keyboardType="default" />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="MeuEmail@email.com"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Senha(Minimo de 6 caracteres)"
          secureTextEntry={true}
        />
      </View>
     {/* <TouchableOpacity>
      <Text></Text>
     </TouchableOpacity> */}
      <View style={styles.containerBotao}>
        <Button title="Cadastre-se" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#023e7d",
  },
  containerBotao: {
    marginTop: 10,
  },
  containerInput:{
    marginTop: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    width: 210,
    backgroundColor: "white",
  }

});
