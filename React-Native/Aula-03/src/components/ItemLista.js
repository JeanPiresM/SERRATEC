import { Text, View } from 'react-native';

export default function ItemLista(props) {
 
  console.log("Props: ", props.item);
 
  return (
    <View>
      <Text>{props.item}</Text>
    </View>
  );
}
