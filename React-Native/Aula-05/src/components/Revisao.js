import {Text, TextInput, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

const Revisao = ( {desestruturacao, outraProp}) =>{
 
 const [tarefa, setTarefa] = useState("");
const [listaTarefa, setListaTarefa] = useState(['Tarefa 1'])
 //const lista = ['Estudar React Native', 'Estudar React', 'Estudar Java'] 

  const addTarefa = () =>{
    console.log(tarefa)

    setListaTarefa([...listaTarefa, tarefa])
  }


  return(
    <>
    <Text>{desestruturacao}</Text>
    <Text>{outraProp}</Text>
    {/* {lista.map(tarefa => <Text>{tarefa}</Text>)} */}

    <TextInput placeholder='Cadastre uma tarefa' style={styles.input} value={tarefa} onChangeText={setTarefa}/>
    <Button title='Clique Aqui' onPress={addTarefa}/>

    {listaTarefa.map((tarefa, index) => <Text key={index}>{tarefa}</Text>)}
    </>
  )
}

export default Revisao;


const styles = StyleSheet.create({
input: {
  borderWidth: 5,
  borderColor: 'black',
  width: '80%',
  borderRadius: 5,
  padding: 5,
}

})