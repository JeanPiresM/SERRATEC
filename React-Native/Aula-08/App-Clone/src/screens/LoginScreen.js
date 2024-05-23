import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";

export default LoginScreen = ({ navigation }) => {

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const verSenha = () => {
    setMostrarSenha(!mostrarSenha)
  }






  return (
    <View style={styles.container}>
      <Entypo name="facebook" size={60} color="white" />
      <View style={styles.containerInput}>
        <TextInput
          placeholder="MeuEmail@email.com"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Senha(Minimo de 6 caracteres)"
          secureTextEntry={!mostrarSenha}
        />
        <TouchableOpacity onPress={verSenha}>
        <Entypo name="eye" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text>Access</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Register</Text>
      </TouchableOpacity>
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
  containerInput: {
    marginTop: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    width: "70%",
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerBotao: {
    marginTop: 10,
  },
});
