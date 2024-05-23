import {Text, TextInput, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

//Aula 05 onde foi feita uma revisão do conteudo, onde foi feito uma lista de tarefa utilizando useState

const Revisao = () =>{
 
 const [tarefa, setTarefa] = useState("");
const [listaTarefa, setListaTarefa] = useState(['Tarefa 1'])
 //const lista = ['Estudar React Native', 'Estudar React', 'Estudar Java'] 

  const addTarefa = () =>{
    console.log(tarefa)

    setListaTarefa([...listaTarefa, tarefa])
  }


  return(
    <>
    {/* <Text>{desestruturacao}</Text>
    <Text>{outraProp}</Text> */}

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