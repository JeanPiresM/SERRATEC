import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ItemLista from './src/components/ItemLista';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>React Native - Aula 03</Text>
      <ItemLista item="Primeiro Item"/>
      <ItemLista item="Segundo Item"/>
      <ItemLista item="Terceiro Item"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 180, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
