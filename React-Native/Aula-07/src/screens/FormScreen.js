import { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function FormScreen(){
  const [nome, setNome] = useState('')

  const [celular, setCelular] = useState()

  const [email, setEmail] = useState()

  const handleForm = () => {
   const contato = {
    nome: nome,
    email: email,
    celular: celular
   }

  //  console.log(contato.nome)
  //  console.log(contato.email)
  //  console.log(contato.celular)

  console.log(contato)

   Alert.alert(contato.celular)
  }

  return(
    <View style={styles.container}>
     <FontAwesome5 name="wpforms" size={50} color="black" />
      <View style={styles.inputContainer}>
      <TextInput value={nome} onChangeText={setNome} style={styles.input} placeholder="Digite seu nome"/>
      </View>
      <View style={styles.inputContainer}>
      <TextInput value={celular} onChangeText={setCelular} style={styles.input}  placeholder="Digite seu telefone" keyboardType="number-pad"/>
      </View>
      <View style={styles.inputContainer}>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="Digite seu e-mail" keyboardType="email-address"/>
      </View>
      <View style={styles.botao}>
      <Button title="Cadastrar" onPress={handleForm} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  botao:{
    width: '40%'
  },
  inputContainer:{
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
  },

})