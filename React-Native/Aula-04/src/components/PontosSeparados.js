import { StyleSheet, View } from 'react-native';

export default function Pontos() {
  return (
    <View style={styles.container}>
      <View style={[styles.pontos, styles.ponto1]} />
      <View style={[styles.pontos, styles.ponto2]} />
      <View style={[styles.pontos, styles.ponto3]} />
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: "space-between",
 }, 
  pontos: {
    width:  100,
    height: 100,    
}, ponto1: {
  backgroundColor: 'green',
}, 
ponto2: {
backgroundColor: 'gray',
},  
ponto3: {
backgroundColor: 'black',
}
});