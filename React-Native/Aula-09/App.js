import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Image, Text} from 'react-native';
import axios from 'axios'

export default function App() {

  const [gatinho, setGatinho] = useState();

  // async function getGatinho(){}
  const requisicao = async () => {
  //   console.log("==================================")
  //   console.log("A função esta funcionando!")
  //   console.log("==================================")
  //   const myPromise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       reject("Promise resolvida com sucesso")
  //     }, 1000)
  //     // if(condicao){
  //     //   resolve()
  //     // }else{
  //     //   reject()
  //     // }
  //   }
  // )
  // myPromise
  // .then(response => console.log(response))
  // .catch(erro => console.log("Função NÃO FOI RESOLVIDA"))


//   fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//   .then(resp => resp.json())
//   .then(dados => {
//         setGatinho(dados[0]);
        
//   })
//   .catch(err => console.log(err))

//   const dados = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  
//   const gato = await dados.json();
//   console.log("DADOS: " , gato[0].id)
//   }

// useEffect(() => {
//   requisicao();
// }, [])

try{
  const {data} = await axios.get("https://api.thecatapi.com/v1/images/search")
  console.log("axios", data)
}catch(err){

}
  }
    return (
      <View style={styles.container} >
        <View  style={styles.imgContainer}>
       <Image source={{uri : gatinho?.url}} style={{width: 300, height: 300}} />
        </View>
       <Text>{gatinho?.id}</Text>
        <View style={{marginTop: 20}}>
        <Button title='Iniciar função de teste!' onPress={requisicao} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    imgContainer: {
      borderColor: 'black',
      borderWidth: 10
    }
  })
