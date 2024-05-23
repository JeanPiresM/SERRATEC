import { StyleSheet, Text, View } from 'react-native';

export default function Pilar() {
  return (
    <View style={styles.pilar} />
   
  );
}

const styles = StyleSheet.create({
  pilar: {
    flex: 1,
    backgroundColor: 'red',
    height: '100%',
    width: "35%",
  },
});
