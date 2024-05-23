import {View, Text, Button, StyleSheet} from 'react-native'

export default HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Ir para o Contador" onPress={() => navigation.navigate('Contador')}/>
     <View style={styles.botaoAbaixo}>
      <Button title="Ir para o Desafio" onPress={() => navigation.navigate('Desafio')}/>
     </View>
     <View style={styles.botaoAbaixo}>
      <Button title="Ir para a Revisao" onPress={() => navigation.navigate('Revisao')}/>
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