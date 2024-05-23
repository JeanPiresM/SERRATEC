import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Contador} from './src/components/Contador';
import { Estado } from './src/components/Estado';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Aula - 06 - Aprendendo sobre hooks</Text>
      {/* <Estado/> */}
      {/* <Contador count={count} setCount={setCount}/> */}
      <Contador count={count} setCount={setCount}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 250, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
