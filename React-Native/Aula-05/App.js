import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Revisao from './src/components/Revisao';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aula-05-React-Native</Text>
      <Text>Revisão</Text>
      <Revisao desestruturacao="Sou uma propriedade" outraProp="Sou outra propriedade"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,250,250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
