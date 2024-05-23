import { useState } from "react";
import { ScrollView, Text, Button, Image, View } from "react-native";
import { gatinhos } from "../data/gatinhos"
import { Entypo } from '@expo/vector-icons';

export default Lista = () => {


  
  
  // const testes = () => {
    
  //  gatinhos.forEach(gatinho => {
  //   console.log(gatinho.width)
  //  })
  // }

  return (
    <ScrollView >
      <Entypo name="list" size={24} color="black" />
     <Text>Lista Screen</Text>
     {gatinhos.map(item => {
      return(
        <View key={item.id}>
          <Image source={{
          uri: item.url
          }}  
          widh={200} 
          height={200}
          />
          <Text>{item.url}</Text>
          </View>
      )
     })}
        {/* {gatinhos.map(item =>
        <View key={item.id}>
          <Text>{item.url}</Text>
        </View>
      )} */}
   </ScrollView>
  )
}


