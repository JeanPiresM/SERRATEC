import { useState } from "react"
import { ScrollView, Text, Button, StyleSheet, TextInput, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default Contador = () => {

  const [count, setCount] = useState(0)
  const [indice, setIndice] = useState('')

  const incrementar = () => {
    const numeroIndice = parseInt(indice);

    setCount(count + numeroIndice);
  }

  const decrementar = () => {
    const numeroIndice = parseInt(indice)

    setCount(count - numeroIndice);
  }

  return (
    <ScrollView >
      <MaterialCommunityIcons name="counter" size={24} color="black" />
      <TextInput placeholder="Selecione o Indice(De quanto em quanto vai ser o incremento)" value={indice} onChangeText={setIndice} />
      <Text style={styles.count}>{count}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <View style={styles.botaoZerar}>
        <Button title="Decrementar" onPress={decrementar} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  count: {
    textAlign: 'center',
    fontSize: 150
  },
  botaoZerar: {
    marginTop: 50
  }

})
