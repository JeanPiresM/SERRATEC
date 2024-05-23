import { useState } from "react"
import { View, Text, Button, StyleSheet, TextInput} from "react-native"

export const Contador = ({count, setCount}) => {

const [indice, setIndice] = useState(0)

  const incrementar = () => {

  const numeroIndice = parseInt(indice);
  
  // setCount(count + 1);
  setCount(count + numeroIndice);

  //setCount(prevState => prevState + 1)
  //setCount(prevState => prevState + 1)
  //setCount(prevState => prevState + 1)
//  console.log("CONTADOR: ", count + numeroIndice);


  // console.log("CONTADOR: ", count + 1);
}

const decrementar = () =>{
const numeroIndice = parseInt(indice)

  setCount(count - numeroIndice);
}

return(
<View >
  <TextInput placeholder="Selecione o Indice(De quanto em quanto vai ser o incremento)" value={indice} onChangeText={setIndice}/>
  <Text style={styles.count}>{count}</Text>
  <Button title="Incrementar" onPress={incrementar}/>
  <View style={styles.botaoZerar}>
    <Button title="Decrementar" onPress={decrementar}/>
  </View>
</View>
)
}

const styles = StyleSheet.create({
  count:{
    textAlign: 'center',
    fontSize: 150
  },
  botaoZerar: {
  marginTop: 50
}

})
