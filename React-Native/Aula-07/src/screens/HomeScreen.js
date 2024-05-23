import { View, Text, Button, StyleSheet } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

export default HomeScreen = ({ navigation }) => {


  
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={24} color="black" />
      <Text style={styles.texto}>HomeScreen</Text>
      <Button title="Ir para perfil" onPress={() => navigation.navigate('Profile')}/>
     <View style={styles.botaoAbaixo}>
      <Button title="Ir para o Contador" onPress={() => navigation.navigate('Contador')}/>
     </View>
     <View style={styles.botaoAbaixo}>
      <Button title="Ir para a lista" onPress={() => navigation.navigate('Lista')}/>
     </View>
    </View>
  )

}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'lightblue',
  justifyContent: 'center',
  alignItems: 'center'
},
texto: {
  fontSize: 50,
  fontWeight: 'bold'
}, 
botaoAbaixo: {
  marginTop: 20
}

})