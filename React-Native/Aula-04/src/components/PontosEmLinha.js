import { StyleSheet, View } from 'react-native';

export default function PontosCentralizado() {
  return (
    <View style={styles.container}>
      <View style={styles.ponto1} />
      <View style={styles.ponto2} />
      <View style={styles.ponto3} />
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
  flexDirection: "row"
 }, 
  ponto1: {
    backgroundColor: 'green',
    width:  100,
    height: 100,    
}, 
 ponto2: {
  backgroundColor: 'yellow',
  width: 100,
  height: 100,
  },  
ponto3: {
  backgroundColor: 'pink',
  width: 100,
  height: 100,
  }
});