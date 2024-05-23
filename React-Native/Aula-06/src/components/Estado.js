import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export const Estado = () => {
  
  const [estado, setEstado] = useState(["SOU UM ESTADO", "SOU OUTRO ESTADO"]);

  const [indice, setIndice] = useState(0)

  const alterarValor = () => {

    setIndice((indice + 1) % 2)
    console.log(indice)
  }


  // const alterarTexto = () =>{

  //   setEstado("Outro Texto")
  // }

  // const voltarTexto = () => {

  //   setEstado("Sou um estado")
  // }
  
  return(
    <View>
      <Text>Componente de Estado</Text>
      <Text>{estado[indice]}</Text>
      <Button title='Clique Aqui para Alterar o Valor' onPress={alterarValor} />
      {/* <Button title='Clique Aqui para voltar para o texto Original' onPress={voltarTexto}/> */}
    </View>
  )
}