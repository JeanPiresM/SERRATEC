import { StyleSheet, View } from 'react-native';

export default function Linha() {
  return (
    <View style={styles.linha} />
  );
}

const styles = StyleSheet.create({
  linha: {
    backgroundColor: 'cyan',
    height: '15%',
    width: "100%",
    position: 'absolute'
}});