import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Linha from './src/components/Linha';
import Pilar from './src/components/Pilar';
import PontosSeparados from './src/components/PontosSeparados';
import PontosEmLinha from './src/components/PontosEmLinha';
import PontosEmColuna from './src/components/PontosEmColuna'
import Desafio from './src/components/Desafio';

export default function App() {
  return (
     <View style={styles.container}>
      {/* <Pilar /> */}
      {/* <Linha /> */}
      {/* <PontosSeparados /> */}
      {/* <PontosEmLinha/> */}
      {/* <PontosEmColuna/> */}
      <Desafio/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
